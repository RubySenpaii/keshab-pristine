import { Seal } from "@/components/brand";
import { Icon } from "@/components/icon";
import { trustBadges } from "@/lib/content";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-secondary-container/20 via-tertiary-fixed/15 to-transparent blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-20 lg:px-12">
        <div className="mb-6 flex justify-center md:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3.5 py-1.5 text-on-surface shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            <span className="font-heading text-label-badge tracking-widest text-on-surface-variant uppercase">
              Clean Spaces • Smart Solutions • Better Living
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 text-center md:text-left lg:col-span-7">
            <h1 className="font-heading text-display-hero-mobile leading-[1.1] tracking-tight text-on-surface md:text-display-hero md:leading-[1.1]">
              Exacting Standards for Homes &amp; Workplaces That{" "}
              <span className="bg-gradient-to-r from-on-surface via-secondary to-secondary bg-clip-text text-transparent">
                Demand Perfection.
              </span>
            </h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">
              Pristine Clean &amp; Solutions delivers hospital-grade sanitization, eco-friendly formulations, and
              meticulous white-glove property care backed by our 100% Sparkle Guarantee.
            </p>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
              <a
                href="#estimator"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 text-label-lg text-on-secondary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-on-secondary-container sm:w-auto"
              >
                <Icon name="calculate" className="text-[20px]" />
                Calculate Instant Price
              </a>
              <a
                href="#solutions"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-high px-7 py-3.5 text-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container-highest sm:w-auto"
              >
                <Icon name="tune" className="text-[20px]" />
                Explore Service Plans
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-start rounded-lg bg-surface-container-lowest p-3 text-left shadow-sm"
                >
                  <div className="mb-0.5 flex items-center gap-1.5 text-body-sm font-semibold text-secondary">
                    <Icon name={badge.icon} filled={badge.filled} className="text-[18px]" />
                    <span>{badge.title}</span>
                  </div>
                  <span className="text-label-md text-on-surface-variant">{badge.caption}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md rounded-2xl bg-surface-container-lowest p-6 shadow-xl">
              <div className="flex flex-col items-center pb-6 text-center">
                <div className="relative mb-3 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-surface-container-high via-surface-container-lowest to-secondary-container/40 p-2 shadow-inner">
                  <Seal
                    className="h-28 w-28"
                    topText="PRISTINE CLEAN & SOLUTIONS"
                    bottomText="BETTER LIVING"
                    title="Pristine Clean official insignia seal"
                  />
                </div>
                <span className="font-heading text-headline-sm tracking-tight text-on-surface">
                  Certified Precision Standard
                </span>
                <span className="text-body-sm font-medium text-secondary">Hospital-Grade &amp; White-Glove Certified</span>
              </div>

              <div className="grid grid-cols-2 gap-3 rounded-xl bg-surface-container-low p-4">
                <div className="flex flex-col">
                  <span className="font-heading text-headline-lg tracking-tight text-on-surface">99.8%</span>
                  <span className="flex items-center gap-1 text-label-md text-on-surface-variant">
                    <Icon name="schedule" className="text-[14px] text-secondary" /> On-Time Arrival
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-headline-lg tracking-tight text-secondary">14,000+</span>
                  <span className="flex items-center gap-1 text-label-md text-on-surface-variant">
                    <Icon name="domain" className="text-[14px] text-secondary" /> Clean Spaces Managed
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-container p-3 text-label-md text-on-surface">
                <div className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-[18px] text-secondary" />
                  <span>Active Guarantee: 100% Reclean Free</span>
                </div>
                <span className="rounded bg-secondary-fixed px-2 py-0.5 font-heading text-label-badge text-on-secondary-fixed uppercase">
                  24h SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
