"use client";

import { motion } from "framer-motion";
import {
  IconHome,
  IconRestaurant,
  IconHotel,
  IconCamping,
  IconOffice,
  IconSchool,
  IconCare,
} from "@/components/icons";

const cases = [
  { icon: IconHome, title: "Huis", text: "Voor een fris en schoon toilet, elke dag opnieuw." },
  { icon: IconRestaurant, title: "Restaurant", text: "Hygiënische toiletten voor gasten, zonder extra werk." },
  { icon: IconHotel, title: "Hotel", text: "Een frisse eerste indruk in elke kamer." },
  { icon: IconCamping, title: "Camping", text: "Praktisch en hygiënisch, ook onderweg." },
  { icon: IconOffice, title: "Kantoor", text: "Schone sanitaire ruimtes voor alle collega's." },
  { icon: IconSchool, title: "School", text: "Eenvoudig hygiënisch te houden, ook bij druk gebruik." },
  { icon: IconCare, title: "Zorg", text: "Extra hygiëne waar het echt telt." },
];

export default function UseCases() {
  return (
    <section id="toepassingen" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Toepassingen</h2>
          <p className="mt-3 text-text-muted">Overal waar mensen naar het toilet gaan, maakt SplashMat™ het verschil.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
