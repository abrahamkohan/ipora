"use client";

import { CopyContent } from "@/lib/copy";
import { AppMockup } from "@/components/app-mockup";

interface HeroProps {
  lang: string;
  copy: CopyContent;
  onMenu: () => void;
}

export function Hero({ lang, copy, onMenu }: HeroProps) {
  const hero = copy.hero;

  return (
    <section className="relative pt-4 pb-8 md:pt-24 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, var(--highlight-light) 0%, transparent 70%)",
        }}
      />
      
      {/* Container principal con padding consistente */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 xl:px-12 relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-6 md:mb-16">
          <a 
            href="#" 
            className="font-display font-extrabold text-lg md:text-2xl text-primary tracking-tight"
          >
            ipora<span className="text-highlight">.</span>
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#enfoque" className="text-sm text-text hover:text-primary transition-colors font-medium">
              {copy.nav.approach}
            </a>
            <a href="#proceso" className="text-sm text-text hover:text-primary transition-colors font-medium">
              {copy.nav.process}
            </a>
            <a href="#contacto" className="text-sm text-text hover:text-primary transition-colors font-medium">
              {copy.nav.contact}
            </a>
            <button 
              onClick={onMenu}
              className="flex flex-col gap-1.5 p-3 border border-border hover:border-highlight transition-colors"
              aria-label="Menu"
            >
              <span className="w-5 h-0.5 bg-text" />
              <span className="w-5 h-0.5 bg-text" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={onMenu}
            className="md:hidden flex flex-col gap-1 p-2 border border-border active:scale-95 transition-transform"
            aria-label="Menu"
          >
            <span className="w-4 h-0.5 bg-text" />
            <span className="w-4 h-0.5 bg-text" />
          </button>
        </nav>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-highlight/60" />
            <span className="text-[11px] tracking-wider uppercase text-text-muted font-medium">
              {hero.eyebrow}
            </span>
          </div>

          {/* Título */}
          <h1 className="font-display font-extrabold text-[clamp(1.75rem,7vw,2.25rem)] leading-[0.95] tracking-tight mb-3">
            {hero.title.map((t, i) => (
              <span 
                key={i} 
                className="block"
                style={{ color: i === hero.title.length - 1 ? "var(--highlight)" : "var(--primary)" }}
              >
                {t}
              </span>
            ))}
          </h1>

          {/* Subtítulo simplificado */}
          <p className="text-sm text-text-mid leading-relaxed mb-5 max-w-full">
            Sistemas que organizan tu operación y te permiten crecer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-2 mb-6">
            <a 
              href="#contacto"
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary-2 active:scale-[0.98] transition-all"
            >
              {hero.cta}
              <span>→</span>
            </a>
            <a 
              href="#proceso"
              className="flex items-center justify-center gap-2 text-text font-medium text-sm py-2 hover:text-highlight transition-colors"
            >
              {hero.cta2}
              <span>→</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-4 mb-8">
            {hero.trustItems.slice(0, 2).map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs text-text-mid">
                <span className="text-highlight">✔</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Mockup - Contenido con max-width */}
          <div className="w-full max-w-[280px] mx-auto">
            <AppMockup lang={lang} copy={copy} />
          </div>
          <p className="mt-2 text-[10px] tracking-wider uppercase text-text-muted text-center">
            {hero.mockupLabel}
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-7 h-0.5 bg-highlight" />
              <span className="text-sm tracking-widest uppercase text-text-muted font-medium">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[clamp(3rem,5vw,4.5rem)] leading-[0.95] tracking-tight mb-6">
              {hero.title.map((t, i) => (
                <span 
                  key={i} 
                  className="block"
                  style={{ color: i === hero.title.length - 1 ? "var(--highlight)" : "var(--primary)" }}
                >
                  {t}
                </span>
              ))}
            </h1>

            <p className="font-display font-semibold text-xl md:text-[22px] text-primary leading-snug mb-5 max-w-xl tracking-tight">
              {hero.subhead}
            </p>

            <p className="text-lg text-text-mid leading-relaxed mb-5 max-w-lg">
              {hero.lede}
            </p>

            <p className="text-base text-text-muted leading-relaxed mb-8 pl-4 border-l-2 border-highlight italic">
              {hero.pain}
            </p>

            <div className="flex flex-row gap-4 mb-8">
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-primary-2 active:scale-[0.98] transition-all"
              >
                {hero.cta}
                <span>→</span>
              </a>
              <a 
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-text px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-xl border border-border hover:border-highlight hover:text-highlight active:scale-[0.98] transition-all"
              >
                {hero.cta2}
                <span>→</span>
              </a>
            </div>

            <p className="text-sm text-text-muted mb-8 max-w-md">
              {hero.social}
            </p>

            <div className="flex flex-wrap gap-x-8">
              {hero.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-text font-semibold">
                  <span className="text-highlight text-base">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-none">
              <AppMockup lang={lang} copy={copy} />
            </div>
            <p className="mt-4 text-xs tracking-widest uppercase text-text-muted text-center font-semibold">
              {hero.mockupLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
