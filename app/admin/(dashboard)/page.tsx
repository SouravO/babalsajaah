import { countParts, listRecentParts } from "@/lib/parts/queries";
import Link from "next/link";
import StockStatusBadge from "../components/StockStatusBadge";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [partsCount, recentParts] = await Promise.all([
    countParts(),
    listRecentParts(5),
  ]);

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-6xl mx-auto w-full">
      <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase mb-stack-lg border-b-2 border-primary pb-stack-sm">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
        <div className="bg-surface-container border border-outline p-stack-lg flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-[48px] text-secondary mb-stack-sm">inventory_2</span>
          <div className="font-headline-xl text-headline-xl text-primary leading-none mb-2">{partsCount}</div>
          <div className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">Total Parts in Catalog</div>
        </div>

        <Link href="/admin/inventory/new" className="bg-primary text-on-primary border border-primary p-stack-lg flex flex-col items-center text-center hover:bg-inverse-surface transition-colors group">
          <span className="material-symbols-outlined text-[48px] mb-stack-sm group-hover:scale-110 transition-transform">add_box</span>
          <div className="font-headline-md text-headline-md leading-none mb-2 mt-auto">Add New Part</div>
          <div className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">Update Inventory</div>
        </Link>

        <Link href="/admin/inventory" className="bg-surface border border-outline p-stack-lg flex flex-col items-center text-center hover:border-secondary transition-colors group">
          <span className="material-symbols-outlined text-[48px] text-primary mb-stack-sm group-hover:text-secondary transition-colors">manage_search</span>
          <div className="font-headline-md text-headline-md text-primary leading-none mb-2 mt-auto group-hover:text-secondary transition-colors">Manage Inventory</div>
          <div className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">Edit & Delete Parts</div>
        </Link>
      </div>

      <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-md mt-stack-xl border-b border-outline-variant pb-2">
        Recently Added
      </h2>
      <div className="bg-surface-container-lowest border border-outline">
        <table className="w-full text-left font-label-technical text-label-technical">
          <thead className="bg-surface-container text-on-surface font-label-caps text-label-caps">
            <tr>
              <th className="p-stack-sm border-b border-outline">Part Name</th>
              <th className="p-stack-sm border-b border-outline hidden md:table-cell">Added On</th>
              <th className="p-stack-sm border-b border-outline">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {recentParts.length ? recentParts.map(part => (
              <tr key={part.id} className="hover:bg-surface-container">
                <td className="p-stack-sm text-primary font-bold">
                  <Link href={`/admin/inventory/${part.id}/edit`} className="hover:underline">
                    {part.name}
                  </Link>
                </td>
                <td className="p-stack-sm text-on-surface-variant hidden md:table-cell">
                  {new Date(part.created_at).toLocaleDateString()}
                </td>
                <td className="p-stack-sm">
                  <StockStatusBadge status={part.stock_status} />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={3} className="p-stack-md text-center text-on-surface-variant">No parts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
