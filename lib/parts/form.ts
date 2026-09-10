import type { CompatibilityEntry, ItemCondition, StockStatus } from "@/lib/types";

const ITEM_CONDITIONS: ItemCondition[] = [
  "new",
  "used",
  "refurbished",
  "genuine_oem",
  "aftermarket",
];

const STOCK_STATUSES: StockStatus[] = ["in_stock", "backorder", "out_of_stock"];

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function newPartSlug(name: string): string {
  return `${slugify(name)}-${Date.now().toString(36).slice(-4)}`;
}

export interface ParsedPartInput {
  name: string;
  condition: ItemCondition;
  price: number | null;
  stock_status: StockStatus;
  category: string | null;
  brand: string | null;
  description: string | null;
  compatibility: CompatibilityEntry[];
  photos: string[];
}

export function parsePartForm(
  formData: FormData
): { ok: true; data: ParsedPartInput } | { ok: false; error: string } {
  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    return { ok: false, error: "Part name is required." };
  }

  const conditionRaw = String(formData.get("condition") ?? "new");
  const condition = (ITEM_CONDITIONS as string[]).includes(conditionRaw)
    ? (conditionRaw as ItemCondition)
    : "new";

  const stockRaw = String(formData.get("stock_status") ?? "in_stock");
  const stock_status = (STOCK_STATUSES as string[]).includes(stockRaw)
    ? (stockRaw as StockStatus)
    : "in_stock";

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

  let photos: string[] = [];
  const photosRaw = formData.get("photos");

  if (photosRaw) {
    try {
      const parsed = JSON.parse(String(photosRaw));
      photos = Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      return { ok: false, error: "Invalid photo data submitted." };
    }
  }

  return {
    ok: true,
    data: {
      name,
      condition,
      price: null,
      stock_status,
      category: category || null,
      brand: brand || null,
      description: description || null,
      compatibility,
      photos,
    },
  };
}
