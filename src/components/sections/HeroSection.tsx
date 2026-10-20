"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { heroMetrics } from "@/constants/siteData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Soft background glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Tier III Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-bg-secondary px-4 py-2 text-sm text-slate-300"
        >
          <ShieldCheck size={16} className="text-status-green" />
          Tier III Certified Infrastructure
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-white md:text-6xl"
        >
          Enterprise Data Center <br />
          Infrastructure in{" "}
          <span className="text-accent-blue">Bangladesh</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          Colocation, connectivity, and compliance-ready hosting built for
          businesses that cannot afford downtime.
        </motion.p>

        {/* Glowing CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-accent-blue px-8 py-4 font-semibold text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] transition-all hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.9)]"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Metrics Strip */}
        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-slate-800 pt-10">
          {heroMetrics.map((metric) => (
            <AnimatedCounter
              key={metric.label}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}