"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/character-headcanon-generator/", label: "Character Generator" },
  { href: "/relationship-headcanon-generator/", label: "Relationship Generator" },
  { href: "/friendship-headcanon-generator/", label: "Friendship Generator" },
  { href: "/scenario-headcanon-generator/", label: "Scenario Generator" },
  { href: "/random-headcanon-generator/", label: "Random Generator" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-50 w-full navbar">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 h-[68px]">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Headcanon Space home">
          <div className="relative">
            <svg width="38" height="38" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <path d="M 10 48 C 10 20, 32 8, 36 36 C 36 46, 30 52, 24 52 C 16 52, 10 50, 10 48 Z" fill="#6366f1"/>
              <path d="M 28 44 C 28 16, 54 4, 58 32 C 58 44, 50 54, 42 54 C 34 54, 28 50, 28 44 Z" fill="#8b5cf6" opacity="0.85"/>
              <circle cx="44" cy="60" r="3.5" fill="#6366f1"/>
              <circle cx="36" cy="65" r="2.2" fill="#6366f1" opacity="0.6"/>
              <circle cx="30" cy="69" r="1.4" fill="#6366f1" opacity="0.35"/>
            </svg>
          </div>
          <span className="text-[19px] font-normal leading-none tracking-[-0.3px]" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
            Headcanon <span style={{ color: "var(--color-primary)" }}>Space</span>
          </span>
        </Link>

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
    </header>
  );
}
