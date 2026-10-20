"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ColocationPlan } from "@/types";

interface ColocationCardProps {
  plan: ColocationPlan;
  isAnnual: boolean;
}

export default function ColocationCard({ plan, isAnnual }: ColocationCardProps) {
  const [selectedPowerFeed, setSelectedPowerFeed] = useState(plan.powerFeed[0]);

  const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
  const billingLabel = isAnnual ? "/year" : "/month";

  return (
    <div
      className={`group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 ${
        plan.featured
          ? "border-accent-blue bg-bg-secondary shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)]"
          : "border-slate-800 bg-bg-secondary hover:border-slate-600"
      }`}
    >
      {/* "Most Popular" badge - only shows if plan.featured is true */}
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

      {/* Price Display */}
      <div className="mt-6">
        <span className="text-3xl font-bold text-white">
          ৳{price.toLocaleString()}
        </span>
        <span className="text-sm text-slate-500">{billingLabel}</span>
      </div>

      {/* Specs List */}
      <ul className="mt-6 flex flex-col gap-3">
        {plan.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-sm text-slate-300">
            <Check size={16} className="flex-shrink-0 text-status-green" />
            {spec}
          </li>
        ))}
      </ul>

      {/* Power Feed Toggle Group */}
      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Power Feed
        </p>
        <ToggleGroup.Root
          type="single"
          value={selectedPowerFeed}
          onValueChange={(value) => value && setSelectedPowerFeed(value)}
          className="flex flex-wrap gap-2"
        >
          {plan.powerFeed.map((feed) => (
            <ToggleGroup.Item
              key={feed}
              value={feed}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition-colors data-[state=on]:border-accent-cyan data-[state=on]:bg-accent-cyan/10 data-[state=on]:text-accent-cyan"
            >
              {feed}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>

      <button className="mt-8 w-full rounded-md bg-accent-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
        Choose {plan.name}
      </button>
    </div>
  );
}