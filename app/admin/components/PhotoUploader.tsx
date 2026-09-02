"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export default function PhotoUploader({
  photos,
  onChange,
}: {
  photos: string[];
  onChange: (photos: string[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    const uploaded: string[] = [];
    for (const file of Array.from(files)) {
      const path = `parts/${crypto.randomUUID()}-${file.name.replace(
        /[^a-zA-Z0-9._-]/g,
        "_"
      )}`;
      const { data, error } = await createClient().storage
        .from("part-photos")
        .upload(path, file);
      if (error) {
        console.error("Upload failed:", error.message);
        continue;
      }
      const { data: urlData } = createClient().storage
        .from("part-photos")
        .getPublicUrl(data.path);
      uploaded.push(urlData.publicUrl);
    }
    onChange([...photos, ...uploaded]);
    setUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <h3 className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest mb-stack-md">
        Physical Photos
      </h3>
      <div className="flex flex-col gap-stack-md">
        <div className="flex flex-wrap gap-stack-md">
          {photos.map((url, i) => (
            <div key={url} className="relative">
              <img
                src={url}
                alt={`Upload ${i + 1}`}
                className="w-24 h-24 object-cover border border-outline"
              />
              <button
                type="button"
                onClick={() => onChange(photos.filter((_, idx) => idx !== i))}
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
  );
}
