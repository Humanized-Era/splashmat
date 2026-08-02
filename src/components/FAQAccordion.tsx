"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/icons";

const faqs = [
  {
    q: "Hoe lang blijft een mat liggen?",
    a: "Gemiddeld blijft een SplashMat™ 3 tot 5 dagen liggen bij normaal gebruik, afhankelijk van het aantal spoelbeurten per dag.",
  },
  {
    q: "Kan ik hem gewoon doorspoelen?",
    a: "Ja. De mat is speciaal ontworpen om na meerdere spoelbeurten volledig op te lossen — je hoeft hem niet apart weg te gooien.",
  },
  {
    q: "Is hij veilig voor mijn leidingen?",
    a: "Absoluut. SplashMat™ bevat geen plastic of harde vezels en is getest op probleemloze afbraak in standaard leidingwerk en septic-systemen.",
  },
  {
    q: "Ruikt hij sterk?",
    a: "Nee, de geur is bewust subtiel gehouden. Je merkt een frisse, lichte geur bij het spoelen, zonder dat het overheerst.",
  },
  {
    q: "Hoe plaats ik hem?",
    a: "Haal de mat uit de verpakking en leg hem plat op de bodem van de wc-pot, binnen de rand van de bril. Klaar binnen 3 seconden.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Veelgestelde vragen</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="rounded-2xl border border-border-soft bg-surface">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                  >
                    {faq.q}
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-sm leading-relaxed text-text-muted"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
