import { requireAdminUser } from "@/lib/admin/auth";
import Link from "next/link";
import { logout } from "../actions/auth";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdminUser();

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-surface-bright">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface-container border-r border-outline flex flex-col shrink-0">
        <div className="p-stack-lg border-b border-outline">
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter">Babal Sajaah</h2>
          <div className="font-label-technical text-label-technical text-on-surface-variant">Admin Portal</div>
        </div>

        <nav className="flex-1 py-stack-md flex flex-col gap-2 px-stack-sm">
          <Link href="/admin" className="flex items-center gap-3 px-stack-sm py-2 text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link href="/admin/inventory" className="flex items-center gap-3 px-stack-sm py-2 text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest">
            <span className="material-symbols-outlined">inventory_2</span>
            Inventory
          </Link>
          <Link href="/admin/inventory/new" className="flex items-center gap-3 px-stack-sm py-2 text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors font-label-caps text-label-caps uppercase tracking-widest">
            <span className="material-symbols-outlined">add_box</span>
            Add Part
          </Link>
        </nav>

        <div className="p-stack-md border-t border-outline">
          <div className="font-label-technical text-label-technical text-on-surface-variant truncate mb-stack-md" title={user.email}>
            {user.email}
          </div>
          <form action={logout}>
            <button type="submit" className="w-full bg-surface text-error border border-error px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-error hover:text-on-error transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
