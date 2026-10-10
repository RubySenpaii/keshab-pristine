import Image from "next/image";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/lib/content";

export function Solutions() {
  return (
    <section id="solutions" className="w-full bg-surface-container px-6 py-16 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-16">
          <SectionHeading
            centered
            eyebrow="Portfolio of Capabilities"
            title="Engineered Solutions for Every Environment"
            description="Customized regimens suited for residences, corporate flagships, and demanding real-estate turnovers."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full sm:h-56">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary-container px-3 py-1 font-heading text-label-badge text-on-primary uppercase">
                  {solution.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="font-heading text-headline-sm font-bold text-on-surface">{solution.title}</h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">{solution.body}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-2 text-body-sm text-on-surface-variant sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5">
                        <Icon name="check" className="shrink-0 text-[16px] text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 md:mt-6 md:pt-6">
                  <span className="font-heading text-headline-sm font-bold text-on-surface">
                    {solution.price}{" "}
                    <span className="font-sans text-body-sm font-normal whitespace-nowrap text-on-surface-variant">
                      {solution.priceUnit}
                    </span>
                  </span>
                  <a
                    href="#estimator"
                    className="rounded-lg bg-surface-container-high px-5 py-2.5 text-center text-label-lg whitespace-nowrap text-on-surface transition-colors hover:bg-surface-container-highest"
                  >
                    {solution.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
