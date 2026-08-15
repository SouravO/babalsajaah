import LoginForm from "../login-form";

export default function AdminLoginPage() {
  return (
    <div className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="w-full max-w-md">
        <div className="bg-surface-container-lowest border-2 border-primary shadow-[8px_8px_0px_0px_#bb0016] p-stack-lg relative">
          <div className="absolute -top-4 -left-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-label-caps border border-outline">
            SYS: ADMIN_ACCESS
          </div>
          <div className="mb-stack-lg border-b-2 border-primary pb-stack-md">
            <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
              Admin Sign In
            </h1>
            <p className="font-label-technical text-label-technical text-on-surface-variant mt-1">
              Restricted access. Authorized personnel only.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
