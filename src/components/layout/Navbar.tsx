"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navCategories, homeNavLink } from "@/constants/siteData";

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Keep visible at the very top of the page
    if (latest < 50) {
      setIsVisible(true);
      return;
    }

    // Scroll down -> hide, scroll up -> reveal
    if (diff > 5) {
      setIsVisible(false);
      setActiveCategory(null);
      setMobileOpen(false);
    } else if (diff < -5) {
      setIsVisible(true);
    }
  });

  // Close mobile panel on outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerBtnRef.current &&
        !hamburgerBtnRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  const toggleMobileCategory = (title: string) => {
    setExpandedMobileCategory((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Top hover/tap trigger area to bring the navbar back when hidden */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-4 w-full"
        onMouseEnter={() => setIsVisible(true)}
        onTouchStart={() => setIsVisible(true)}
      />

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsVisible(true)}
        className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800/80 bg-primary/80 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo - closes any open category when hovered */}
          <Link
            href="/"
            onMouseEnter={() => setActiveCategory(null)}
            className="text-xl font-bold text-white"
          >
            North<span className="text-accent-blue">Grid</span>
          </Link>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex items-center gap-8"
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Home Link - explicitly closes any open dropdown on hover */}
            <li key="home" className="relative">
              <Link
                href={homeNavLink.href}
                onMouseEnter={() => setActiveCategory(null)}
                className="flex items-center gap-1 py-2 text-slate-300 hover:text-white transition-colors"
              >
                {homeNavLink.label}
              </Link>
            </li>

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

                {/* Desktop Glassmorphic Dropdown Panel positioned slightly lower with an invisible hover bridge */}
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-[calc(100%+14px)] w-80 -translate-x-1/2 rounded-xl border border-slate-700/60 bg-[#0d1527]/90 p-3 shadow-2xl backdrop-blur-xl shadow-black/60 ring-1 ring-white/10 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-['']"
                    >
                      {category.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setActiveCategory(null)}
                          className="group block rounded-lg border border-transparent p-3 transition-all hover:border-slate-700/50 hover:bg-slate-800/60"
                        >
                          <p className="text-sm font-semibold text-white transition-colors group-hover:text-accent-cyan">
                            {link.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
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
              href="#contact"
              onMouseEnter={() => setActiveCategory(null)}
              className="hidden md:inline-block rounded-md bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Get Started
            </Link>

            {/* Hamburger - only visible on mobile */}
            <button
              ref={hamburgerBtnRef}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-lg p-1 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* ================= TOP-RIGHT MOBILE FLOATING PANEL ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, scale: 0.92, y: -8, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-4 top-full mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-700/70 bg-[#0d1527]/95 p-3 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 md:hidden"
            >
              <div className="flex max-h-[68vh] flex-col gap-1 overflow-y-auto pr-0.5">
                {/* Mobile Home Nav Link */}
                <Link
                  href={homeNavLink.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800/50 hover:text-white"
                >
                  {homeNavLink.label}
                </Link>

                {navCategories.map((category) => {
                  const isExpanded = expandedMobileCategory === category.title;

                  return (
                    <div key={category.title} className="rounded-xl">
                      {/* Parent Category Button */}
                      <button
                        onClick={() => toggleMobileCategory(category.title)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-all ${
                          isExpanded
                            ? "bg-slate-800/80 text-accent-cyan"
                            : "text-slate-200 hover:bg-slate-800/50 hover:text-white"
                        }`}
                      >
                        <span>{category.title}</span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 text-slate-400 ${
                            isExpanded ? "rotate-180 text-accent-cyan" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Children Links */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="ml-2.5 my-1 flex flex-col gap-1 border-l-2 border-slate-700/70 pl-2.5 py-1">
                              {category.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="group rounded-md p-2 transition-colors hover:bg-slate-800/60"
                                >
                                  <p className="text-xs font-medium text-slate-200 group-hover:text-accent-cyan transition-colors">
                                    {link.label}
                                  </p>
                                  <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                                    {link.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Panel Action Button */}
              <div className="mt-3 border-t border-slate-800/80 pt-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-blue py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-blue-600 active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}