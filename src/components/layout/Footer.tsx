import Link from "next/link";
import { navCategories } from "@/constants/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              North<span className="text-accent-blue">Grid</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Tier III Infrastructure. Zero Compromise.
            </p>
          </div>

          {/* Dynamic Columns from our nav data */}
          {navCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-white font-semibold mb-3">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-accent-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} NorthGrid Data Centers. This is a fictional
            portfolio project — not a real company.
          </p>
        </div>
      </div>
    </footer>
  );
}