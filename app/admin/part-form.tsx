"use client";

import { useActionState, useRef, useState } from "react";
import { addPart, updatePart } from "./actions";
import { createClient } from "@/lib/supabase/browser";
import type { Part } from "@/lib/types";

interface CompatibilityRow {
  key: number;
  make: string;
  model: string;
  year: string;
}

const inputClass =
  "w-full bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none";
const labelClass =
  "font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase";

export default function PartForm({
  initialData = null,
}: {
  initialData?: Part | null;
}) {
  const isEdit = Boolean(initialData);
  const [state, action, pending] = useActionState(
    isEdit ? updatePart : addPart,
    undefined
  );
  const [photoUrls, setPhotoUrls] = useState<string[]>(
    initialData?.photos ?? []
  );
  const [uploading, setUploading] = useState(false);
  const [rows, setRows] = useState<CompatibilityRow[]>(
    initialData?.compatibility?.length
      ? initialData.compatibility.map((c, i) => ({
          key: i,
          make: c.make,
          model: c.model,
          year: c.year,
        }))
      : [{ key: 0, make: "", model: "", year: "" }]
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    const uploaded: string[] = [];
    for (const file of Array.from(files)) {
      const path = `parts/${crypto.randomUUID()}-${file.name.replace(
        /[^a-zA-Z0-9._-]/g,
        "_"
      )}`;
      const { data, error } = await supabase.storage
        .from("part-photos")
        .upload(path, file);
      if (error) {
        console.error("Upload failed:", error.message);
        continue;
      }
      const { data: urlData } = supabase.storage
        .from("part-photos")
        .getPublicUrl(data.path);
      uploaded.push(urlData.publicUrl);
    }
    setPhotoUrls((prev) => [...prev, ...uploaded]);
    setUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removePhoto = (index: number) => {
    setPhotoUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const updateRow = (
    key: number,
    field: keyof Omit<CompatibilityRow, "key">,
    value: string
  ) => {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...r, [field]: value } : r))
    );
  };

  return (
    <div className="bg-surface-container-lowest border-2 border-primary shadow-[6px_6px_0px_0px_rgba(0,1,1,0.8)] p-stack-lg relative">
      <div className="absolute -top-4 -left-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-label-caps border border-outline">
        {isEdit ? "SYS: PART_EDIT_V1" : "SYS: PART_ADD_V1"}
      </div>
      <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-lg border-b-2 border-primary pb-stack-sm">
        {isEdit ? "Edit Part" : "Add New Part"}
      </h2>

      {state?.error && (
        <div className="bg-error-container text-on-error-container border border-error px-3 py-2 font-label-technical text-label-technical mb-stack-md">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="bg-surface-container border border-primary px-3 py-2 font-label-technical text-label-technical text-primary mb-stack-md">
          {isEdit ? "Part updated successfully." : "Part saved successfully."}
        </div>
      )}

      <form action={action} className="flex flex-col gap-stack-lg">
        {isEdit && (
          <input type="hidden" name="id" value={initialData!.id} />
        )}
        <input
          type="hidden"
          name="photos"
          value={JSON.stringify(photoUrls)}
        />

        <div className="flex flex-col">
          <label htmlFor="name" className={labelClass}>
            Part Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={initialData?.name}
            placeholder="e.g. Forged Piston Kit"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <div className="flex flex-col">
            <label htmlFor="condition" className={labelClass}>
              Item Condition
            </label>
            <select
              id="condition"
              name="condition"
              defaultValue={initialData?.condition ?? "new"}
              className={inputClass}
            >
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
              <option value="genuine_oem">Genuine OEM</option>
              <option value="aftermarket">Aftermarket</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className={labelClass}>
              Price (AED)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              defaultValue={initialData?.price ?? ""}
              placeholder="0.00"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stock_status" className={labelClass}>
              Stock Status
            </label>
            <select
              id="stock_status"
              name="stock_status"
              defaultValue={initialData?.stock_status ?? "in_stock"}
              className={inputClass}
            >
              <option value="in_stock">In Stock</option>
              <option value="backorder">Backorder</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <div className="flex flex-col">
            <label htmlFor="category" className={labelClass}>
              Category (optional)
            </label>
            <input
              id="category"
              name="category"
              type="text"
              defaultValue={initialData?.category ?? ""}
              placeholder="e.g. Engine"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="brand" className={labelClass}>
              Brand (optional)
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              defaultValue={initialData?.brand ?? ""}
              placeholder="e.g. Bosch"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className={labelClass}>
            Description (optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            defaultValue={initialData?.description ?? ""}
            placeholder="Technical details, notes, packaging info..."
            className={inputClass}
          />
        </div>

        {/* Compatibility */}
        <div>
          <div className="flex justify-between items-center mb-stack-md">
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest">
              Compatible Make / Model / Year
            </h3>
            <button
              type="button"
              onClick={() =>
                setRows((prev) => [
                  ...prev,
                  {
                    key: Date.now(),
                    make: "",
                    model: "",
                    year: "",
                  },
                ])
              }
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
                    setRows((prev) =>
                      prev.filter((r) => r.key !== row.key)
                    )
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

        {/* Photos */}
        <div>
          <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest mb-stack-md">
            Physical Photos
          </h3>
          <div className="flex flex-col gap-stack-md">
            <div className="flex flex-wrap gap-stack-md">
              {photoUrls.map((url, i) => (
                <div key={url} className="relative">
                  <img
                    src={url}
                    alt={`Upload ${i + 1}`}
                    className="w-24 h-24 object-cover border border-outline"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -top-2 -right-2 bg-error text-on-error w-6 h-6 flex items-center justify-center border border-error shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                    title="Remove photo"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </div>
              ))}
            </div>
            <label className="cursor-pointer border-2 border-dashed border-outline bg-surface-container p-stack-lg flex flex-col items-center gap-2 text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[28px]">
                {uploading ? "progress_activity" : "add_photo_alternate"}
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest">
                {uploading ? "Uploading..." : "Select Photos"}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                disabled={uploading}
                onChange={(e) => handleFiles(e.target.files)}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={pending || uploading}
          className="bg-primary text-on-primary py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">save</span>
          {pending ? "Saving..." : isEdit ? "Update Part" : "Save Part"}
        </button>
      </form>
    </div>
  );
}
