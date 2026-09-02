"use client";

import { useState } from "react";
import { inputClass } from "./fields";

interface CompatibilityRow {
  key: number;
  make: string;
  model: string;
  year: string;
}

let nextKey = 1;

function makeRow(row?: Partial<CompatibilityRow>): CompatibilityRow {
  return { key: nextKey++, make: "", model: "", year: "", ...row };
}

export default function CompatibilityEditor({
  initialRows,
}: {
  initialRows: { make: string; model: string; year: string }[];
}) {
  const [rows, setRows] = useState<CompatibilityRow[]>(
    initialRows.length ? initialRows.map((c) => makeRow(c)) : [makeRow()]
  );

  const updateRow = (
    key: number,
    field: "make" | "model" | "year",
    value: string
  ) => {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...r, [field]: value } : r))
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-stack-md">
        <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest">
          Compatible Make / Model / Year
        </h3>
        <button
          type="button"
          onClick={() => setRows((prev) => [...prev, makeRow()])}
          className="bg-secondary text-on-secondary px-3 py-1 font-label-caps text-label-caps uppercase hover:bg-secondary-container transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          Add Row
        </button>
      </div>
      <div className="flex flex-col gap-stack-sm">
        {rows.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-stack-sm"
          >
            <input
              name="make"
              value={row.make}
              onChange={(e) => updateRow(row.key, "make", e.target.value)}
              placeholder="Make (e.g. Toyota)"
              className={inputClass}
            />
            <input
              name="model"
              value={row.model}
              onChange={(e) => updateRow(row.key, "model", e.target.value)}
              placeholder="Model (e.g. Land Cruiser)"
              className={inputClass}
            />
            <input
              name="year"
              value={row.year}
              onChange={(e) => updateRow(row.key, "year", e.target.value)}
              placeholder="Year (e.g. 2018-2023)"
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                setRows((prev) => prev.filter((r) => r.key !== row.key))
              }
              disabled={rows.length === 1}
              className="border border-outline px-3 text-on-surface-variant hover:text-error hover:border-error transition-colors disabled:opacity-40"
              title="Remove row"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
