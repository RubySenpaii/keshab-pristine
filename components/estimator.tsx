"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import {
  estimatePrice,
  frequencyOptions,
  ROOM_MAX,
  ROOM_MIN,
  serviceOptions,
  SQFT_MAX,
  SQFT_MIN,
  SQFT_STEP,
  type Frequency,
  type ServiceType,
} from "@/lib/pricing";

const optionBase = "rounded-xl p-3.5 text-left transition-all flex flex-col";
const optionActive = "bg-primary-container text-on-primary shadow-sm";
const optionIdle = "bg-surface-container text-on-surface hover:bg-surface-container-high";

export function Estimator() {
  const [service, setService] = useState<ServiceType>("residential");
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [sqft, setSqft] = useState(1850);
  const [frequency, setFrequency] = useState<Frequency>("biweekly");

  const discount = frequencyOptions.find((f) => f.id === frequency)?.discount ?? 0;
  const price = estimatePrice({ service, bedrooms, bathrooms, sqft, discount });

  return (
    <section id="estimator" className="w-full bg-surface-container-low px-4 py-16 sm:px-6 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 px-2 sm:px-0 md:mb-12">
          <SectionHeading
            centered
            eyebrow="Transparent Pricing Engine"
            title="Instant Service & Quote Estimator"
            description="Get honest, upfront pricing in under 30 seconds with no hidden surprise fees."
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-7 rounded-2xl bg-surface-container-lowest p-5 shadow-md sm:p-6 md:gap-8 md:p-8 lg:col-span-8">
            <fieldset>
              <legend className="mb-3 block text-label-lg text-on-surface">1. Select Service Category</legend>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {serviceOptions.map((opt) => {
                  const active = opt.id === service;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setService(opt.id)}
                      className={`${optionBase} gap-1 ${active ? optionActive : optionIdle}`}
                    >
                      <Icon
                        name={opt.icon}
                        className={`text-[20px] ${active ? "text-secondary-fixed" : "text-secondary"}`}
                      />
                      <span className="text-label-lg">{opt.label}</span>
                      <span className={`text-label-md ${active ? "opacity-80" : "text-on-surface-variant"}`}>
                        {opt.caption}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Stepper
                label="Bedrooms / Suites"
                value={bedrooms}
                unit="Beds"
                onChange={setBedrooms}
              />
              <Stepper
                label="Full Bathrooms"
                value={bathrooms}
                unit="Baths"
                onChange={setBathrooms}
              />
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="sqft-slider" className="text-label-lg text-on-surface">
                    Area Sq. Ft.
                  </label>
                  <span className="text-label-md font-bold text-secondary">{sqft.toLocaleString("en-US")} sq ft</span>
                </div>
                <div className="pt-2">
                  <input
                    id="sqft-slider"
                    type="range"
                    min={SQFT_MIN}
                    max={SQFT_MAX}
                    step={SQFT_STEP}
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer rounded-lg bg-surface-container-high accent-secondary"
                  />
                </div>
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 block text-label-lg text-on-surface">
                3. Frequency &amp; Stewardship Schedule
              </legend>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {frequencyOptions.map((opt) => {
                  const active = opt.id === frequency;
                  const isStandard = opt.badge === "Standard";
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFrequency(opt.id)}
                      className={`${optionBase} justify-between ${active ? optionActive : optionIdle}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-label-lg">{opt.label}</span>
                        {isStandard ? (
                          <span
                            className={`font-heading text-label-badge ${active ? "opacity-80" : "text-on-surface-variant"}`}
                          >
                            {opt.badge}
                          </span>
                        ) : (
                          <span
                            className={`rounded-full px-2 py-0.5 font-heading text-label-badge ${
                              active
                                ? "bg-secondary-fixed text-on-secondary-fixed"
                                : "bg-secondary-container text-on-secondary-container"
                            }`}
                          >
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <span className={`mt-1 text-body-sm ${active ? "opacity-80" : "text-on-surface-variant"}`}>
                        {opt.caption}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="sticky bottom-3 z-10 -mx-2 flex items-center justify-between gap-3 rounded-xl border border-surface-container bg-surface-container-lowest/95 p-3 pl-4 shadow-[0_20px_35px_-10px_rgba(15,23,42,0.12),0_1px_3px_rgba(15,23,42,0.04)] backdrop-blur-lg lg:hidden">
              <div className="min-w-0">
                <div className="text-label-md text-on-surface-variant">Estimated per visit</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-headline-md font-bold text-on-surface">${price.final}</span>
                  {discount > 0 && (
                    <span className="text-body-sm text-on-surface-variant line-through">${price.original}</span>
                  )}
                </div>
              </div>
              <a
                href="#book"
                className="flex shrink-0 items-center gap-1.5 rounded-lg bg-secondary px-4 py-3 text-label-lg text-on-secondary shadow-md transition-all hover:bg-on-secondary-container"
              >
                <Icon name="calendar_month" className="text-[18px]" />
                Reserve
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-5 shadow-xl sm:p-6 md:p-8 lg:sticky lg:top-28 lg:col-span-4">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4">
                <span className="font-heading text-label-badge tracking-wider text-on-surface-variant uppercase">
                  Live Breakdown
                </span>
                <span className="inline-flex items-center gap-1 text-label-md text-secondary">
                  <Icon name="verified" className="text-[16px]" /> Price Lock Guaranteed
                </span>
              </div>

              <div className="py-4" aria-live="polite">
                <div className="text-label-md tracking-wider text-on-surface-variant uppercase">Estimated Per Visit</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-heading text-headline-lg text-on-surface md:text-display-hero">
                    ${price.final}
                  </span>
                  {discount > 0 && (
                    <span className="text-body-sm text-on-surface-variant line-through">${price.original}</span>
                  )}
                </div>
                <p className="mt-1 text-body-sm font-semibold text-secondary">
                  {discount > 0
                    ? `Includes ${Math.round(discount * 100)}% Frequency Savings`
                    : "Standard rate without frequency subscription"}
                </p>
              </div>

              <dl className="flex flex-col gap-2.5 py-4 text-body-sm text-on-surface">
                <SummaryRow label="Care Team:" value="2 Certified Specialists" />
                <SummaryRow label="Estimated Duration:" value="2.5 - 3.5 Hours" />
                <SummaryRow label="Products:" value="100% Eco-Safe Botanicals" />
                <SummaryRow label="Equipment:" value="Pro HEPA Filtration" />
              </dl>
            </div>

            <div className="pt-6">
              <a
                href="#book"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-4 text-label-lg font-bold text-on-secondary shadow-lg transition-all hover:bg-on-secondary-container"
              >
                <Icon name="calendar_month" className="text-[20px]" />
                Reserve This Estimate
              </a>
              <p className="mt-2.5 text-center text-label-md text-on-surface-variant">
                No credit card charged until service is completed.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stepper({
  label,
  value,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  const btn =
    "flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-lowest text-headline-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high disabled:opacity-40 disabled:hover:bg-surface-container-lowest";

  return (
    <div>
      <span className="mb-2 block text-label-lg text-on-surface">{label}</span>
      <div className="flex items-center gap-3 rounded-xl bg-surface-container p-2">
        <button
          type="button"
          className={btn}
          aria-label={`Decrease ${label}`}
          disabled={value <= ROOM_MIN}
          onClick={() => onChange(Math.max(ROOM_MIN, value - 1))}
        >
          -
        </button>
        <span className="flex-1 text-center font-heading text-headline-sm text-on-surface" aria-live="polite">
          {value} {unit}
        </span>
        <button
          type="button"
          className={btn}
          aria-label={`Increase ${label}`}
          disabled={value >= ROOM_MAX}
          onClick={() => onChange(Math.min(ROOM_MAX, value + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-on-surface-variant">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
