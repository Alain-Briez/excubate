"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmission({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          timeline: formData.get("timeline"),
          information: formData.get("information"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("The project could not be submitted.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Thank you. Your project has been sent to Alain.",
      });
    } catch {
      setSubmission({
        status: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  const isSubmitting = submission.status === "submitting";
  const statusMessage =
    submission.status === "success" || submission.status === "error"
      ? submission.message
      : isSubmitting
        ? "Sending your project…"
        : "Sent securely to the Excubate team.";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="form-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="form-field form-field-wide">
          <span>Company</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            maxLength={160}
            required
          />
        </label>
        <label className="form-field form-field-wide">
          <span>Project timeline</span>
          <select name="timeline" defaultValue="" required>
            <option value="" disabled>
              Select a timeline
            </option>
            <option value="This month">This month</option>
            <option value="Within 3 months">Within 3 months</option>
            <option value="Within 6 months">Within 6 months</option>
            <option value="No project yet">No project yet</option>
          </select>
        </label>
        <label className="form-field form-field-wide">
          <span>
            Complementary information <i>Optional</i>
          </span>
          <textarea name="information" rows={5} maxLength={5000} />
        </label>
        <label className="contact-honeypot" aria-hidden="true">
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="contact-form-footer">
        <button className="contact-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Submit your project"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <small
          className={submission.status === "error" ? "form-status is-error" : "form-status"}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </small>
      </div>
    </form>
  );
}
