"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export type LoginState = { error?: string } | undefined;

export async function login(prevState: LoginState, formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createAdminClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Invalid email or password." };
  }

  redirect("/admin");
}

export async function logout() {
  const supabase = await createAdminClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export type AddPartState =
  | { error?: string; success?: boolean }
  | undefined;

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function addPart(prevState: AddPartState, formData: FormData) {
  const supabase = await createAdminClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "You must be signed in to add a part." };
  }

  if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "")) {
    return { error: "You are not authorized to add parts." };
  }

  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    return { error: "Part name is required." };
  }

  const condition = String(formData.get("condition") ?? "new");
  const stockStatus = String(formData.get("stock_status") ?? "in_stock");
  const priceRaw = String(formData.get("price") ?? "").trim();
  const price = priceRaw ? Number(priceRaw) : null;
  const category = String(formData.get("category") ?? "").trim();
  const brand = String(formData.get("brand") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  const makes = formData.getAll("make");
  const models = formData.getAll("model");
  const years = formData.getAll("year");

  const compatibility = makes
    .map((_, i) => ({
      make: String(makes[i] ?? "").trim(),
      model: String(models[i] ?? "").trim(),
      year: String(years[i] ?? "").trim(),
    }))
    .filter((c) => c.make || c.model || c.year);

  const photosRaw = formData.get("photos");
  let photos: string[] = [];
  if (photosRaw) {
    try {
      const parsed = JSON.parse(String(photosRaw));
      photos = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      return { error: "Invalid photo data submitted." };
    }
  }

  const slug = `${slugify(name)}-${Date.now().toString(36).slice(-4)}`;

  const { error } = await supabase.from("parts").insert({
    slug,
    name,
    part_number: null,
    condition,
    price,
    stock_status: stockStatus,
    category: category || null,
    brand: brand || null,
    description: description || null,
    compatibility,
    photos,
  });

  if (error) {
    return { error: `Failed to save part: ${error.message}` };
  }

  revalidatePath("/catalog");
  revalidatePath("/catalog/[id]", "page");
  revalidatePath("/", "layout");

  return { success: true };
}

export type UpdatePartState = AddPartState;

export async function updatePart(prevState: UpdatePartState, formData: FormData) {
  const supabase = await createAdminClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "You must be signed in to update a part." };
  }

  if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "")) {
    return { error: "You are not authorized to update parts." };
  }

  const id = String(formData.get("id") ?? "");
  if (!id) {
    return { error: "Missing part id." };
  }

  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    return { error: "Part name is required." };
  }

  const condition = String(formData.get("condition") ?? "new");
  const stockStatus = String(formData.get("stock_status") ?? "in_stock");
  const priceRaw = String(formData.get("price") ?? "").trim();
  const price = priceRaw ? Number(priceRaw) : null;
  const category = String(formData.get("category") ?? "").trim();
  const brand = String(formData.get("brand") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  const makes = formData.getAll("make");
  const models = formData.getAll("model");
  const years = formData.getAll("year");

  const compatibility = makes
    .map((_, i) => ({
      make: String(makes[i] ?? "").trim(),
      model: String(models[i] ?? "").trim(),
      year: String(years[i] ?? "").trim(),
    }))
    .filter((c) => c.make || c.model || c.year);

  const photosRaw = formData.get("photos");
  let photos: string[] = [];
  if (photosRaw) {
    try {
      const parsed = JSON.parse(String(photosRaw));
      photos = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      return { error: "Invalid photo data submitted." };
    }
  }

  const { error } = await supabase
    .from("parts")
    .update({
      name,
      part_number: null,
      condition,
      price,
      stock_status: stockStatus,
      category: category || null,
      brand: brand || null,
      description: description || null,
      compatibility,
      photos,
    })
    .eq("id", id);

  if (error) {
    return { error: `Failed to update part: ${error.message}` };
  }

  revalidatePath("/catalog");
  revalidatePath("/catalog/[id]", "page");
  revalidatePath("/admin");

  return { success: true };
}

export async function deletePart(formData: FormData) {
  const supabase = await createAdminClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return;
  }

  if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "")) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  if (!id) {
    return;
  }

  await supabase.from("parts").delete().eq("id", id);

  revalidatePath("/catalog");
  revalidatePath("/admin");
}
