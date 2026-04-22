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
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-20 overflow-hidden">
      {/* Background gradient accent */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, var(--highlight-light) 0%, transparent 70%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8 md:mb-16">
          <a 
            href="#" 
            className="font-display font-extrabold text-xl md:text-2xl text-primary tracking-tight"
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
            className="md:hidden flex flex-col gap-1 p-2.5 border border-border active:scale-95 transition-transform"
            aria-label="Menu"
          >
            <span className="w-5 h-0.5 bg-text" />
            <span className="w-5 h-0.5 bg-text" />
          </button>
        </nav>

        {/* MOBILE: Stack vertical simplificado */}
        <div className="lg:hidden">
          {/* Título - Lo más importante primero */}
          <h1 className="font-display font-extrabold text-[clamp(2.2rem,7vw,3rem)] leading-[0.95] tracking-tight mb-4">
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

          {/* Una sola línea clara - Sin subhead complejo */}
          <p className="text-base text-text-mid leading-relaxed mb-5 max-w-lg">
            Diseñamos sistemas que organizan tu operación y te permiten crecer.
          </p>

          {/* CTA - Acción inmediata */}
          <div className="flex flex-col gap-3 mb-8">
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 text-sm font-bold uppercase tracking-wider rounded-md hover:bg-primary-2 active:scale-[0.98] transition-all"
            >
              {hero.cta}
              <span>→</span>
            </a>
            <a 
              href="#proceso"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-text px-6 py-3 text-sm font-semibold tracking-wide rounded-md hover:text-highlight transition-all"
            >
              {hero.cta2}
              <span>→</span>
            </a>
          </div>

          {/* Imagen debajo del CTA - Jerarquía correcta */}
          <div className="mb-8">
            <div className="w-full max-w-sm mx-auto">
              <AppMockup lang={lang} copy={copy} />
            </div>
            <p className="mt-3 text-[10px] tracking-widest uppercase text-text-muted text-center font-semibold">
              {hero.mockupLabel}
            </p>
          </div>

          {/* Trust badges simplificados */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6">
            {hero.trustItems.slice(0, 2).map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs text-text font-medium">
                <span className="text-highlight">✔</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Layout original de 2 columnas */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-7 h-0.5 bg-highlight" />
              <span className="text-sm tracking-widest uppercase text-text-muted font-medium">
                {hero.eyebrow}
              </span>
            </div>

            {/* Title */}
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

            {/* Subhead */}
            <p className="font-display font-semibold text-xl md:text-[22px] text-primary leading-snug mb-5 max-w-xl tracking-tight">
              {hero.subhead}
            </p>

            {/* Lede */}
            <p className="text-lg text-text-mid leading-relaxed mb-5 max-w-lg">
              {hero.lede}
            </p>

            {/* Pain point */}
            <p className="text-base text-text-muted leading-relaxed mb-8 pl-4 border-l-2 border-highlight italic">
              {hero.pain}
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-4 mb-8">
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-md hover:bg-primary-2 active:scale-[0.98] transition-all"
              >
                {hero.cta}
                <span>→</span>
              </a>
              <a 
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-text px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-md border border-border-dark hover:border-highlight hover:text-highlight active:scale-[0.98] transition-all"
              >
                {hero.cta2}
                <span>→</span>
              </a>
            </div>

            {/* Social proof */}
            <p className="text-sm text-text-muted mb-8 max-w-md">
              {hero.social}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8">
              {hero.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-text font-semibold">
                  <span className="text-highlight text-base">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Mockup */}
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
