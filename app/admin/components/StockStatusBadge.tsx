import { STOCK_LABELS, type StockStatus } from "@/lib/types";

const STATUS_STYLES: Record<StockStatus, string> = {
  in_stock: "bg-green-100 text-green-800",
  backorder: "bg-orange-100 text-orange-800",
  out_of_stock: "bg-red-100 text-red-800",
};

const STATUS_BORDERS: Record<StockStatus, string> = {
  in_stock: "border-green-200",
  backorder: "border-orange-200",
  out_of_stock: "border-red-200",
};

export default function StockStatusBadge({
  status,
  bordered = false,
}: {
  status: StockStatus;
  bordered?: boolean;
}) {
  return (
    <span
      className={`px-2 py-1 uppercase text-[10px] whitespace-nowrap ${STATUS_STYLES[status]} ${
        bordered ? `border ${STATUS_BORDERS[status]}` : ""
      }`}
    >
      {STOCK_LABELS[status]}
    </span>
  );
}
