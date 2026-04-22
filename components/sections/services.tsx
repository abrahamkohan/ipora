"use client";

import { CopyContent } from "@/lib/copy";

interface ServicesProps {
  copy: CopyContent;
}

export function Services({ copy }: ServicesProps) {
  const s = copy.services;

  return (
    <section id="enfoque" className="py-12 md:py-32 bg-bg2 border-y border-border overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="mb-8 md:mb-16 md:text-center md:max-w-3xl md:mx-auto">
          <div className="flex items-center gap-2 mb-3 md:justify-center">
            <span className="w-5 h-px bg-highlight/60 md:w-7" />
            <span className="text-[11px] tracking-wider uppercase text-highlight font-semibold">
              {s.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight mb-3 md:mb-5">
            {s.title}
          </h2>
          <p className="text-sm md:text-xl text-text-mid leading-relaxed max-w-2xl">
            {s.subtitle}
          </p>
        </div>

        {/* MOBILE: Lista vertical */}
        <div className="md:hidden space-y-3">
          {s.items.map((item, i) => (
            <div 
              key={i} 
              className="rounded-lg p-4 bg-white border border-border/50"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
            >
              {/* Tag and number */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-highlight font-bold text-xs">{item.n}</span>
                <span className="w-3 h-px bg-border" />
                <span className="text-[10px] tracking-wider uppercase text-text-muted font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base text-primary mb-1.5 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-mid leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {s.items.map((item, i) => (
            <div 
              key={i} 
              className="rounded-xl p-5 bg-white border border-border/50 transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
            >
              {/* Background number */}
              <span 
                className="absolute top-2 right-3 font-display font-extrabold text-5xl leading-none pointer-events-none select-none"
                style={{ 
                  color: 'var(--primary)',
                  opacity: 0.04
                }}
              >
                {item.n}
              </span>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-highlight font-bold text-sm">{item.n}</span>
                <span className="w-4 h-px bg-border" />
                <span className="text-[11px] tracking-wider uppercase text-text-muted font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-primary mb-2 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-mid leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
