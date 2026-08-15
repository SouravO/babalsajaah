import { redirect, notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { type Part } from "@/lib/types";
import PartForm from "../../../part-form";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const dynamic = "force-dynamic";

export default async function EditPartPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createAdminClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "")) {
    redirect("/admin");
  }

  const { data: part } = await supabase
    .from("parts")
    .select("*")
    .eq("id", id)
    .single();

  if (!part) {
    notFound();
  }

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto p-margin-mobile md:p-margin-desktop">
      <div className="flex flex-wrap justify-between items-end gap-stack-md mb-stack-lg border-b-2 border-primary pb-stack-sm">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">
            Edit Part
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            {part.name}
          </p>
        </div>
        <a
          href="/admin"
          className="bg-secondary text-on-secondary px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary-container transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          Back to Admin
        </a>
      </div>

      <PartForm initialData={part as Part} />
    </div>
  );
}
