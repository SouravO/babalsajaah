import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { CONDITION_LABELS, STOCK_LABELS, type Part } from "@/lib/types";
import AddPartForm from "./add-part-form";
import { deletePart, logout } from "./actions";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createAdminClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "");

  let parts: Part[] = [];
  if (isAdmin) {
    const { data } = await supabase
      .from("parts")
      .select("*")
      .order("created_at", { ascending: false });
    parts = (data ?? []) as Part[];
  }

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto p-margin-mobile md:p-margin-desktop">
      <div className="flex flex-wrap justify-between items-end gap-stack-md mb-stack-lg border-b-2 border-primary pb-stack-sm">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
            Admin Panel
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {user.email}
            {!isAdmin && (
              <span className="ml-2 text-error">
                - not authorized to manage parts
              </span>
            )}
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="bg-secondary text-on-secondary px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary-container transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Sign Out
          </button>
        </form>
      </div>

      {isAdmin ? (
        <>
          <AddPartForm />

          <div className="mt-stack-lg pt-stack-lg border-t-2 border-outline-variant">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-md">
              Inventory ({parts.length})
            </h2>
            {parts.length === 0 ? (
              <p className="font-body-md text-body-md text-on-surface-variant">
                No parts yet. Add your first part above.
              </p>
            ) : (
              <div className="border border-outline overflow-x-auto bg-surface-container-lowest">
                <table className="w-full text-left font-label-technical text-label-technical">
                  <thead className="bg-primary text-on-primary font-label-caps text-label-caps">
                    <tr>
                      <th className="p-stack-sm">Photo</th>
                      <th className="p-stack-sm">Name</th>
                      <th className="p-stack-sm">Condition</th>
                      <th className="p-stack-sm">Price</th>
                      <th className="p-stack-sm">Stock</th>
                      <th className="p-stack-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {parts.map((part) => (
                      <tr key={part.id} className="hover:bg-surface-container">
                        <td className="p-stack-sm">
                          {part.photos?.[0] ? (
                            <img
                              src={part.photos[0]}
                              alt={part.name}
                              className="w-12 h-12 object-cover border border-outline-variant"
                            />
                          ) : (
                            <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center text-outline">
                              <span className="material-symbols-outlined text-[18px]">
                                image_not_supported
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="p-stack-sm text-primary font-bold">
                          {part.name}
                        </td>
                        <td className="p-stack-sm">
                          {CONDITION_LABELS[part.condition] ?? part.condition}
                        </td>
                        <td className="p-stack-sm">
                          {part.price != null
                            ? `AED ${Number(part.price).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                              })}`
                            : "-"}
                        </td>
                        <td className="p-stack-sm">
                          <span
                            className={
                              part.stock_status === "in_stock"
                                ? "text-[#008000]"
                                : part.stock_status === "backorder"
                                  ? "text-orange-600"
                                  : "text-error"
                            }
                          >
                            {STOCK_LABELS[part.stock_status]}
                          </span>
                        </td>
                        <td className="p-stack-sm">
                          <div className="flex items-center gap-stack-sm">
                            <a
                              href={`/admin/parts/${part.id}/edit`}
                              className="text-primary hover:text-secondary flex items-center gap-1"
                              title="Edit part"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </a>
                            <form action={deletePart}>
                              <input type="hidden" name="id" value={part.id} />
                              <button
                                type="submit"
                                className="text-error hover:text-error-container flex items-center gap-1"
                                title="Delete part"
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  delete
                                </span>
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      ) : (
        <p className="font-body-md text-body-md text-on-surface-variant">
          Your account is not in the ADMIN_EMAILS list. Contact the site owner
          to grant access.
        </p>
      )}
    </div>
  );
}
