"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Leg de mat neer", text: "Plaats de SplashMat™ eenvoudig op de bodem van de wc-pot, ruim binnen de bril." },
  { title: "Vangt spetters op", text: "De mat absorbeert urinespetters direct, voordat ze de vloer of pot bereiken." },
  { title: "Elke spoelbeurt frisse geur", text: "Bij het doorspoelen komt telkens een subtiele, frisse geur vrij." },
  { title: "Lost na meerdere spoelbeurten op", text: "Na een paar dagen gebruik lost de mat volledig en veilig op in het water." },
  { title: "Leg een nieuwe mat neer", text: "Simpelweg een nieuwe SplashMat™ plaatsen en je begint weer van voren af aan." },
];

export default function HowItWorksTimeline() {
  return (
    <section id="hoe-werkt-het" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Hoe werkt het</h2>
          <p className="mt-3 text-text-muted">In vijf simpele stappen naar een fris en schoon toilet.</p>
        </div>

        <ol className="mt-14 space-y-10 border-l-2 border-border-soft pl-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+9px)] flex h-6 w-6 items-center justify-center rounded-full bg-brand-mint text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
