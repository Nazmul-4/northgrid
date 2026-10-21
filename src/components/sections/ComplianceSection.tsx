import { ShieldCheck } from "lucide-react";
import { complianceBadges } from "@/constants/siteData";

export default function ComplianceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Built on Trust & Compliance
        </h2>
        <p className="mt-3 text-slate-400">
          Infrastructure standards that enterprise clients can rely on
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {complianceBadges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-xl border border-slate-800 bg-bg-secondary p-6 text-center transition-colors hover:border-accent-cyan/50"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-status-green/10">
              <ShieldCheck size={24} className="text-status-green" />
            </div>
            <h3 className="font-semibold text-white">{badge.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}