"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import {
  getDictionary,
  PROJECT_TYPES,
  type ProjectTypeKey,
} from "@/i18n/dictionaries";
import {
  isValidProjectType,
  validateContactSubmission,
  type ContactFieldErrors,
} from "@/lib/contact-validation";
import { CheckIcon, DirectionalArrow } from "./Icons";

interface ProjectInquiryFormProps {
  locale: Locale;
  initialProjectType?: string;
}

export function ProjectInquiryForm({
  locale,
  initialProjectType,
}: ProjectInquiryFormProps) {
  const dict = getDictionary(locale).contactPage.form;
  const formId = useId();
  const startedAtRef = useRef<number | null>(null);
  const statusBannerRef = useRef<HTMLDivElement | null>(null);

  const resolvedInitialType: ProjectTypeKey | "" =
    initialProjectType && isValidProjectType(initialProjectType)
      ? initialProjectType
      : "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [userSelectedType, setUserSelectedType] = useState<
    ProjectTypeKey | "" | null
  >(null);
  const projectType: ProjectTypeKey | "" =
    userSelectedType !== null ? userSelectedType : resolvedInitialType;
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // Honeypot

  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [serverBannerError, setServerBannerError] = useState<string | null>(
    null
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "succeeded">(
    "idle"
  );
  const [lastSubmittedSignature, setLastSubmittedSignature] = useState<
    string | null
  >(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const handleResetForNewInquiry = () => {
    setFullName("");
    setCompany("");
    setBudget("");
    setTimeline("");
    setDescription("");
    setAdditionalRequirements("");
    setFieldErrors({});
    setServerBannerError(null);
    setStatus("idle");
    startedAtRef.current = Date.now();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setServerBannerError(null);

    const payload = {
      locale,
      fullName,
      email,
      company,
      projectType,
      budget,
      timeline,
      description,
      additionalRequirements,
      websiteUrl,
      formStartedAt: startedAtRef.current,
    };

    const clientValidation = validateContactSubmission(payload);
    if (!clientValidation.valid || !clientValidation.data) {
      setFieldErrors(clientValidation.errors);
      setServerBannerError(dict.errors.validationFailed);
      requestAnimationFrame(() => {
        statusBannerRef.current?.focus();
      });
      return;
    }

    setFieldErrors({});

    const signature = `${clientValidation.data.email}|${clientValidation.data.projectType}|${clientValidation.data.description.toLowerCase()}`;
    if (lastSubmittedSignature === signature) {
      setServerBannerError(dict.errors.duplicateSubmission);
      requestAnimationFrame(() => {
        statusBannerRef.current?.focus();
      });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: ContactFieldErrors;
      } | null;

      if (response.ok && body?.ok) {
        setLastSubmittedSignature(signature);
        setStatus("succeeded");
        requestAnimationFrame(() => {
          statusBannerRef.current?.focus();
        });
        return;
      }

      if (body?.fieldErrors) {
        setFieldErrors(body.fieldErrors);
      }

      setServerBannerError(body?.message || dict.errors.providerUnavailable);
      setStatus("idle");
      requestAnimationFrame(() => {
        statusBannerRef.current?.focus();
      });
    } catch {
      setServerBannerError(dict.errors.networkError);
      setStatus("idle");
      requestAnimationFrame(() => {
        statusBannerRef.current?.focus();
      });
    }
  };

  if (status === "succeeded") {
    return (
      <div
        ref={statusBannerRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="surface-card rounded-2xl p-8 sm:p-10 border-blue-500/40"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">
          {dict.successTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          {dict.successMessage}
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={handleResetForNewInquiry}
            className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-500/50 hover:text-white"
          >
            {dict.sendAnotherButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="surface-card rounded-2xl p-6 sm:p-8 lg:p-10"
    >
      {serverBannerError ? (
        <div
          ref={statusBannerRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="mb-6 rounded-xl border border-rose-500/45 bg-rose-950/40 px-4 py-3.5 text-sm text-rose-200"
        >
          {serverBannerError}
        </div>
      ) : null}

      {/* Honeypot field — hidden from humans & assistive tech */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9999px] start-0 h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="websiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor={`${formId}-fullName`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.fullNameLabel}</span>
            <span className="text-xs text-blue-400">{dict.requiredBadge}</span>
          </label>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (fieldErrors.fullName) {
                setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
              }
            }}
            placeholder={dict.fullNamePlaceholder}
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={
              fieldErrors.fullName ? `${formId}-fullName-err` : undefined
            }
            className={`mt-2 block w-full rounded-lg border bg-[#060B16] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition ${
              fieldErrors.fullName
                ? "border-rose-500/70"
                : "border-slate-800 focus:border-blue-500"
            }`}
          />
          {fieldErrors.fullName ? (
            <p
              id={`${formId}-fullName-err`}
              role="alert"
              className="mt-1.5 text-xs text-rose-300"
            >
              {fieldErrors.fullName}
            </p>
          ) : null}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.emailLabel}</span>
            <span className="text-xs text-blue-400">{dict.requiredBadge}</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            dir="ltr"
            required
            autoComplete="email"
            maxLength={254}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) {
                setFieldErrors((prev) => ({ ...prev, email: undefined }));
              }
            }}
            placeholder={dict.emailPlaceholder}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-err` : undefined
            }
            className={`mt-2 block w-full rounded-lg border bg-[#060B16] px-4 py-3 text-start text-sm text-white placeholder:text-slate-500 transition ${
              fieldErrors.email
                ? "border-rose-500/70"
                : "border-slate-800 focus:border-blue-500"
            }`}
          />
          {fieldErrors.email ? (
            <p
              id={`${formId}-email-err`}
              role="alert"
              className="mt-1.5 text-xs text-rose-300"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        {/* Company / Organization (Optional) */}
        <div>
          <label
            htmlFor={`${formId}-company`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.companyLabel}</span>
            <span className="text-xs text-slate-500">{dict.optionalBadge}</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={dict.companyPlaceholder}
            className="mt-2 block w-full rounded-lg border border-slate-800 bg-[#060B16] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-blue-500"
          />
        </div>

        {/* Project Type (Required) */}
        <div>
          <label
            htmlFor={`${formId}-projectType`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.projectTypeLabel}</span>
            <span className="text-xs text-blue-400">{dict.requiredBadge}</span>
          </label>
          <select
            id={`${formId}-projectType`}
            name="projectType"
            required
            value={projectType}
            onChange={(e) => {
              const val = e.target.value;
              setUserSelectedType(isValidProjectType(val) ? val : "");
              if (fieldErrors.projectType) {
                setFieldErrors((prev) => ({ ...prev, projectType: undefined }));
              }
            }}
            aria-invalid={Boolean(fieldErrors.projectType)}
            aria-describedby={
              fieldErrors.projectType ? `${formId}-projectType-err` : undefined
            }
            className={`mt-2 block w-full rounded-lg border bg-[#060B16] px-4 py-3 text-sm text-white transition ${
              fieldErrors.projectType
                ? "border-rose-500/70"
                : "border-slate-800 focus:border-blue-500"
            }`}
          >
            <option value="" className="bg-slate-950 text-slate-400">
              {dict.projectTypePlaceholder}
            </option>
            {PROJECT_TYPES.map((typeKey) => (
              <option
                key={typeKey}
                value={typeKey}
                className="bg-slate-950 text-white"
              >
                {dict.projectTypes[typeKey]}
              </option>
            ))}
          </select>
          {fieldErrors.projectType ? (
            <p
              id={`${formId}-projectType-err`}
              role="alert"
              className="mt-1.5 text-xs text-rose-300"
            >
              {fieldErrors.projectType}
            </p>
          ) : null}
        </div>

        {/* Budget Range (Optional) */}
        <div>
          <label
            htmlFor={`${formId}-budget`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.budgetLabel}</span>
            <span className="text-xs text-slate-500">{dict.optionalBadge}</span>
          </label>
          <select
            id={`${formId}-budget`}
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-slate-800 bg-[#060B16] px-4 py-3 text-sm text-white transition focus:border-blue-500"
          >
            <option value="" className="bg-slate-950 text-slate-400">
              {dict.budgetPlaceholder}
            </option>
            {dict.budgetOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-slate-950 text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Timeline (Optional) */}
        <div>
          <label
            htmlFor={`${formId}-timeline`}
            className="flex items-center justify-between text-sm font-medium text-slate-200"
          >
            <span>{dict.timelineLabel}</span>
            <span className="text-xs text-slate-500">{dict.optionalBadge}</span>
          </label>
          <select
            id={`${formId}-timeline`}
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-slate-800 bg-[#060B16] px-4 py-3 text-sm text-white transition focus:border-blue-500"
          >
            <option value="" className="bg-slate-950 text-slate-400">
              {dict.timelinePlaceholder}
            </option>
            {dict.timelineOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-slate-950 text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description (Required) */}
      <div className="mt-6">
        <label
          htmlFor={`${formId}-description`}
          className="flex items-center justify-between text-sm font-medium text-slate-200"
        >
          <span>{dict.descriptionLabel}</span>
          <span className="text-xs text-blue-400">{dict.requiredBadge}</span>
        </label>
        <textarea
          id={`${formId}-description`}
          name="description"
          required
          rows={5}
          maxLength={4000}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (fieldErrors.description) {
              setFieldErrors((prev) => ({ ...prev, description: undefined }));
            }
          }}
          placeholder={dict.descriptionPlaceholder}
          aria-invalid={Boolean(fieldErrors.description)}
          aria-describedby={
            fieldErrors.description ? `${formId}-description-err` : undefined
          }
          className={`mt-2 block w-full rounded-lg border bg-[#060B16] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-slate-500 transition ${
            fieldErrors.description
              ? "border-rose-500/70"
              : "border-slate-800 focus:border-blue-500"
          }`}
        />
        {fieldErrors.description ? (
          <p
            id={`${formId}-description-err`}
            role="alert"
            className="mt-1.5 text-xs text-rose-300"
          >
            {fieldErrors.description}
          </p>
        ) : null}
      </div>

      {/* Additional Requirements (Optional) */}
      <div className="mt-6">
        <label
          htmlFor={`${formId}-additional`}
          className="flex items-center justify-between text-sm font-medium text-slate-200"
        >
          <span>{dict.additionalLabel}</span>
          <span className="text-xs text-slate-500">{dict.optionalBadge}</span>
        </label>
        <textarea
          id={`${formId}-additional`}
          name="additionalRequirements"
          rows={3}
          maxLength={2000}
          value={additionalRequirements}
          onChange={(e) => setAdditionalRequirements(e.target.value)}
          placeholder={dict.additionalPlaceholder}
          className="mt-2 block w-full rounded-lg border border-slate-800 bg-[#060B16] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-slate-500 transition focus:border-blue-500"
        />
      </div>

      <p className="mt-6 text-xs leading-relaxed text-slate-400">
        {dict.privacyConsentNote}
      </p>

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_-6px_rgba(37,99,235,0.7)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <span>
            {status === "submitting" ? dict.submittingButton : dict.submitButton}
          </span>
          <DirectionalArrow className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
