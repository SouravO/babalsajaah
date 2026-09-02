import { listParts } from "@/lib/parts/queries";
import Link from "next/link";
import StockStatusBadge from "../../components/StockStatusBadge";
import InventoryRowActions from "../../components/InventoryRowActions";
import { CONDITION_LABELS } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminInventoryPage() {
  const parts = await listParts();

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-7xl mx-auto w-full flex flex-col min-h-full">
      <div className="flex flex-wrap justify-between items-end gap-stack-md mb-stack-lg border-b-2 border-primary pb-stack-sm">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
            Inventory Management
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Viewing all {parts.length} parts in the catalog.
          </p>
        </div>
        <Link
          href="/admin/inventory/new"
          className="bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-inverse-surface transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Part
        </Link>
      </div>

      {parts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-stack-xl border-2 border-dashed border-outline-variant text-center">
          <span className="material-symbols-outlined text-[64px] text-outline mb-stack-md">inventory</span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">No Parts Found</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Your catalog is currently empty.</p>
          <Link href="/admin/inventory/new" className="bg-secondary text-on-secondary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest">
            Add Your First Part
          </Link>
        </div>
      ) : (
        <div className="border border-outline overflow-x-auto bg-surface-container-lowest shadow-sm">
          <table className="w-full text-left font-label-technical text-label-technical">
            <thead className="bg-primary text-on-primary font-label-caps text-label-caps">
              <tr>
                <th className="p-stack-sm whitespace-nowrap">Photo</th>
                <th className="p-stack-sm whitespace-nowrap">Name</th>
                <th className="p-stack-sm whitespace-nowrap">Condition</th>
                <th className="p-stack-sm whitespace-nowrap">Price</th>
                <th className="p-stack-sm whitespace-nowrap">Stock</th>
                <th className="p-stack-sm text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {parts.map((part) => (
                <tr key={part.id} className="hover:bg-surface-container transition-colors">
                  <td className="p-stack-sm w-16">
                    {part.photos?.[0] ? (
                      <img
                        src={part.photos[0]}
                        alt={part.name}
                        className="w-12 h-12 object-cover border border-outline-variant rounded-sm"
                      />
                    ) : (
                      <div className="w-12 h-12 border border-outline-variant bg-surface flex items-center justify-center text-outline-variant rounded-sm">
                        <span className="material-symbols-outlined text-[18px]">
                          image_not_supported
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="p-stack-sm">
                    <div className="font-bold text-primary truncate max-w-[200px] md:max-w-[300px]" title={part.name}>
                      {part.name}
                    </div>
                    <div className="text-[10px] text-on-surface-variant uppercase mt-1 truncate" title={part.part_number ?? undefined}>
                      {part.part_number ? `PN: ${part.part_number}` : 'NO PN'}
                    </div>
                  </td>
                  <td className="p-stack-sm text-on-surface-variant uppercase text-xs">
                    {CONDITION_LABELS[part.condition]}
                  </td>
                  <td className="p-stack-sm font-bold text-primary">
                    {part.price ? `AED ${part.price}` : "POA"}
                  </td>
                  <td className="p-stack-sm">
                    <StockStatusBadge status={part.stock_status} bordered />
                  </td>
                  <td className="p-stack-sm text-right">
                    <InventoryRowActions partId={part.id} partName={part.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
