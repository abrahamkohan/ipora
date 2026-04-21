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
    <section className="relative pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
      {/* Background gradient accent */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, var(--highlight-light) 0%, transparent 70%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12 md:mb-16">
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

        {/* Hero content - Mobile: stacked, Desktop: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5 md:mb-6">
              <span className="w-7 h-0.5 bg-highlight" />
              <span className="text-xs md:text-sm tracking-widest uppercase text-text-muted font-medium">
                {hero.eyebrow}
              </span>
            </div>

            {/* Title - Mobile optimized size */}
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight mb-5 md:mb-6">
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
            <p className="font-display font-semibold text-lg md:text-xl md:text-[22px] text-primary leading-snug mb-4 md:mb-5 max-w-xl tracking-tight">
              {hero.subhead}
            </p>

            {/* Lede */}
            <p className="text-base md:text-lg text-text-mid leading-relaxed mb-4 md:mb-5 max-w-lg">
              {hero.lede}
            </p>

            {/* Pain point - with left border */}
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 md:mb-8 pl-4 border-l-2 border-highlight italic">
              {hero.pain}
            </p>

            {/* CTAs - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 md:px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-md hover:bg-primary-2 active:scale-[0.98] transition-all"
              >
                {hero.cta}
                <span>→</span>
              </a>
              <a 
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-text px-6 md:px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-md border border-border-dark hover:border-highlight hover:text-highlight active:scale-[0.98] transition-all"
              >
                {hero.cta2}
                <span>→</span>
              </a>
            </div>

            {/* Social proof */}
            <p className="text-xs md:text-sm text-text-muted mb-6 md:mb-8 max-w-md">
              {hero.social}
            </p>

            {/* Trust badges - Horizontal scroll on mobile */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8">
              {hero.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-text font-semibold">
                  <span className="text-highlight text-base">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Mockup */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="w-full max-w-md lg:max-w-none">
              <AppMockup lang={lang} copy={copy} />
            </div>
            <p className="mt-4 text-[10px] md:text-xs tracking-widest uppercase text-text-muted text-center font-semibold">
              {hero.mockupLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
