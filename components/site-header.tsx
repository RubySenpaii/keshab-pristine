import { LogoLockup } from "@/components/brand";
import { MobileNav } from "@/components/mobile-nav";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:px-6 md:py-5 lg:px-12">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Pristine Clean & Solutions home">
          <LogoLockup className="h-10 w-auto md:h-12" />
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
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

        <div className="flex items-center gap-2">
          <a
            href="#estimator"
            className="hidden items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-label-lg whitespace-nowrap text-on-secondary shadow-[0_4px_12px_rgba(0,108,74,0.16)] transition-all hover:bg-on-secondary-container min-[380px]:inline-flex md:px-6"
          >
            Instant Quote
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
