type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="font-heading text-label-badge tracking-widest text-secondary uppercase">{eyebrow}</span>
      <h2 className="mt-1 font-heading text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
        {title}
      </h2>
      <p className="mt-2 text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}
