"use client";

import { useActionState } from "react";
import { login } from "./actions/auth";
import { Field, inputClass } from "./components/fields";

export default function LoginForm({ next }: { next?: string }) {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} className="flex flex-col gap-stack-md">
      {next && <input type="hidden" name="next" value={next} />}
      {state?.error && (
        <div className="bg-error-container text-on-error-container border border-error px-3 py-2 font-label-technical text-label-technical">
          {state.error}
        </div>
      )}
      <Field label="Email" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>
      <Field label="Password" htmlFor="password" required>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </Field>
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
