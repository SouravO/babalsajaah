"use client";

import Link from "next/link";
import { deletePart } from "../actions/parts";

export default function InventoryRowActions({
  partId,
  partName,
}: {
  partId: string;
  partName: string;
}) {
  return (
    <div className="flex justify-end gap-2">
      <Link
        href={`/admin/inventory/${partId}/edit`}
        className="p-2 border border-outline text-primary hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center"
        title="Edit"
      >
        <span className="material-symbols-outlined text-[18px]">edit</span>
      </Link>
      <form
        action={deletePart}
        onSubmit={(e) => {
          if (!confirm(`Delete "${partName}"? This cannot be undone.`)) {
            e.preventDefault();
          }
        }}
      >
        <input type="hidden" name="id" value={partId} />
        <button
          type="submit"
          className="p-2 border border-outline text-error hover:bg-error hover:text-on-error transition-colors flex items-center justify-center"
          title="Delete"
        >
          <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </form>
    </div>
  );
}
