"use client";

import { motion } from "framer-motion";

const cards = [
  { emoji: "🧼", title: "Minder schoonmaken", text: "Bespaar tijd doordat er simpelweg minder vies wordt." },
  { emoji: "🌿", title: "Natuurlijk", text: "100% plantaardige, natuurlijke materialen." },
  { emoji: "🌸", title: "Frisse geur", text: "Subtiele geurbeleving bij elk gebruik." },
  { emoji: "🚽", title: "Hygiënischer", text: "Minder bacteriën en aanslag rond de wc-pot." },
  { emoji: "♻️", title: "Lost vanzelf op", text: "Geen restafval, geen omkijken naar." },
  { emoji: "⏱", title: "Bespaart tijd", text: "Nooit meer extra schoonmaakrondes nodig." },
];

export default function BenefitCards() {
  return (
    <section id="voordelen" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Voordelen in één oogopslag</h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm"
            >
              <span className="text-3xl">{c.emoji}</span>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
