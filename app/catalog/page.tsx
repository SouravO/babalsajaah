import { supabaseServer } from "@/lib/supabase/server";
import { CONDITION_LABELS, STOCK_LABELS, type Part } from "@/lib/types";
import Link from "next/link";
import CatalogFilters from "./CatalogFilters";
import ViewToggler from "./ViewToggler";

export const dynamic = "force-dynamic";

export default async function Catalog(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  
  const { data } = await supabaseServer()
    .from("parts")
    .select("*")
    .order("created_at", { ascending: false });

  const allParts = (data ?? []) as Part[];
  
  const categories = Array.from(new Set(allParts.map((p) => p.category).filter((c): c is string => Boolean(c))));
  const brands = Array.from(new Set(allParts.map((p) => p.brand).filter((b): b is string => Boolean(b))));
  const conditions = Array.from(new Set(allParts.map((p) => p.condition).filter(Boolean)));
  const stockStatuses = Array.from(new Set(allParts.map((p) => p.stock_status).filter(Boolean)));

  const getArray = (val: string | string[] | undefined) => {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
  };

  const selectedCategories = getArray(searchParams.category);
  const selectedBrands = getArray(searchParams.brand);
  const selectedConditions = getArray(searchParams.condition);
  const selectedStock = getArray(searchParams.stock);

  const parts = allParts.filter(part => {
    if (selectedCategories.length > 0 && (!part.category || !selectedCategories.includes(part.category))) return false;
    if (selectedBrands.length > 0 && (!part.brand || !selectedBrands.includes(part.brand))) return false;
    if (selectedConditions.length > 0 && (!part.condition || !selectedConditions.includes(part.condition))) return false;
    if (selectedStock.length > 0 && (!part.stock_status || !selectedStock.includes(part.stock_status))) return false;
    return true;
  });

  const viewParam = searchParams.view;
  const view = viewParam === 'list' ? 'list' : 'grid';

  const count = parts.length;

  return (
    <div className="flex-grow flex w-full">
      {/* SideNavBar */}
      <CatalogFilters 
        categories={categories}
        brands={brands}
        conditions={conditions}
        stockStatuses={stockStatuses}
      />

      {/* Main Content Canvas */}
      <div className="flex-grow p-gutter md:p-margin-desktop bg-surface-bright">
        <div className="flex justify-between items-end mb-stack-lg border-b-2 border-primary pb-stack-sm">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
              Product Catalog
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Displaying {count} {count === 1 ? "Part" : "Parts"}
            </p>
          </div>
          <ViewToggler currentView={view} />
        </div>

        {parts.length === 0 ? (
          <div className="border-2 border-dashed border-outline p-stack-lg text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              No parts in the catalog yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className={`grid gap-gutter ${view === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {parts.map((part) => {
              const primaryCompat = part.compatibility?.[0];
              return (
                <div
                  key={part.id}
                  className={`bg-surface-container-lowest border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex ${view === 'list' ? 'flex-col md:flex-row' : 'flex-col'}`}
                >
                  <a
                    href={`/catalog/${part.id}`}
                    className={`relative border-outline overflow-hidden bg-surface-container block shrink-0 ${view === 'list' ? 'h-48 md:h-auto md:w-1/3 border-b md:border-b-0 md:border-r' : 'h-48 border-b'}`}
                  >
                    {part.photos?.[0] ? (
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={part.photos[0]}
                        alt={part.name}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-outline">
                        <span className="material-symbols-outlined" style={{ fontSize: "3rem" }}>
                          image_not_supported
                        </span>
                      </div>
                    )}
                    <div
                      className={`absolute top-2 left-2 bg-surface-lowest border px-2 py-1 font-label-caps text-label-caps uppercase flex items-center gap-1 ${
                        part.stock_status === "in_stock"
                          ? "border-outline text-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : part.stock_status === "backorder"
                            ? "border-orange-500 border-dashed text-orange-600"
                            : "border-error text-error"
                      }`}
                    >
                      {part.stock_status === "in_stock" && (
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      )}
                      {STOCK_LABELS[part.stock_status]}
                    </div>
                  </a>
                  <div className="p-stack-md flex-grow flex flex-col">
                    <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-1 uppercase tracking-tight">
                      {part.name}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                      {part.description
                        ? part.description.slice(0, 90) +
                          (part.description.length > 90 ? "..." : "")
                        : CONDITION_LABELS[part.condition] ?? part.condition}
                    </p>
                    <div className="mt-auto grid grid-cols-2 gap-px bg-outline border border-outline tech-font text-label-technical mb-stack-lg">
                      <div className="bg-surface-container-lowest p-2">
                        <span className="block text-on-surface-variant text-[10px] uppercase">
                          Condition
                        </span>
                        <span className="text-primary font-bold">
                          {CONDITION_LABELS[part.condition] ?? part.condition}
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2">
                        <span className="block text-on-surface-variant text-[10px] uppercase">
                          Brand
                        </span>
                        <span className="text-primary font-bold truncate block">
                          {part.brand || "N/A"}
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2">
                        <span className="block text-on-surface-variant text-[10px] uppercase">
                          Part #
                        </span>
                        <span className="text-primary font-bold truncate block">
                          {part.part_number || "N/A"}
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-2">
                        <span className="block text-on-surface-variant text-[10px] uppercase">
                          Compatibility
                        </span>
                        <span className="text-primary truncate block">
                          {primaryCompat
                            ? [primaryCompat.make, primaryCompat.model, primaryCompat.year]
                                .filter(Boolean)
                                .join(" ") || "N/A"
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto border-t border-outline pt-stack-md gap-2">
                      <span className="font-headline-md text-headline-md text-primary">
                        {part.price != null
                          ? `AED ${Number(part.price).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                            })}`
                          : "POA"}
                      </span>
                      <div className="flex gap-2">
                        <a 
                          href={`https://wa.me/971501234567?text=${encodeURIComponent(`Hi, I'm interested in ${part.name} (Part #: ${part.part_number || 'N/A'}). Can you provide more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] text-white px-3 py-2 font-label-caps text-label-caps uppercase hover:bg-green-600 transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[18px]">chat</span>
                          <span className="hidden xl:inline">WhatsApp</span>
                        </a>
                        <a
                          href={`/catalog/${part.id}`}
                          className="border border-primary text-primary px-3 py-2 font-label-caps text-label-caps uppercase hover:bg-surface-container transition-colors flex items-center gap-1"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
