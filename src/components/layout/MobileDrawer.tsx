"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { navCategories } from "@/constants/siteData";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-72 overflow-y-auto border-l border-slate-800 bg-bg-secondary p-6 md:hidden"
          >
            {/* Drawer Header */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                North<span className="text-accent-blue">Grid</span>
              </span>
              <button onClick={onClose} aria-label="Close menu">
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Accordion Categories */}
            <div className="flex flex-col gap-2">
              {navCategories.map((category) => (
                <div key={category.title} className="border-b border-slate-800 pb-2">
                  <button
                    onClick={() => toggleAccordion(category.title)}
                    className="flex w-full items-center justify-between py-3 font-semibold text-white"
                  >
                    {category.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        openAccordion === category.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openAccordion === category.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-3 pl-2">
                          {category.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={onClose}
                              className="py-2 text-sm text-slate-400 hover:text-accent-cyan"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/contact"
                onClick={onClose}
                className="mt-6 rounded-md bg-accent-blue px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}