export type StockStatus = "in_stock" | "backorder" | "out_of_stock";

export type ItemCondition =
  | "new"
  | "used"
  | "refurbished"
  | "genuine_oem"
  | "aftermarket";

export interface CompatibilityEntry {
  make: string;
  model: string;
  year: string;
}

export interface Part {
  id: string;
  slug: string;
  name: string;
  part_number: string | null;
  condition: ItemCondition;
  price: number | null;
  stock_status: StockStatus;
  category: string | null;
  brand: string | null;
  description: string | null;
  compatibility: CompatibilityEntry[];
  photos: string[];
  created_at: string;
  updated_at: string;
}

export const CONDITION_LABELS: Record<ItemCondition, string> = {
  new: "New",
  used: "Used",
  refurbished: "Refurbished",
  genuine_oem: "Genuine OEM",
  aftermarket: "Aftermarket",
};

export const STOCK_LABELS: Record<StockStatus, string> = {
  in_stock: "In Stock",
  backorder: "Backorder",
  out_of_stock: "Out of Stock",
};
