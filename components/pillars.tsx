import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="standards" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Smart Stewardship"
          title="The Three Pillars of Our Standard"
          description="We replaced haphazard mop-and-bucket traditions with scientific methodology, rigorous cross-contamination barriers, and accountable technology."
        />
        <div className="shrink-0">
          <div className="inline-flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2 text-label-md text-on-surface">
            <Icon name="verified" className="text-[18px] text-secondary" />
            <span>ISO 9001 Hygiene Process Aligned</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                <Icon name={pillar.icon} className="text-[28px]" />
              </div>
              <span className="font-heading text-label-badge tracking-wider text-on-surface-variant uppercase">
                Pillar {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 mb-3 font-heading text-headline-sm font-bold text-on-surface">{pillar.title}</h3>
              <p className="text-body-md leading-relaxed text-on-surface-variant">{pillar.body}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 pt-6 text-label-md text-secondary">
              <Icon name={pillar.footerIcon} className="text-[18px]" />
              <span>{pillar.footer}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
