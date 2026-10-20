"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { navCategories } from "@/constants/siteData";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg-primary/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          North<span className="text-accent-blue">Grid</span>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex items-center gap-8"
          onMouseLeave={() => setActiveCategory(null)}
        >
          {navCategories.map((category) => (
            <li
              key={category.title}
              className="relative"
              onMouseEnter={() => setActiveCategory(category.title)}
            >
              <button className="flex items-center gap-1 py-2 text-slate-300 hover:text-white transition-colors">
                {category.title}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    activeCategory === category.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {activeCategory === category.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-lg border border-slate-800 bg-bg-secondary p-4 shadow-xl"
                  >
                    {category.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-md p-3 transition-colors hover:bg-slate-800/50"
                      >
                        <p className="text-sm font-medium text-white">
                          {link.label}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* CTA - hidden on mobile */}
          <Link
            href="/contact"
            className="hidden md:inline-block rounded-md bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Get Started
          </Link>

          {/* Hamburger - only visible on mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}