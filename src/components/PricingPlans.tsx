import { IconCheck } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    price: "€9,95",
    period: "/ maand",
    text: "Ideaal om SplashMat™ uit te proberen thuis.",
    features: ["30 matten per maand", "Gratis verzending", "Opzegbaar wanneer je wilt"],
    highlight: false,
  },
  {
    name: "Family",
    price: "€17,95",
    period: "/ maand",
    text: "Voor huishoudens met meerdere toiletten.",
    features: ["75 matten per maand", "Gratis verzending", "2 toiletten gedekt", "Prioriteit klantenservice"],
    highlight: true,
  },
  {
    name: "Business",
    price: "€49,95",
    period: "/ maand",
    text: "Voor kantoren, horeca en zorginstellingen.",
    features: ["250 matten per maand", "Gratis verzending", "Meerdere locaties", "Persoonlijk accountbeheer"],
    highlight: false,
  },
];

export default function PricingPlans() {
  return (
    <section id="prijzen" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Kies je abonnement</h2>
          <p className="mt-3 text-text-muted">Altijd voldoende SplashMat™ in huis, automatisch bezorgd.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-brand-mint bg-surface shadow-xl shadow-brand-mint/10 lg:-translate-y-3"
                  : "border-border-soft bg-surface shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-4 py-1 text-xs font-bold text-white">
                  Meest gekozen
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{plan.text}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-text-muted">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand-mint" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#top"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-brand-mint text-white"
                    : "border border-border-soft bg-surface-muted"
                }`}
              >
                Kies {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
