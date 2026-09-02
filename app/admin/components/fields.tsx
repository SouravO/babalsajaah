export const inputClass =
  "w-full bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none";

export const labelClass =
  "font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase";

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}
