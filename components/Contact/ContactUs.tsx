"use client";

import { useState, useRef, type FormEvent } from "react";
import {
  HiArrowRight,
  HiOutlineBuildingOffice2,
  HiOutlineChevronDown,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";

const contactEmail = "hello@graypeakstudio.com";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Other",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormFields = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const initialForm: FormFields = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function validateForm(values: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

function fieldClassName(hasError: boolean) {
  const base =
    "w-full rounded-xl bg-white py-3 text-sm text-zinc-900 outline-none transition-colors";
  const paddingIcon = " pl-11 pr-4";
  const normal =
    " border border-zinc-200/90 ring-1 ring-zinc-950/[0.03] placeholder:text-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10";
  const invalid =
    " border border-red-500 ring-1 ring-red-500/20 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";
  return `${base}${paddingIcon} ${hasError ? invalid : normal}`;
}

function textareaClassName(hasError: boolean) {
  const base =
    "w-full resize-y rounded-xl bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-500";
  const normal =
    " border border-zinc-200/90 ring-1 ring-zinc-950/[0.03] focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10";
  const invalid =
    " border border-red-500 ring-1 ring-red-500/20 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";
  return `${base} ${hasError ? invalid : normal}`;
}

function selectClassName(hasError: boolean) {
  const base =
    "w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-11 text-sm text-zinc-900 outline-none transition-colors [&>option]:bg-white [&>option]:text-zinc-900";
  const normal =
    " border border-zinc-200/90 ring-1 ring-zinc-950/[0.03] focus:border-zinc-400 focus:ring-2 focus:ring-zinc-950/10";
  const invalid =
    " border border-red-500 ring-1 ring-red-500/20 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";
  return `${base} ${hasError ? invalid : normal}`;
}

function FieldIconWrap({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <div className="relative">
      <Icon
        className="pointer-events-none absolute left-3.5 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-zinc-500"
        aria-hidden
      />
      {children}
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

function fakeApiCall(): Promise<void> {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      Math.random() < 0.2 ? reject() : resolve();
    }, delay);
  });
}

function ContactForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const successRef = useRef<HTMLParagraphElement>(null);

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "name" || key === "email" || key === "message") {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      await fakeApiCall();
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => successRef.current?.focus(), 50);
    } catch {
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form className="flex flex-col gap-6" noValidate onSubmit={handleSubmit} aria-busy={isLoading}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          Name
        </label>
        <FieldIconWrap icon={HiOutlineUser}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name…"
            value={form.name}
            disabled={isLoading}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClassName(!!errors.name)}
          />
        </FieldIconWrap>
        {errors.name ? <ErrorText id="contact-name-error" message={errors.name} /> : null}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          Email
        </label>
        <FieldIconWrap icon={HiOutlineEnvelope}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            disabled={isLoading}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClassName(!!errors.email)}
          />
        </FieldIconWrap>
        {errors.email ? <ErrorText id="contact-email-error" message={errors.email} /> : null}
      </div>

      <div>
        <label
          htmlFor="contact-company"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          Company
        </label>
        <FieldIconWrap icon={HiOutlineBuildingOffice2}>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or team name"
            value={form.company}
            disabled={isLoading}
            onChange={(e) => updateField("company", e.target.value)}
            className={fieldClassName(false)}
          />
        </FieldIconWrap>
      </div>

      <div>
        <label
          htmlFor="contact-project-type"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          Project Type
        </label>
        <div className="relative">
          <select
            id="contact-project-type"
            name="projectType"
            value={form.projectType}
            disabled={isLoading}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={selectClassName(false)}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          <HiOutlineChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-zinc-500"
            aria-hidden
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-zinc-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={300}
          placeholder="Tell us about your goals, timeline, and anything we should know…"
          value={form.message}
          disabled={isLoading}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={textareaClassName(!!errors.message)}
        />
        {errors.message ? (
          <ErrorText id="contact-message-error" message={errors.message} />
        ) : null}
        <p className="mt-2 text-xs tabular-nums text-zinc-500">
          {form.message.length} / 300
        </p>
      </div>

      {status === "success" && (
        <p
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 outline-none"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm shadow-zinc-200/40 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Submit Form
            <HiArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}

export function ContactUs() {
  return (
    <section
      className="relative isolate flex h-full flex-col overflow-hidden bg-white"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(24 24 27 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(24 24 27 / 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[min(75vw,26rem)] w-[min(75vw,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[min(50vw,20rem)] w-[min(50vw,20rem)] -translate-x-1/4 translate-y-1/3 rounded-full bg-zinc-200/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full border border-zinc-200/90 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
              Contact Us
            </span>
            <h1
              id="contact-heading"
              className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              Let&apos;s Get In Touch.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Or just reach out manually to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-500"
              >
                {contactEmail}
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
