"use client";

import { useActionState, useState } from "react";
import { addPart, updatePart } from "./actions/parts";
import { Field, inputClass } from "./components/fields";
import PhotoUploader from "./components/PhotoUploader";
import CompatibilityEditor from "./components/CompatibilityEditor";
import type { Part } from "@/lib/types";

export default function PartForm({
  initialData = null,
  brandOptions = [],
  categoryOptions = [],
}: {
  initialData?: Part | null;
  brandOptions?: string[];
  categoryOptions?: string[];
}) {
  const isEdit = Boolean(initialData);
  const [state, action, pending] = useActionState(
    isEdit ? updatePart : addPart,
    undefined
  );
  const [photoUrls, setPhotoUrls] = useState<string[]>(
    initialData?.photos ?? []
  );

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

      <form action={action} className="flex flex-col gap-stack-lg" autoComplete="off">
        {isEdit && (
          <input type="hidden" name="id" value={initialData!.id} />
        )}
        <input
          type="hidden"
          name="photos"
          value={JSON.stringify(photoUrls)}
        />

        <Field label="Part Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={initialData?.name}
            placeholder="e.g. Forged Piston Kit"
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <Field label="Item Condition" htmlFor="condition">
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
          </Field>
          <Field label="Price (AED)" htmlFor="price">
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
          </Field>
          <Field label="Stock Status" htmlFor="stock_status">
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
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <Field label="Category (optional)" htmlFor="category">
            <input
              id="category"
              name="category"
              type="text"
              list="category-options"
              defaultValue={initialData?.category ?? ""}
              placeholder="e.g. Engine"
              className={inputClass}
            />
            <datalist id="category-options">
              {categoryOptions.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </Field>
          <Field label="Brand (optional)" htmlFor="brand">
            <input
              id="brand"
              name="brand"
              type="text"
              list="brand-options"
              defaultValue={initialData?.brand ?? ""}
              placeholder="e.g. Bosch"
              className={inputClass}
            />
            <datalist id="brand-options">
              {brandOptions.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </Field>
        </div>

        <Field label="Description (optional)" htmlFor="description">
          <textarea
            id="description"
            name="description"
            rows={3}
            defaultValue={initialData?.description ?? ""}
            placeholder="Technical details, notes, packaging info..."
            className={inputClass}
          />
        </Field>

        <CompatibilityEditor initialRows={initialData?.compatibility ?? []} />

        <PhotoUploader photos={photoUrls} onChange={setPhotoUrls} />

        <button
          type="submit"
          disabled={pending}
          className="bg-primary text-on-primary py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">save</span>
          {pending ? "Saving..." : isEdit ? "Update Part" : "Save Part"}
        </button>
      </form>
    </div>
  );
}
