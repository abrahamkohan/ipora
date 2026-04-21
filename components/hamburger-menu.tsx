"use client";

import { useEffect } from "react";
import { CopyContent, Language } from "@/lib/copy";

interface HamburgerMenuProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  copy: CopyContent;
}

export function HamburgerMenu({ open, onClose, onLogin, lang, setLang, copy }: HamburgerMenuProps) {
  const c = copy.menu;

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  const navLinks = [
    { href: "#enfoque", label: c.nav[0] },
    { href: "#proceso", label: c.nav[1] },
    { href: "#contacto", label: c.nav[2] },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-primary/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-50 shadow-2xl transform transition-transform duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-9 py-6 md:py-7 border-b border-border">
          <span className="font-display font-bold text-xl md:text-2xl text-primary tracking-tight">
            ipora<span className="text-highlight">.</span>
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-2xl text-text hover:text-highlight transition-colors rounded-full hover:bg-bg2"
            aria-label={c.close}
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 md:px-9 py-6 md:py-8">
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  // Smooth scroll after close animation
                  setTimeout(() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="flex items-baseline gap-3 md:gap-4 py-4 md:py-5 border-b border-border group"
              >
                <span className="text-xs text-text-muted font-medium w-5">
                  0{i + 1}
                </span>
                <span className="font-display font-bold text-2xl md:text-3xl lg:text-[34px] text-primary tracking-tight group-hover:text-highlight transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Footer with login and language */}
        <div className="px-6 md:px-9 py-5 md:py-6 bg-bg2 border-t border-border">
          {/* Login button */}
          <button
            onClick={() => {
              onClose();
              setTimeout(onLogin, 300);
            }}
            className="w-full flex items-center justify-between px-5 py-4 bg-primary text-white font-semibold text-sm md:text-base tracking-wide hover:bg-primary-2 active:scale-[0.98] transition-all mb-5 rounded-md"
          >
            <span>{c.login}</span>
            <span className="text-lg">→</span>
          </button>

          {/* Language toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">
              {c.langLabel}
            </span>
            <div className="flex border border-border bg-white rounded-md overflow-hidden">
              {(["es", "en"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    lang === l
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
