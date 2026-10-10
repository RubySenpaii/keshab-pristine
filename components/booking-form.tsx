"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icon";

const inputClass =
  "w-full rounded-lg bg-surface-container px-4 py-3 text-body-md text-on-surface outline-none transition-all placeholder:text-on-surface-variant/70 focus:ring-2 focus:ring-secondary";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="flex items-start gap-3 rounded-lg bg-secondary-fixed/40 p-4 text-on-secondary-fixed">
        <Icon name="check_circle" className="text-[22px] text-secondary" />
        <p className="text-body-sm">
          <span className="block font-semibold">Thank you!</span>
          Our concierge team will reach out within 15 minutes.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-3 pt-2" onSubmit={handleSubmit}>
      <input className={inputClass} placeholder="Full Name" aria-label="Full name" name="name" autoComplete="name" required />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
        <input
          className={inputClass}
          placeholder="Phone Number"
          aria-label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <input
          className={inputClass}
          placeholder="Zip Code"
          aria-label="Zip code"
          name="zip"
          autoComplete="postal-code"
          inputMode="numeric"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3.5 text-label-lg font-bold text-on-secondary shadow-md transition-all hover:bg-on-secondary-container"
      >
        Confirm Service Dispatch
        <Icon name="arrow_forward" className="text-[18px]" />
      </button>
    </form>
  );
}
