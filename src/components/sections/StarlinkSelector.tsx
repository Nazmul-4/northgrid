"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Timer, MapPin } from "lucide-react";
import { starlinkKits } from "@/constants/siteData";

export default function StarlinkSelector() {
  const [activeId, setActiveId] = useState(starlinkKits[0].id);

  // Find the full kit object that matches the currently active ID
  const activeKit = starlinkKits.find((kit) => kit.id === activeId)!;

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Starlink Hardware Kits
        </h2>
        <p className="mt-3 text-slate-400">
          Satellite connectivity for remote sites and redundant failover
        </p>
      </div>

      {/* Segmented Pill Tabs */}
      <div className="mb-10 flex justify-center">
        <div className="relative flex gap-1 rounded-full border border-slate-800 bg-bg-secondary p-1.5">
          {starlinkKits.map((kit) => (
            <button
              key={kit.id}
              onClick={() => setActiveId(kit.id)}
              className="relative z-10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {/* The Sliding Pill Background */}
              {activeId === kit.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-accent-blue"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={activeId === kit.id ? "text-white" : "text-slate-400"}>
                {kit.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Price Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKit.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-slate-800 bg-bg-secondary p-8"
        >
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">{activeKit.name}</h3>
              <p className="mt-2 max-w-md text-slate-400">{activeKit.description}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-4xl font-bold text-white">
                ৳{activeKit.priceBDT.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Gauge size={20} className="text-accent-cyan" />
              <div>
                <p className="text-xs text-slate-500">Throughput</p>
                <p className="text-sm font-medium text-white">{activeKit.throughput}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Timer size={20} className="text-accent-cyan" />
              <div>
                <p className="text-xs text-slate-500">Latency</p>
                <p className="text-sm font-medium text-white">{activeKit.latency}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-accent-cyan" />
              <div>
                <p className="text-xs text-slate-500">Mount Type</p>
                <p className="text-sm font-medium text-white">{activeKit.mountType}</p>
              </div>
            </div>
          </div>

          <button className="mt-8 w-full rounded-md bg-accent-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 md:w-auto md:px-10">
            Order {activeKit.name}
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}