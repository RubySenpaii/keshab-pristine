import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

function Stars({ size }: { size: string }) {
  return (
    <div className="flex items-center gap-1 text-secondary" aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" filled className={size} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12">
      <div className="mb-8 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Verified Trust Ledger"
          title="Real Client Stories & Impeccable Ratings"
          description="From busy family estates to high-demand corporate executives, hear how our precision stewardship elevates everyday life."
        />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Stars size="text-[22px]" />
          <span className="font-heading text-headline-sm font-bold text-on-surface">4.98 / 5.0</span>
          <span className="text-body-sm text-on-surface-variant">(850+ reviews)</span>
        </div>
      </div>

      <div
        role="region"
        aria-label="Client testimonials"
        tabIndex={0}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pt-1 pb-4 [scrollbar-width:none] md:gap-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:p-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 shadow-sm sm:w-[60%] md:w-[45%] md:p-8 lg:w-auto"
          >
            <div>
              <div className="mb-4">
                <Stars size="text-[18px]" />
              </div>
              <blockquote className="text-body-md leading-relaxed text-on-surface italic">“{t.quote}”</blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3 pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-label-lg font-bold text-on-surface">
                {t.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-label-lg font-bold text-on-surface">{t.name}</span>
                <span className="text-label-md text-on-surface-variant">{t.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
