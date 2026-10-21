"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { heroMetrics } from "@/constants/siteData";

// Curated high-tech datacenter visuals
const backgroundSlides = [
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    alt: "Data center server racks with blue illumination",
  },
  {
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80",
    alt: "High performance network fiber infrastructure",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80",
    alt: "Cybersecurity matrix and digital server architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80",
    alt: "Enterprise infrastructure command facility",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 py-28 md:py-36">
      {/* ================= BACKGROUND IMAGE CAROUSEL ================= */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={backgroundSlides[currentSlide].url}
              alt={backgroundSlides[currentSlide].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-90 contrast-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Lightweight vignette: Keeps center bright while blending outer edges seamlessly into the page */}
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* Subtle blue accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-20 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-[100px]" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative mx-auto max-w-5xl text-center">
        {/* Tier III Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-secondary/85 px-4 py-2 text-sm font-medium text-slate-200 shadow-xl backdrop-blur-md"
        >
          <ShieldCheck size={16} className="text-status-green" />
          Tier III Certified Infrastructure
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Enterprise Data Center <br />
          Infrastructure in{" "}
          <span className="bg-gradient-to-r from-blue-400 via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Bangladesh
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base font-medium text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-lg lg:text-xl leading-relaxed"
        >
          Colocation, connectivity, and compliance-ready hosting built for
          businesses that cannot afford downtime.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white shadow-[0_0_35px_-5px_rgba(37,99,235,0.7)] transition-all hover:bg-blue-600 hover:shadow-[0_0_45px_-5px_rgba(37,99,235,1)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/colocation/racks"
            className="rounded-lg border border-slate-700/90 bg-secondary/80 px-7 py-4 text-sm font-semibold text-slate-100 shadow-lg backdrop-blur-md transition-colors hover:border-slate-500 hover:bg-secondary hover:text-white"
          >
            Explore Racks
          </Link>
        </motion.div>

        {/* Metrics Strip */}
        <div className="mt-20 grid grid-cols-3 gap-6 rounded-2xl border border-slate-700/80 bg-secondary/85 p-6 shadow-2xl backdrop-blur-xl">
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

        {/* Carousel Indicator Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {backgroundSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-8 bg-accent-cyan shadow-[0_0_10px_rgba(2,132,199,0.8)]"
                  : "w-2 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}