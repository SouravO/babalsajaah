"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} className="flex flex-col gap-stack-md">
      {state?.error && (
        <div className="bg-error-container text-on-error-container border border-error px-3 py-2 font-label-technical text-label-technical">
          {state.error}
        </div>
      )}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-2 bg-primary text-on-primary py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined">lock</span>
        {pending ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
