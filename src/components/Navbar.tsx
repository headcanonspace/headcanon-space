import Link from "next/link";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full navbar">
      <NavbarClient>
        <Link href="/" className="flex items-center gap-3 group" aria-label="Headcanon Space home">
          <div className="relative">
            <svg width="38" height="38" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <path d="M 10 48 C 10 20, 32 8, 36 36 C 36 46, 30 52, 24 52 C 16 52, 10 50, 10 48 Z" fill="#4f46e5"/>
              <path d="M 28 44 C 28 16, 54 4, 58 32 C 58 44, 50 54, 42 54 C 34 54, 28 50, 28 44 Z" fill="#8b5cf6" opacity="0.85"/>
              <circle cx="44" cy="60" r="3.5" fill="#4f46e5"/>
              <circle cx="36" cy="65" r="2.2" fill="#4f46e5" opacity="0.6"/>
              <circle cx="30" cy="69" r="1.4" fill="#4f46e5" opacity="0.35"/>
            </svg>
          </div>
          <span className="text-[19px] font-normal leading-none tracking-[-0.3px]" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
            Headcanon <span style={{ color: "var(--color-primary)" }}>Space</span>
          </span>
        </Link>
      </NavbarClient>
    </header>
  );
}
