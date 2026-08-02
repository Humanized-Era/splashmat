"use client";

import { useState } from "react";
import { IconCheck } from "@/components/icons";

const zonder = ["Zichtbare spetters", "Vieze vloer", "Nare geur", "Vaker schoonmaken"];
const met = ["Schone wc-rand", "Fris geurende badkamer", "Minder schoonmaken", "Geen spetters"];

export default function ComparisonSlider() {
  const [value, setValue] = useState(50);

  return (
    <section id="vergelijking" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Zelf het verschil zien</h2>
          <p className="mt-3 text-text-muted">
            Sleep de schuifknop om zonder en met SplashMat™ te vergelijken.
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/10] max-w-3xl select-none overflow-hidden rounded-3xl border border-border-soft shadow-sm">
          {/* Rechterlaag: MET SplashMat (mint) */}
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-brand-mint/15 to-brand-blue-light p-6 sm:p-10">
            <span className="w-fit rounded-full bg-brand-mint px-3 py-1 text-xs font-bold text-white">
              Met SplashMat™
            </span>
            <ul className="space-y-2 text-sm font-medium sm:text-base">
              {met.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 shrink-0 text-brand-mint" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Linkerlaag: ZONDER SplashMat (accent), geclipt */}
          <div
            className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-orange-100 to-red-50 p-6 dark:from-orange-950 dark:to-red-950 sm:p-10"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <span className="w-fit rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
              Zonder SplashMat
            </span>
            <ul className="space-y-2 text-sm font-medium sm:text-base">
              {zonder.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Handvat */}
          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
            style={{ left: `${value}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
              <span className="text-xs">↔</span>
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Vergelijk zonder en met SplashMat"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
