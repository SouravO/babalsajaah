"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ViewToggler({ currentView }: { currentView: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setView = (view: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", view);
    router.push(pathname + '?' + params.toString());
  };

  return (
    <div className="flex gap-2 text-on-surface-variant">
      <button 
        onClick={() => setView('grid')}
        className={`p-2 border hover:border-primary transition-colors ${currentView === 'grid' ? 'border-primary bg-surface-lowest text-primary' : 'border-outline bg-surface-container hover:text-primary'}`}
      >
        <span className="material-symbols-outlined">grid_view</span>
      </button>
      <button 
        onClick={() => setView('list')}
        className={`p-2 border hover:border-primary transition-colors ${currentView === 'list' ? 'border-primary bg-surface-lowest text-primary' : 'border-outline bg-surface-container hover:text-primary'}`}
      >
        <span className="material-symbols-outlined">view_list</span>
      </button>
    </div>
  );
}
