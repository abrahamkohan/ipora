"use client";

import { CopyContent } from "@/lib/copy";

interface ProcessProps {
  copy: CopyContent;
}

export function Process({ copy }: ProcessProps) {
  const p = copy.process;

  return (
    <section id="proceso" className="py-12 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="mb-8 md:mb-20 md:text-center md:max-w-2xl md:mx-auto">
          <div className="flex items-center gap-2 mb-3 md:justify-center">
            <span className="w-5 h-px bg-highlight/60 md:w-7" />
            <span className="text-[11px] tracking-wider uppercase text-highlight font-semibold">
              {p.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight mb-3 md:mb-5">
            {p.title}
          </h2>
          <p className="text-sm md:text-lg text-text-mid leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* MOBILE: Lista vertical */}
        <div className="md:hidden space-y-3">
          {p.steps.map((step, i) => {
            const isHighlighted = i === 1;
            
            return (
              <div 
                key={i}
                className={`
                  relative rounded-lg p-4
                  border border-border/50
                  ${isHighlighted ? 'bg-bg2/40' : 'bg-white'}
                `}
                style={{
                  boxShadow: isHighlighted 
                    ? '0 1px 3px rgba(0,0,0,0.04)' 
                    : '0 1px 2px rgba(0,0,0,0.02)'
                }}
              >
                {/* Timeline connector */}
                {i < 3 && (
                  <div className="absolute left-5 top-full w-px h-3 bg-border/40" />
                )}

                {/* Number badge */}
                <div className="flex items-center gap-3 mb-2">
                  <span 
                    className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold flex-shrink-0"
                    style={{
                      background: isHighlighted ? 'var(--highlight)' : 'var(--primary)',
                      color: 'white'
                    }}
                  >
                    {i + 1}
                  </span>
                  {isHighlighted && (
                    <span className="text-[10px] tracking-wider uppercase text-highlight font-semibold">
                      Paso clave
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-primary mb-1.5 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-mid leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {p.steps.map((step, i) => {
            const isHighlighted = i === 1;
            
            return (
              <div 
                key={i}
                className={`
                  relative rounded-xl p-5
                  border border-border/50
                  transition-all duration-200
                  hover:-translate-y-1
                  ${isHighlighted ? 'bg-bg2/40' : 'bg-white'}
                `}
                style={{
                  boxShadow: isHighlighted 
                    ? '0 2px 8px rgba(0,0,0,0.04)' 
                    : '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                {/* Background number */}
                <span 
                  className="absolute top-2 right-3 font-display font-extrabold text-5xl leading-none pointer-events-none select-none"
                  style={{ 
                    color: isHighlighted ? 'var(--highlight)' : 'var(--primary)',
                    opacity: 0.05
                  }}
                >
                  0{i + 1}
                </span>

                {/* Number */}
                <div className="relative mb-3">
                  <span 
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                    style={{
                      background: isHighlighted ? 'var(--highlight)' : 'var(--primary)',
                      color: 'white'
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-primary mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-mid leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-16 text-center">
          <p className="text-text-muted text-sm mb-2">¿Listo para ordenar tu operación?</p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 text-highlight font-semibold hover:underline text-sm"
          >
            Empezar ahora 
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
