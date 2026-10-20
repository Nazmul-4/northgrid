import {
  Server,
  ShieldCheck,
  Network,
  BatteryCharging,
  Wind,
  Cable,
} from "lucide-react";
import { partners } from "@/constants/siteData";

const categoryIcons: Record<string, React.ElementType> = {
  Servers: Server,
  Firewalls: ShieldCheck,
  Networking: Network,
  "UPS & Backup": BatteryCharging,
  HVAC: Wind,
  Connectivity: Cable,
};

export default function PartnerMarquee() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="border-y border-slate-800 bg-secondary py-12">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
        Trusted Technology Partners
      </p>

      {/* Added 'group' so children can pause on hover */}
      <div className="group relative overflow-hidden">
        {/* Soft fade masks on left and right edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-secondary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-secondary to-transparent" />

        {/* Marquee row with pause on hover */}
        <div className="animate-marquee flex w-max gap-16 group-hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => {
            const Icon = categoryIcons[partner.category] || Server;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap text-slate-400 transition-colors hover:text-white"
              >
                <Icon size={24} className="text-accent-cyan" />
                <span className="font-medium">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}