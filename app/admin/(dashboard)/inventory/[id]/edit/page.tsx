import { getPartById, listBrandNames, listCategoryNames } from "@/lib/parts/queries";
import { notFound } from "next/navigation";
import PartForm from "../../../../part-form";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EditPartPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const [part, brandOptions, categoryOptions] = await Promise.all([
    getPartById(id),
    listBrandNames(),
    listCategoryNames(),
  ]);

  if (!part) {
    notFound();
  }

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-4xl mx-auto w-full">
      <div className="mb-stack-lg border-b-2 border-primary pb-stack-sm flex items-center gap-4">
        <Link href="/admin/inventory" className="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-2 border border-outline bg-surface-container">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
            Edit Part
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Updating: <span className="font-bold">{part.name}</span> {part.part_number ? `(PN: ${part.part_number})` : ''}
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-stack-lg border border-outline">
        <PartForm
          initialData={part}
          brandOptions={brandOptions}
          categoryOptions={categoryOptions}
        />
      </div>
    </div>
  );
}
