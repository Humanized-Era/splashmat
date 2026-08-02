"use client";

import { useState, type FormEvent } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="mt-10 border-t border-border-soft bg-surface-muted px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-white">
                S
              </span>
              <span>
                SplashMat<span className="align-top text-xs">™</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Een schoner toilet. Zonder moeite.
            </p>
            <div className="mt-5 flex gap-3">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-xs font-semibold transition-colors hover:bg-surface"
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Blijf op de hoogte</h3>
            <p className="mt-2 text-sm text-text-muted">
              Meld je aan voor tips over een fris toilet en exclusieve aanbiedingen.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex max-w-sm gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                E-mailadres
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="jij@voorbeeld.nl"
                className="w-full rounded-full border border-border-soft bg-surface px-4 py-2.5 text-sm outline-none focus:border-brand-mint"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-mint px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Aanmelden
              </button>
            </form>
            <p role="status" className="mt-2 text-sm text-brand-mint-dark">
              {submitted ? "Bedankt voor je aanmelding!" : ""}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Meer weten</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-brand-mint-dark dark:hover:text-brand-mint">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-mint-dark dark:hover:text-brand-mint">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-mint-dark dark:hover:text-brand-mint">
                  Veelgestelde vragen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} SplashMat™. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
