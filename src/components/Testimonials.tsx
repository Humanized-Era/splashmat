import { IconStar } from "@/components/icons";

const reviews = [
  {
    name: "Marloes V.",
    role: "Moeder van drie",
    text: "Eindelijk geen discussie meer over wie de wc-rand schoonmaakt. SplashMat™ heeft ons huishouden echt makkelijker gemaakt.",
  },
  {
    name: "Tom B.",
    role: "Horeca-ondernemer",
    text: "We gebruiken SplashMat™ in al onze toiletten. Gasten merken het frisse verschil en wij besparen tijd op schoonmaak.",
  },
  {
    name: "Sanne D.",
    role: "Airbnb-verhuurder",
    text: "Simpel, duurzaam en het werkt echt. Precies wat ik zocht voor mijn verhuurwoning."
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Wat gebruikers zeggen</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm">
              <div className="flex gap-1 text-brand-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-text-muted">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name} <span className="font-normal text-text-muted">— {r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
