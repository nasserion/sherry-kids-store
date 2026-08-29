"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { business } from "@/lib/business";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", email: "", subject: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(v: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!v.name.trim()) next.name = "Please enter your full name.";
    if (!v.phone.trim()) next.phone = "Please enter a phone number.";
    if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email)) next.email = "Please enter a valid email address.";
    if (!v.subject.trim()) next.subject = "Please add a short subject.";
    if (!v.message.trim() || v.message.trim().length < 10) next.message = "Please enter a message (at least 10 characters).";
    return next;
  }

  function handleChange<K extends keyof FormState>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");

    // No backend is connected yet, so we hand the message to the customer's own
    // email client with everything pre-filled. Swap this for a real API call
    // (e.g. to an email service or CRM) once one is available.
    const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || "—"}\n\n${values.message}`;
    const mailto = `mailto:${business.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      window.location.href = mailto;
      setStatus("success");
    }, 500);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-mint/10 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-mint" />
        <h3 className="font-display text-lg font-bold text-ink">Your message is ready to send!</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          We&apos;ve opened your email app with your message filled in — just hit send. If nothing opened, email us
          directly at{" "}
          <a href={`mailto:${business.email}`} className="font-semibold text-coral-dark underline">
            {business.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setStatus("idle");
          }}
          className="mt-2 text-sm font-semibold text-coral-dark underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          htmlFor="name"
          error={errors.name}
          input={
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClass(!!errors.name)}
            />
          }
        />
        <Field
          label="Phone Number"
          htmlFor="phone"
          error={errors.phone}
          input={
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass(!!errors.phone)}
            />
          }
        />
      </div>

      <Field
        label="Email (optional)"
        htmlFor="email"
        error={errors.email}
        input={
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
        }
      />

      <Field
        label="Subject"
        htmlFor="subject"
        error={errors.subject}
        input={
          <input
            id="subject"
            type="text"
            value={values.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={inputClass(!!errors.subject)}
          />
        }
      />

      <Field
        label="Message"
        htmlFor="message"
        error={errors.message}
        input={
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass(!!errors.message)}
          />
        }
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-base font-bold text-white shadow-[0_8px_20px_-6px_rgba(255,111,97,0.6)] transition-all hover:bg-coral-dark disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  input,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-bold text-ink">
        {label}
      </label>
      {input}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs font-semibold text-coral-dark">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none ${
    hasError ? "border-coral" : "border-ink/10 focus:border-coral"
  }`;
}
