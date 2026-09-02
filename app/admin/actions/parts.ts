"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail } from "@/lib/admin/auth";
import { newPartSlug, parsePartForm } from "@/lib/parts/form";
import { ensureTaxonomyValues } from "@/lib/parts/queries";

export type PartActionState =
  | { error?: string; success?: boolean }
  | undefined;

async function getAuthorizedUser() {
  const supabase = await createAdminClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) return null;
  if (!isAdminEmail(user.email)) return null;

  return user;
}

function revalidatePartViews() {
  revalidatePath("/catalog");
  revalidatePath("/catalog/[id]", "page");
  revalidatePath("/admin");
  revalidatePath("/admin/inventory");
}

export async function addPart(
  prevState: PartActionState,
  formData: FormData
): Promise<PartActionState> {
  const user = await getAuthorizedUser();

  if (!user) {
    return { error: "You are not authorized to add parts." };
  }

  const parsed = parsePartForm(formData);
  if (!parsed.ok) {
    return { error: parsed.error };
  }

  const part = parsed.data;
  const supabase = await createAdminClient();
  const { error } = await supabase.from("parts").insert({
    slug: newPartSlug(part.name),
    ...part,
    part_number: null,
  });

  if (error) {
    return { error: `Failed to save part: ${error.message}` };
  }

  await ensureTaxonomyValues(part.brand, part.category);
  revalidatePartViews();

  return { success: true };
}

export async function updatePart(
  prevState: PartActionState,
  formData: FormData
): Promise<PartActionState> {
  const user = await getAuthorizedUser();

  if (!user) {
    return { error: "You are not authorized to update parts." };
  }

  const id = String(formData.get("id") ?? "");
  if (!id) {
    return { error: "Missing part id." };
  }

  const parsed = parsePartForm(formData);
  if (!parsed.ok) {
    return { error: parsed.error };
  }

  const part = parsed.data;
  const supabase = await createAdminClient();
  const { error } = await supabase
    .from("parts")
    .update({
      ...part,
      part_number: null,
    })
    .eq("id", id);

  if (error) {
    return { error: `Failed to update part: ${error.message}` };
  }

  await ensureTaxonomyValues(part.brand, part.category);
  revalidatePartViews();

  return { success: true };
}

export async function deletePart(formData: FormData) {
  const user = await getAuthorizedUser();

  if (!user) return;

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createAdminClient();
  await supabase.from("parts").delete().eq("id", id);

  revalidatePartViews();
}
