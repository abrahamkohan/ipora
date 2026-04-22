"use client";

import { CopyContent } from "@/lib/copy";

interface ProcessProps {
  copy: CopyContent;
}

export function Process({ copy }: ProcessProps) {
  const p = copy.process;

  // La card 2 (index 1) es la destacada - "Diagnosticamos"
  const highlightedIndex = 1;

  return (
    <section id="proceso" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header - Centered */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-highlight font-bold">
              {p.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight mb-4 md:mb-5">
            {p.title}
          </h2>
          <p className="text-base md:text-lg text-text-mid leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Línea conectora horizontal - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border z-0" />
          
          {/* Línea conectora vertical - Mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {p.steps.map((step, i) => {
              const isHighlighted = i === highlightedIndex;
              
              return (
                <div 
                  key={i}
                  className={`
                    relative group cursor-default
                    transition-all duration-300 ease-out
                    hover:-translate-y-1.5
                    ${isHighlighted ? 'lg:-translate-y-2' : ''}
                  `}
                >
                  {/* Card */}
                  <div className={`
                    relative h-full p-6 md:p-8
                    border-l-4 ${isHighlighted ? 'border-l-highlight' : 'border-l-transparent'} 
                    lg:border-l-0 lg:border-t-4 ${isHighlighted ? 'lg:border-t-highlight' : 'lg:border-t-transparent'}
                    bg-white
                    transition-all duration-300
                    hover:shadow-lg
                    ${isHighlighted ? 'shadow-md lg:shadow-lg' : 'shadow-sm'}
                    ${isHighlighted ? 'bg-bg2/30' : ''}
                  `}>
                    {/* Número grande - Background */}
                    <div className={`
                      absolute top-2 right-2 md:top-4 md:right-4
                      font-display font-extrabold text-6xl md:text-7xl lg:text-8xl
                      leading-none
                      select-none
                      transition-colors duration-300
                      ${isHighlighted ? 'text-highlight/10' : 'text-primary/[0.03]'}
                      group-hover:text-highlight/15
                    `}>
                      0{i + 1}
                    </div>

                    {/* Número visible - Arriba */}
                    <div className={`
                      relative inline-flex items-center justify-center
                      w-12 h-12 md:w-14 md:h-14 mb-5
                      rounded-full
                      font-display font-bold text-lg md:text-xl
                      transition-all duration-300
                      ${isHighlighted 
                        ? 'bg-highlight text-white shadow-lg shadow-highlight/25' 
                        : 'bg-primary text-white group-hover:bg-highlight'
                      }
                    `}>
                      {i + 1}
                    </div>

                    {/* Connector dot - Desktop (en la línea) */}
                    <div className={`
                      hidden lg:block
                      absolute -top-3 left-1/2 -translate-x-1/2
                      w-6 h-6 rounded-full border-4 border-white
                      transition-colors duration-300 z-20
                      ${isHighlighted ? 'bg-highlight' : 'bg-border group-hover:bg-highlight'}
                    `} />

                    {/* Connector dot - Mobile (en la línea vertical) */}
                    <div className={`
                      lg:hidden
                      absolute left-6 top-8
                      w-4 h-4 rounded-full border-2 border-white
                      transition-colors duration-300 z-20
                      -translate-x-1/2
                      ${isHighlighted ? 'bg-highlight' : 'bg-border group-hover:bg-highlight'}
                    `} />

                    {/* Title */}
                    <h3 className={`
                      relative font-display font-bold 
                      text-xl md:text-2xl 
                      mb-3 tracking-tight
                      transition-colors duration-300
                      ${isHighlighted ? 'text-primary' : 'text-primary group-hover:text-highlight'}
                    `}>
                      {step.title}
                    </h3>

                    {/* Body */}
                    <p className="relative text-sm md:text-base text-text-mid leading-relaxed">
                      {step.body}
                    </p>

                    {/* Arrow indicator - Desktop */}
                    {i < 3 && (
                      <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                        <svg 
                          className="w-4 h-4 text-border group-hover:text-highlight transition-colors duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Optional */}
        <div className="mt-16 text-center">
          <p className="text-text-muted mb-4">¿Listo para ordenar tu operación?</p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 text-highlight font-semibold hover:underline transition-all"
          >
            Empezar ahora 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
