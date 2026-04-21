"use client";

import { CopyContent } from "@/lib/copy";

interface ServicesProps {
  copy: CopyContent;
}

export function Services({ copy }: ServicesProps) {
  const s = copy.services;

  return (
    <section id="enfoque" className="py-20 md:py-32 bg-bg2 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-highlight font-bold">
                {s.eyebrow}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight">
              {s.title}
            </h2>
          </div>
          <div className="md:col-span-2 flex items-end">
            <p className="text-lg md:text-xl text-text-mid leading-relaxed max-w-2xl">
              {s.subtitle}
            </p>
          </div>
        </div>

        {/* Service cards - Full width cards on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border">
          {s.items.map((item, i) => (
            <div 
              key={i} 
              className="p-6 md:p-8 lg:p-10 bg-white border-r border-b border-border group hover:shadow-lg transition-shadow"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <span className="text-highlight font-bold text-xs">{item.n}</span>
                <span className="w-5 h-px bg-border" />
                <span className="text-[10px] md:text-xs tracking-widest uppercase text-text-muted font-bold">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl lg:text-[28px] text-primary mb-3 md:mb-4 tracking-tight leading-tight">
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-sm md:text-base text-text-mid leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
