"use client";

import { useState } from "react";
import { colocationPlans } from "@/constants/siteData";
import BillingToggle from "@/components/ui/BillingToggle";
import ColocationCard from "./ColocationCard";

export default function ColocationGrid() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Colocation Pricing
        </h2>
        <p className="mt-3 text-slate-400">
          Choose the rack space that fits your infrastructure needs
        </p>
      </div>

      <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {colocationPlans.map((plan) => (
          <ColocationCard key={plan.id} plan={plan} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
}