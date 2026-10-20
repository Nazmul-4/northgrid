import Link from "next/link";
import { navCategories } from "@/constants/siteData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg-primary/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          North<span className="text-accent-blue">Grid</span>
        </Link>

        {/* Flat Nav Links (we'll upgrade this to dropdowns in Phase 6) */}
        <ul className="hidden md:flex items-center gap-8">
          {navCategories.map((category) => (
            <li key={category.title}>
              <span className="text-slate-300 hover:text-white cursor-pointer transition-colors">
                {category.title}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-md bg-accent-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}