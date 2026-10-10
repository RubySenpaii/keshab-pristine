"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { navLinks } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high text-on-surface transition-colors hover:bg-surface-container-highest md:hidden"
      >
        <Icon name={open ? "close" : "menu"} className="text-[24px]" />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-surface-container bg-surface-container-lowest px-5 pt-2 pb-5 shadow-[0_20px_35px_-10px_rgba(15,23,42,0.12)] md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-surface-container py-3.5 text-body-md font-medium text-on-surface"
                >
                  {link.label}
                  <Icon name="chevron_right" className="text-[20px] text-on-surface-variant" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#estimator"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-label-lg text-on-secondary"
          >
            <Icon name="calculate" className="text-[20px]" />
            Get an Instant Quote
          </a>
        </nav>
      )}
    </>
  );
}
