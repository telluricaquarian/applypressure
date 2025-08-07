"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Surface Level",
    price: "From $249",
    description: "Ideal for homeowners wanting a quick freshen-up.",
    features: [
      "Driveway + Footpath",
      "Light House Rinse",
      "Patio Wash",
    ],
    cta: "Book Now",
    href: "/contact", // or "/#inquiry" if you have a section anchor
  },
  {
    name: "Deep Cleanse",
    price: "From $449",
    description: "A full property rejuvenation for serious shine.",
    features: [
      "Everything in Surface Level",
      "Gutter Cleaning",
      "Fence & Deck Wash",
      "1st Floor Window Rinse",
    ],
    cta: "Book Now",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Seasonal Shield",
    price: "$129/month",
    description: "Set-and-forget quarterly cleanings year-round.",
    features: [
      "Quarterly Visits",
      "Roof Soft Wash (1x/year)",
      "Priority Scheduling",
      "Discounted Add-Ons",
    ],
    cta: "Join Plan",
    href: "/contact",
  },
  {
    name: "Commercial Flow",
    price: "Custom Quote",
    description: "Tailored contracts for storefronts & commercial properties.",
    features: [
      "Storefront Pressure Washing",
      "Oil Stain & Graffiti Removal",
      "Monthly or Quarterly Contracts",
      "Multi-site Property Support",
    ],
    cta: "Request Quote",
    href: "/contact",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold text-primary">Apply Pressure Packages</h2>
        <p className="mt-4 text-muted-foreground">
          Choose the right level of clean. From one-time refreshes to seasonal service.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md",
                plan.highlight && "border-primary shadow-lg"
              )}
            >
              <h3 className="text-2xl font-semibold text-primary">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="mt-1 text-muted-foreground text-sm">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="before:mr-2 before:content-['✔️']">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: plan.highlight ? "default" : "outline" }),
                  "mt-6 block w-full text-center rounded-xl"
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
