"use client";

import { CopyContent } from "@/lib/copy";

interface ProcessProps {
  copy: CopyContent;
}

export function Process({ copy }: ProcessProps) {
  const p = copy.process;

  return (
    <section id="proceso" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header - Centered */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
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

        {/* Steps - 2x2 grid on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {p.steps.map((step, i) => (
            <div 
              key={i}
              className="relative py-8 md:py-10 px-0 sm:px-6 lg:px-8 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 group"
            >
              {/* Number */}
              <div className="font-mono text-xs md:text-sm text-highlight font-bold tracking-wider mb-4 md:mb-5">
                {step.n}
              </div>

              {/* Connector line - hidden on mobile */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-px">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border group-hover:bg-highlight transition-colors" />
                </div>
              )}

              {/* Title */}
              <h3 className="font-display font-bold text-lg md:text-xl lg:text-2xl text-primary mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-sm md:text-base text-text-mid leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
