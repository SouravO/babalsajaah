import { createAdminClient } from "@/lib/supabase/admin";
import type { Part, StockStatus } from "@/lib/types";

export async function listParts(): Promise<Part[]> {
  const supabase = await createAdminClient();
  const { data } = await supabase
    .from("parts")
    .select("*")
    .order("created_at", { ascending: false });

  return (data ?? []) as Part[];
}

export async function getPartById(id: string): Promise<Part | null> {
  const supabase = await createAdminClient();
  const { data } = await supabase
    .from("parts")
    .select("*")
    .eq("id", id)
    .single();

  return (data as Part) ?? null;
}

export async function countParts(): Promise<number> {
  const supabase = await createAdminClient();
  const { count } = await supabase
    .from("parts")
    .select("*", { count: "exact", head: true });

  return count ?? 0;
}

export interface PartSummary {
  id: string;
  name: string;
  created_at: string;
  stock_status: StockStatus;
}

export async function listRecentParts(limit = 5): Promise<PartSummary[]> {
  const supabase = await createAdminClient();
  const { data } = await supabase
    .from("parts")
    .select("id, name, created_at, stock_status")
    .order("created_at", { ascending: false })
    .limit(limit);

  return (data ?? []) as PartSummary[];
}

export async function listBrandNames(): Promise<string[]> {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("brands")
    .select("name")
    .order("name");

  if (error) return [];
  return (data ?? []).map((row) => row.name);
}

export async function listCategoryNames(): Promise<string[]> {
  const supabase = await createAdminClient();
  const { data, error } = await supabase
    .from("categories")
    .select("name")
    .order("name");

  if (error) return [];
  return (data ?? []).map((row) => row.name);
}

export async function ensureTaxonomyValues(
  brand: string | null,
  category: string | null
): Promise<void> {
  const supabase = await createAdminClient();

  const brandName = brand?.trim();
  const categoryName = category?.trim();

  if (brandName) {
    await supabase.from("brands").upsert(
      { name: brandName },
      { onConflict: "name", ignoreDuplicates: true }
    );
  }

  if (categoryName) {
    await supabase.from("categories").upsert(
      { name: categoryName },
      { onConflict: "name", ignoreDuplicates: true }
    );
  }
}
