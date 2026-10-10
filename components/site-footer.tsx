import { LogoLockup } from "@/components/brand";
import { Icon } from "@/components/icon";
import { company, footerColumns } from "@/lib/content";

const headingClass = "mb-2 text-label-lg tracking-wider text-on-surface uppercase";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-7xl px-6 py-space-xl lg:px-12">
        <div className="grid grid-cols-1 gap-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-space-sm">
            <LogoLockup className="h-10 w-auto self-start md:h-12" />
            <p className="text-body-sm text-on-surface-variant">{company.motto}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-space-xs">
              <span className={headingClass}>{col.heading}</span>
              <ul className="flex flex-col gap-1.5 text-body-sm text-on-surface-variant">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-space-xs">
            <span className={headingClass}>Client Concierge</span>
            <ul className="flex flex-col gap-1.5 text-body-sm text-on-surface-variant">
              <li>
                <a href={company.phoneHref} className="flex items-center gap-2 hover:text-on-surface">
                  <Icon name="phone" className="text-[16px] text-secondary" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all hover:text-on-surface">
                  <Icon name="mail" className="text-[16px] text-secondary" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="schedule" className="text-[16px] text-secondary" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-sm pt-space-lg sm:flex-row">
          <p className="text-body-sm text-on-surface-variant">
            © 2026 {company.legalName}. All rights reserved.
          </p>
          <LogoLockup className="h-9 w-auto md:h-10" />
        </div>
      </div>
    </footer>
  );
}
