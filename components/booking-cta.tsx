import { BookingForm } from "@/components/booking-form";
import { Icon } from "@/components/icon";
import { company, ctaPerks } from "@/lib/content";

export function BookingCta() {
  return (
    <section id="book" className="w-full bg-surface-container-high px-6 py-20 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary-container p-8 text-on-primary shadow-2xl lg:p-16">
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full bg-secondary/10 blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <span className="font-heading text-label-badge tracking-widest text-secondary-fixed uppercase">
              Experience The Pristine Difference
            </span>
            <h2 className="font-heading text-headline-lg-mobile tracking-tight text-on-primary md:text-headline-lg">
              Ready for Spotless Peace of Mind?
            </h2>
            <p className="max-w-xl text-body-lg text-primary-fixed-dim">
              Book online in 60 seconds or speak directly with our Senior Operations Specialist. Every service is
              backed by our 100% Reclean Guarantee.
            </p>
            <ul className="flex flex-wrap items-center gap-6 pt-4 text-body-sm text-primary-fixed">
              {ctaPerks.map((perk) => (
                <li key={perk.label} className="flex items-center gap-2">
                  <Icon name={perk.icon} className="text-[18px] text-secondary-fixed" />
                  {perk.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-surface-container-lowest p-6 text-on-surface shadow-xl md:p-8 lg:col-span-5">
            <h3 className="font-heading text-headline-sm font-bold text-on-surface">Book Schedule Direct</h3>
            <p className="text-body-sm text-on-surface-variant">
              Enter your details to confirm specialist availability in your zip code.
            </p>
            <BookingForm />
            <div className="pt-2 text-center">
              <span className="text-label-md text-on-surface-variant">Or call our client desk: </span>
              <a href={company.phoneHref} className="text-label-lg font-bold text-secondary hover:underline">
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
