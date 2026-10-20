"use client";

import * as Switch from "@radix-ui/react-switch";

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export default function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="mb-12 flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          !isAnnual ? "text-white" : "text-slate-500"
        }`}
      >
        Monthly
      </span>

      <Switch.Root
        checked={isAnnual}
        onCheckedChange={onToggle}
        className="relative h-7 w-14 cursor-pointer rounded-full bg-slate-700 outline-none transition-colors data-[state=checked]:bg-accent-blue"
      >
        <Switch.Thumb className="block h-5 w-5 translate-x-1 rounded-full bg-white transition-transform duration-200 data-[state=checked]:translate-x-8" />
      </Switch.Root>

      <span
        className={`text-sm font-medium transition-colors ${
          isAnnual ? "text-white" : "text-slate-500"
        }`}
      >
        Annual
      </span>

      <span className="rounded-full bg-status-green/10 px-3 py-1 text-xs font-semibold text-status-green">
        Save up to 17%
      </span>
    </div>
  );
}