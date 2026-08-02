"use client";

import { motion } from "framer-motion";
import { IconLeaf, IconNoWaste, IconShield, IconDissolve } from "@/components/icons";

const points = [
  { icon: IconNoWaste, title: "Geen plastic afval", text: "Volledig vrij van plastic — niets blijft achter." },
  { icon: IconLeaf, title: "Biologisch afbreekbaar", text: "Gemaakt van plantaardige, composteerbare vezels." },
  { icon: IconShield, title: "Geen agressieve chemicaliën", text: "Veilig voor mens, dier en leidingwerk." },
  { icon: IconDissolve, title: "Lost veilig op", text: "Verdwijnt spoorloos na een paar spoelbeurten." },
];

export default function EnvironmentSection() {
  return (
    <section id="milieu" className="px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-brand-mint/10 via-surface to-brand-blue-light/40 p-8 sm:p-14">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-mint/15 px-4 py-1.5 text-sm font-semibold text-brand-mint-dark">
            Goed voor jou, goed voor de aarde
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Duurzaam tot in de kern</h2>
          <p className="mt-3 text-text-muted">
            SplashMat™ is ontworpen om geen spoor achter te laten — niet in je toilet, niet in het
            milieu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-surface/70 p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-mint/15 text-brand-mint-dark">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
