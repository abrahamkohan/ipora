"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { COPY, Language } from "@/lib/copy";
import { useRouter } from "next/navigation";

export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Load language preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("ipora-lang") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem("ipora-lang", lang);
  }, [lang]);

  const handleLogin = () => {
    router.push("/login");
  };

  const copy = COPY[lang];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with nav */}
      <Hero 
        lang={lang} 
        copy={copy} 
        onMenu={() => setMenuOpen(true)} 
      />

      {/* Services / Principles */}
      <Services copy={copy} />

      {/* Process */}
      <Process copy={copy} />

      {/* Contact */}
      <Contact copy={copy} />

      {/* Footer */}
      <Footer copy={copy} />

      {/* Hamburger Menu Drawer */}
      <HamburgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLogin={handleLogin}
        lang={lang}
        setLang={setLang}
        copy={copy}
      />
    </main>
  );
}
