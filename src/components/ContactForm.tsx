"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const checkin = form.get("checkin");
    const checkout = form.get("checkout");
    const guests = form.get("guests");
    const message = form.get("message");

    const subject = `Booking enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Check-in: ${checkin || "—"}`,
      `Check-out: ${checkout || "—"}`,
      `Guests: ${guests}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Check-in Date" name="checkin" type="date" />
        <Field label="Check-out Date" name="checkout" type="date" />
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-navy-900">
          Number of Guests
        </span>
        <select
          name="guests"
          defaultValue="2 guests"
          className="rounded-lg border border-navy-900/15 bg-white px-3.5 py-3 text-sm text-ink-900 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 focus:outline-none"
        >
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4 guests</option>
          <option>Corporate / extended stay enquiry</option>
          <option>Student accommodation enquiry</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-navy-900">Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your stay..."
          className="rounded-lg border border-navy-900/15 bg-white px-3.5 py-3 text-sm text-ink-900 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Send Enquiry
      </button>
      {sent && (
        <p className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-800">
          Your email app should now be open with this enquiry pre-filled —
          just hit send. If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-navy-900">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-navy-900/15 bg-white px-3.5 py-3 text-sm text-ink-900 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 focus:outline-none"
      />
    </label>
  );
}
