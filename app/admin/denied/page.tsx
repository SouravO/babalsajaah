import Link from "next/link";
import { logout } from "../actions/auth";

export default function AdminDeniedPage() {
  return (
    <div className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="w-full max-w-md">
        <div className="bg-surface-container-lowest border-2 border-error shadow-[8px_8px_0px_0px_#bb0016] p-stack-lg relative">
          <div className="absolute -top-4 -left-4 bg-error text-on-error px-3 py-1 font-label-caps text-label-caps border border-outline">
            SYS: ACCESS_DENIED
          </div>
          <div className="mb-stack-lg border-b-2 border-error pb-stack-md">
            <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
              Access Denied
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              This account is not authorized for admin access. Contact the
              store owner if you believe this is a mistake.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="flex-1 bg-surface-container border border-outline text-center px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary transition-colors"
            >
              Back to Site
            </Link>
            <form action={logout} className="flex-1">
              <button
                type="submit"
                className="w-full bg-error text-on-error border border-error px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:bg-inverse-surface transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
