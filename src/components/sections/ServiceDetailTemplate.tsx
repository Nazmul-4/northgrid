import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { ServiceDetailPage } from "@/types";
import { iconMap } from "@/lib/iconMap";

interface ServiceDetailTemplateProps {
  service: ServiceDetailPage;
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Back Link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Page Header */}
      <div className="mb-12 border-b border-slate-800 pb-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-accent-cyan">{service.tagline}</p>
        <p className="mt-4 max-w-2xl text-slate-400">{service.description}</p>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-white">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {service.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-800 bg-bg-secondary p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10">
                  <Icon size={20} className="text-accent-blue" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specs Table */}
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Technical Specifications
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-800">
          {service.specs.map((spec, index) => (
            <div
              key={spec.label}
              className={`flex items-center justify-between px-6 py-4 ${
                index % 2 === 0 ? "bg-bg-secondary" : "bg-bg-primary"
              }`}
            >
              <span className="text-sm text-slate-400">{spec.label}</span>
              <span className="text-sm font-medium text-white">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-accent-blue/30 bg-accent-blue/5 p-8 text-center">
        <h3 className="text-xl font-bold text-white">Ready to get started?</h3>
        <p className="mt-2 text-slate-400">
          Talk to our team about {service.title.toLowerCase()}
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Contact Us
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}