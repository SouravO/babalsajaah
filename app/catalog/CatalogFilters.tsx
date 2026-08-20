"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { CONDITION_LABELS, STOCK_LABELS } from "@/lib/types";
import Link from "next/link";

interface CatalogFiltersProps {
  categories: string[];
  brands: string[];
  conditions: string[];
  stockStatuses: string[];
}

export default function CatalogFilters({
  categories,
  brands,
  conditions,
  stockStatuses,
}: CatalogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const currentValues = params.getAll(name);
      
      if (currentValues.includes(value)) {
        // Remove value
        params.delete(name);
        currentValues.filter(v => v !== value).forEach(v => params.append(name, v));
      } else {
        // Add value
        params.append(name, value);
      }
      
      return params.toString();
    },
    [searchParams]
  );

  const toggleFilter = (name: string, value: string) => {
    router.push(pathname + '?' + createQueryString(name, value));
  };

  const isChecked = (name: string, value: string) => {
    return searchParams.getAll(name).includes(value);
  };

  return (
    <aside className="hidden md:flex flex-col w-64 sticky top-20 self-start bg-surface-container text-on-surface font-label-caps text-label-caps border-r border-outline flat no shadows py-stack-lg shrink-0 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="px-gutter mb-stack-lg">
        <div className="font-headline-lg text-headline-lg text-primary mb-1 tracking-tighter">
          Bab Al Sajaah
        </div>
        <div className="text-on-surface-variant tech-font text-label-technical">
          Precision Spare Parts
        </div>
      </div>
      <nav className="flex flex-col gap-1 w-full flex-grow">
        <Link
          className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200"
          href="/"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="uppercase tracking-widest">Home</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-gutter py-3 bg-secondary text-on-secondary rounded-none border-l-4 border-primary transition-all duration-200"
          href="/catalog"
        >
          <span className="material-symbols-outlined icon-fill">
            settings_input_component
          </span>
          <span className="uppercase tracking-widest">Catalog</span>
        </Link>
        <a
          className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">directions_car</span>
          <span className="uppercase tracking-widest">Compatibility</span>
        </a>
        <a
          className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">description</span>
          <span className="uppercase tracking-widest">My Quotes</span>
        </a>
        <a
          className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200"
          href="/contact"
        >
          <span className="material-symbols-outlined">support_agent</span>
          <span className="uppercase tracking-widest">Support</span>
        </a>
      </nav>
      <div className="px-gutter mt-auto pt-stack-lg border-t border-outline">
        <div className="flex justify-between items-center mb-stack-md">
          <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">
            Filters
          </h3>
          {Array.from(searchParams.keys()).length > 0 && (
            <button 
              onClick={() => router.push(pathname)}
              className="text-[10px] text-secondary hover:underline uppercase"
            >
              Clear All
            </button>
          )}
        </div>
        
        <div className="space-y-stack-md mb-stack-lg">
          {categories.length > 0 && (
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Category
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      checked={isChecked('category', category)}
                      onChange={() => toggleFilter('category', category)}
                      className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface"
                      type="checkbox"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </details>
          )}
          
          {brands.length > 0 && (
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Brand
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      checked={isChecked('brand', brand)}
                      onChange={() => toggleFilter('brand', brand)}
                      className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface"
                      type="checkbox"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </details>
          )}

          {conditions.length > 0 && (
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Condition
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                {conditions.map((condition) => (
                  <label
                    key={condition}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      checked={isChecked('condition', condition)}
                      onChange={() => toggleFilter('condition', condition)}
                      className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface"
                      type="checkbox"
                    />
                    {CONDITION_LABELS[condition as keyof typeof CONDITION_LABELS] ?? condition}
                  </label>
                ))}
              </div>
            </details>
          )}

          {stockStatuses.length > 0 && (
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Stock Status
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                {stockStatuses.map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      checked={isChecked('stock', status)}
                      onChange={() => toggleFilter('stock', status)}
                      className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface"
                      type="checkbox"
                    />
                    {STOCK_LABELS[status as keyof typeof STOCK_LABELS] ?? status}
                  </label>
                ))}
              </div>
            </details>
          )}
        </div>
        <button className="w-full bg-primary text-on-primary py-3 font-label-caps text-label-caps uppercase hover:bg-tertiary transition-colors border border-primary flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">search</span>
          Part Search
        </button>
      </div>
    </aside>
  );
}
