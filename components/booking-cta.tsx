import { BookingForm } from "@/components/booking-form";
import { Icon } from "@/components/icon";
import { company, ctaPerks } from "@/lib/content";

export function BookingCta() {
  return (
    <section id="book" className="w-full bg-surface-container-high px-4 py-12 sm:px-6 md:py-20 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-primary-container p-5 text-on-primary shadow-2xl sm:rounded-3xl sm:p-8 lg:p-16">
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full bg-secondary/10 blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-4 px-1 pt-2 sm:px-0 sm:pt-0 lg:col-span-7">
            <span className="font-heading text-label-badge tracking-widest text-secondary-fixed uppercase">
              Experience The Pristine Difference
            </span>
            <h2 className="font-heading text-headline-lg-mobile tracking-tight text-on-primary md:text-headline-lg">
              Ready for Spotless Peace of Mind?
            </h2>
            <p className="max-w-xl text-body-md text-primary-fixed-dim md:text-body-lg">
              Book online in 60 seconds or speak directly with our Senior Operations Specialist. Every service is
              backed by our 100% Reclean Guarantee.
            </p>
            <ul className="flex flex-col gap-3 pt-2 text-body-sm text-primary-fixed sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:pt-4">
              {ctaPerks.map((perk) => (
                <li key={perk.label} className="flex items-center gap-2">
                  <Icon name={perk.icon} className="text-[18px] text-secondary-fixed" />
                  {perk.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-surface-container-lowest p-5 text-on-surface shadow-xl sm:rounded-2xl sm:p-6 md:p-8 lg:col-span-5">
            <h3 className="font-heading text-headline-sm font-bold text-on-surface">Book Schedule Direct</h3>
            <p className="text-body-sm text-on-surface-variant">
              Enter your details to confirm specialist availability in your zip code.
            </p>
            <BookingForm />
            <div className="pt-2 text-center">
              <span className="text-label-md text-on-surface-variant">Or call our client desk: </span>
              <a href={company.phoneHref} className="text-label-lg font-bold whitespace-nowrap text-secondary hover:underline">
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
