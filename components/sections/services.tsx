"use client";

import { CopyContent } from "@/lib/copy";

interface ServicesProps {
  copy: CopyContent;
}

export function Services({ copy }: ServicesProps) {
  const s = copy.services;

  return (
    <section id="enfoque" className="py-16 md:py-32 bg-bg2 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-16 md:text-center md:max-w-3xl md:mx-auto">
          <div className="flex items-center gap-2 mb-3 md:justify-center">
            <span className="w-5 h-px bg-highlight/60 md:w-7" />
            <span className="text-[11px] tracking-widest uppercase text-highlight font-semibold">
              {s.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight mb-3 md:mb-5">
            {s.title}
          </h2>
          <p className="text-[15px] md:text-xl text-text-mid leading-relaxed max-w-2xl">
            {s.subtitle}
          </p>
        </div>

        {/* MOBILE: Lista vertical consistente */}
        <div className="lg:hidden space-y-4">
          {s.items.map((item, i) => (
            <div 
              key={i} 
              className="rounded-xl p-5 bg-white border border-border/50"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
            >
              {/* Número de fondo - sutil */}
              <span 
                className="absolute top-2 right-3 font-display font-extrabold text-5xl leading-none pointer-events-none select-none"
                style={{ 
                  color: 'var(--primary)',
                  opacity: 0.04
                }}
              >
                {item.n}
              </span>

              {/* Tag y número */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] tracking-wider uppercase text-highlight font-semibold">
                  {item.tag}
                </span>
                <span className="w-4 h-px bg-border" />
                <span className="text-[11px] text-text-muted font-medium">
                  {item.n}
                </span>
              </div>

              {/* Título */}
              <h3 className="font-display font-bold text-lg text-primary mb-2 tracking-tight">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-[14px] text-text-mid leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid 3 columnas */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {s.items.map((item, i) => (
            <div 
              key={i} 
              className="rounded-xl p-6 bg-white border border-border/50 transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
            >
              {/* Número de fondo */}
              <span 
                className="absolute top-3 right-4 font-display font-extrabold text-5xl leading-none pointer-events-none select-none"
                style={{ 
                  color: 'var(--primary)',
                  opacity: 0.04
                }}
              >
                {item.n}
              </span>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-highlight font-bold text-sm">{item.n}</span>
                <span className="w-4 h-px bg-border" />
                <span className="text-[11px] tracking-wider uppercase text-text-muted font-semibold">
                  {item.tag}
                </span>
              </div>

              {/* Título */}
              <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Body */}
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
