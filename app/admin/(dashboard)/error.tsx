"use client";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-6xl mx-auto w-full">
      <div className="bg-surface-container-lowest border-2 border-error p-stack-lg">
        <div className="flex items-center gap-3 mb-stack-md">
          <span className="material-symbols-outlined text-[32px] text-error">error</span>
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter">
            Something went wrong
          </h2>
        </div>
        <p className="font-label-technical text-label-technical text-on-surface-variant mb-stack-lg break-all">
          {error.message}
        </p>
        <button
          type="button"
          onClick={reset}
          className="bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
