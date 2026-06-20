"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d2818]/98 shadow-lg"
            : "bg-[#0d2818]/95"
        } border-b border-[#c9a84c]/20 backdrop-blur-md`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-bold text-[#e8c97a] hover:text-[#e8c97a]/80 transition-colors"
          >
            SR <span className="text-white font-normal">Herbal</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                    pathname === link.href
                      ? "text-[#e8c97a]"
                      : "text-white/75 hover:text-[#e8c97a]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/product"
              className="hidden md:inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d2818] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#e8c97a] hover:-translate-y-0.5 transition-all"
            >
              Buy Now
            </Link>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 bg-[#0d2818] border-b border-[#c9a84c]/20 transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 py-4 border-b border-white/8 text-base tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[#e8c97a]"
                  : "text-white/80 hover:text-[#e8c97a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/product"
            className="mt-4 flex items-center justify-center bg-[#c9a84c] text-[#0d2818] py-3 rounded-full font-semibold"
          >
            🛒 Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}
