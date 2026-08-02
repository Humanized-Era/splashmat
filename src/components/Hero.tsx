"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-16 pb-8 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-block rounded-full bg-brand-blue-light px-4 py-1.5 text-sm font-semibold text-brand-blue"
          >
            Een schoner toilet. Zonder moeite.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Nooit meer urine-spetters rondom het toilet.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            SplashMat™ is een biologisch afbreekbare inleg-mat voor je wc-pot. Hij vangt spetters
            op, verspreidt bij elke spoelbeurt een frisse geur en lost na meerdere keren
            doorspoelen vanzelf op — geen schoonmaken, geen afval.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#prijzen"
              className="rounded-full bg-brand-mint px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-mint/25 transition-transform hover:scale-105"
            >
              Bestel nu
            </a>
            <a
              href="#hoe-werkt-het"
              className="rounded-full border border-border-soft bg-surface px-7 py-3.5 font-semibold transition-colors hover:bg-surface-muted"
            >
              Bekijk hoe het werkt
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-text-muted">
            <span>100% biologisch afbreekbaar</span>
            <span>·</span>
            <span>Dermatologisch getest</span>
            <span>·</span>
            <span>Gemaakt in Nederland</span>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Illustratie van SplashMat in een toilet">
        <defs>
          <radialGradient id="glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="var(--brand-mint)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--brand-mint)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="190" r="180" fill="url(#glow)" />

        <ellipse cx="200" cy="330" rx="140" ry="18" fill="var(--surface-muted)" />

        <path
          d="M110 220c0-70 40-130 90-130s90 60 90 130-40 100-90 100-90-30-90-100Z"
          fill="var(--surface)"
          stroke="var(--border-soft)"
          strokeWidth="2"
        />

        <motion.path
          d="M140 220c0-55 27-100 60-100s60 45 60 100-27 75-60 75-60-20-60-75Z"
          fill="var(--brand-mint)"
          opacity="0.18"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 220px" }}
        />

        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={175 + i * 25}
            r="6"
            fill="var(--brand-blue)"
            initial={{ cy: 60, opacity: 0 }}
            animate={{ cy: [60, 200], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeIn",
            }}
          />
        ))}

        <motion.circle
          cx="200"
          cy="205"
          r="10"
          fill="var(--brand-mint)"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}
        />
      </svg>
    </motion.div>
  );
}
