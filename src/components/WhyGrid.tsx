"use client";

import { motion } from "framer-motion";
import {
  IconBroom,
  IconScent,
  IconLeaf,
  IconDissolve,
  IconNoWaste,
  IconTimer,
} from "@/components/icons";

const items = [
  { icon: IconBroom, title: "Minder schoonmaken", text: "Geen spetters meer rond de wc-pot betekent aanzienlijk minder schoonmaakwerk." },
  { icon: IconScent, title: "Frisse geur", text: "Bij elke spoelbeurt komt een subtiele, frisse geur vrij." },
  { icon: IconLeaf, title: "Biologisch afbreekbaar", text: "Volledig gemaakt van plantaardige, afbreekbare vezels." },
  { icon: IconDissolve, title: "Lost vanzelf op", text: "Na meerdere spoelbeurten lost de mat volledig en veilig op." },
  { icon: IconNoWaste, title: "Geen afval", text: "Niets om weg te gooien — de mat verdwijnt gewoon." },
  { icon: IconTimer, title: "Binnen 3 seconden geplaatst", text: "Leg de mat neer en je bent klaar. Geen gedoe." },
];

export default function WhyGrid() {
  return (
    <section id="waarom" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Waarom SplashMat™</h2>
          <p className="mt-3 text-text-muted">
            Een klein product met een groot effect op de hygiëne in huis.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
