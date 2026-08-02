"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#waarom", label: "Waarom" },
  { href: "#hoe-werkt-het", label: "Hoe het werkt" },
  { href: "#voordelen", label: "Voordelen" },
  { href: "#toepassingen", label: "Toepassingen" },
  { href: "#faq", label: "FAQ" },
  { href: "#prijzen", label: "Prijzen" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Hoofdnavigatie"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-sm"
      >
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-white">
            S
          </span>
          <span>
            SplashMat<span className="align-top text-xs">™</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-brand-mint-dark dark:hover:text-brand-mint">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#prijzen"
            className="hidden rounded-full bg-brand-mint px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:inline-block"
          >
            Bestel nu
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-4 text-sm font-medium text-text-muted md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-surface-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
