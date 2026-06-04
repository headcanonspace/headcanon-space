"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, ReactNode } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/character-headcanon-generator/", label: "Character Generator" },
  { href: "/relationship-headcanon-generator/", label: "Relationship Generator" },
  { href: "/scenario-headcanon-generator/", label: "Scenario Generator" },
  { href: "/random-headcanon-generator/", label: "Random Generator" },
];

export default function NavbarClient({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 h-[68px]">
        {children}

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "nav-link--active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
          style={{ color: "var(--color-text)", background: open ? "var(--color-bg)" : "transparent" }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-5 pb-5 pt-3 space-y-1 mobile-nav-dropdown">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`mobile-nav-link ${isActive(link.href) ? "mobile-nav-link--active" : ""}`}
            >
              {isActive(link.href) && (
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-primary)" }} />
              )}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
