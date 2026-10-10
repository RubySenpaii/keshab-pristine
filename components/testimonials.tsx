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
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Verified Trust Ledger"
          title="Real Client Stories & Impeccable Ratings"
          description="From busy family estates to high-demand corporate executives, hear how our precision stewardship elevates everyday life."
        />
        <div className="flex flex-wrap items-center gap-3">
          <Stars size="text-[22px]" />
          <span className="font-heading text-headline-sm font-bold text-on-surface">4.98 / 5.0</span>
          <span className="text-body-sm text-on-surface-variant">(850+ reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm"
          >
            <div>
              <div className="mb-4">
                <Stars size="text-[18px]" />
              </div>
              <blockquote className="text-body-md leading-relaxed text-on-surface italic">“{t.quote}”</blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-label-lg font-bold text-on-surface">
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
