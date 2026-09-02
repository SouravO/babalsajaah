import Link from "next/link";
import PartForm from "../../../part-form";
import { listBrandNames, listCategoryNames } from "@/lib/parts/queries";

export const dynamic = "force-dynamic";

export default async function NewPartPage() {
  const [brandOptions, categoryOptions] = await Promise.all([
    listBrandNames(),
    listCategoryNames(),
  ]);

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-4xl mx-auto w-full">
      <div className="mb-stack-lg border-b-2 border-primary pb-stack-sm flex items-center gap-4">
        <Link href="/admin/inventory" className="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-2 border border-outline bg-surface-container">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
            Add New Part
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Fill in the details below to add a new part to the inventory catalog.
          </p>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-stack-lg border border-outline">
        <PartForm brandOptions={brandOptions} categoryOptions={categoryOptions} />
      </div>
    </div>
  );
}
