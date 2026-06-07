"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/business", label: "业务介绍" },
  { href: "/faq", label: "常见问题" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#E8E0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl">🍃</span>
            <span className="text-xl sm:text-2xl font-bold text-primary tracking-wider">
              杨记茶叶
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-primary bg-leaf-light"
                      : "text-text hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
            <a
              href="tel:13800138000"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-light transition-colors shadow-sm"
            >
              联系我们
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="菜单"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 space-y-1 bg-white border-t border-[#E8E0D0]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-leaf-light"
                    : "text-text hover:text-primary hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:13800138000"
            className="block px-4 py-3 rounded-lg bg-primary text-white text-sm font-medium text-center"
          >
            联系我们
          </a>
        </nav>
      </div>
    </header>
  );
}
