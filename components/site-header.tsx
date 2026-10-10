import { LogoLockup } from "@/components/brand";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center" aria-label="Pristine Clean & Solutions home">
          <LogoLockup className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#estimator"
          className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-2.5 text-label-lg text-on-secondary shadow-[0_4px_12px_rgba(0,108,74,0.16)] transition-all hover:bg-on-secondary-container"
        >
          Instant Quote
        </a>
      </div>
    </header>
  );
}
