"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function InteractiveDemo() {
  const [withMat, setWithMat] = useState(true);

  return (
    <section id="demo" className="px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border-soft bg-surface p-6 shadow-sm sm:p-10">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Zie zelf het verschil</h2>
          <p className="mt-2 text-text-muted">
            Vergelijk wat er gebeurt met en zonder SplashMat™ bij het plassen.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Demo kiezen"
          className="mx-auto mb-8 flex w-fit gap-1 rounded-full bg-surface-muted p-1"
        >
          <button
            role="tab"
            aria-selected={withMat}
            onClick={() => setWithMat(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              withMat ? "bg-brand-mint text-white shadow-sm" : "text-text-muted"
            }`}
          >
            Met SplashMat
          </button>
          <button
            role="tab"
            aria-selected={!withMat}
            onClick={() => setWithMat(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              !withMat ? "bg-brand-accent text-white shadow-sm" : "text-text-muted"
            }`}
          >
            Zonder SplashMat
          </button>
        </div>

        <div className="relative mx-auto aspect-[4/3] max-w-md">
          <AnimatePresence mode="wait">
            {withMat ? (
              <motion.div
                key="with"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <DemoSvg withMat />
              </motion.div>
            ) : (
              <motion.div
                key="without"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <DemoSvg withMat={false} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-sm text-text-muted">
          {withMat
            ? "Druppels worden direct opgevangen en geabsorbeerd door de mat."
            : "Zonder mat spatten druppels alle kanten op — op de vloer en de wc-rand."}
        </p>
      </div>
    </section>
  );
}

function DemoSvg({ withMat }: { withMat: boolean }) {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <rect x="0" y="180" width="300" height="40" rx="8" fill="var(--surface-muted)" />
      <ellipse cx="150" cy="140" rx="90" ry="50" fill="var(--surface)" stroke="var(--border-soft)" strokeWidth="2" />

      {withMat && (
        <ellipse cx="150" cy="150" rx="55" ry="28" fill="var(--brand-mint)" opacity="0.25" />
      )}

      {[0, 1, 2].map((i) => {
        const startX = 130 + i * 20;
        return withMat ? (
          <motion.circle
            key={i}
            cx={startX}
            r="5"
            fill="var(--brand-blue)"
            initial={{ cy: 20, opacity: 0 }}
            animate={{ cy: [20, 145], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
          />
        ) : (
          <motion.circle
            key={i}
            r="5"
            fill="var(--brand-accent)"
            initial={{ cx: startX, cy: 20, opacity: 0 }}
            animate={{
              cx: [startX, startX, startX + (i - 1) * 60],
              cy: [20, 150, 190],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
          />
        );
      })}
    </svg>
  );
}
