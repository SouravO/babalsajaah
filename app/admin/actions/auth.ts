"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

export type LoginState = { error?: string } | undefined;

function safeNextPath(raw: unknown): string {
  const value = typeof raw === "string" ? raw : "";
  if (value.startsWith("/admin") && !value.startsWith("//")) {
    return value;
  }
  return "/admin/inventory";
}

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = safeNextPath(formData.get("next"));

  const supabase = await createAdminClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Invalid email or password." };
  }

  redirect(next);
}

export async function logout() {
  const supabase = await createAdminClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
