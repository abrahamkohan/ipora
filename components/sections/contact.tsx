"use client";

import { useState } from "react";
import { CopyContent } from "@/lib/copy";

interface ContactProps {
  copy: CopyContent;
}

export function Contact({ copy }: ContactProps) {
  const c = copy.contact;
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-36 bg-primary text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Copy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-white/60 font-bold">
                {c.eyebrow}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] mb-5 md:mb-6">
              {c.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-md mb-8 md:mb-12">
              {c.subtitle}
            </p>

            {/* Email section */}
            <div className="pt-8 border-t border-white/15">
              <div className="text-[10px] md:text-xs tracking-widest uppercase text-white/50 font-semibold mb-3">
                {c.reachLabel}
              </div>
              <a 
                href="mailto:hola@ipora.app"
                className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white border-b-2 border-highlight pb-1 hover:text-highlight transition-colors inline-block"
              >
                hola@ipora.app
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 backdrop-blur-sm">
            {sent ? (
              <div className="py-12 md:py-16 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-highlight/20 flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                  {c.successTitle}
                </h3>
                <p className="text-white/70">
                  {c.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[10px] md:text-xs tracking-widest uppercase text-white/50 font-semibold mb-2">
                    {c.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base md:text-lg py-2.5 focus:outline-none focus:border-highlight transition-colors placeholder:text-white/30"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] md:text-xs tracking-widest uppercase text-white/50 font-semibold mb-2">
                    {c.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base md:text-lg py-2.5 focus:outline-none focus:border-highlight transition-colors placeholder:text-white/30"
                    placeholder="vos@empresa.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[10px] md:text-xs tracking-widest uppercase text-white/50 font-semibold mb-2">
                    {c.company}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base md:text-lg py-2.5 focus:outline-none focus:border-highlight transition-colors placeholder:text-white/30"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] md:text-xs tracking-widest uppercase text-white/50 font-semibold mb-2">
                    {c.message}
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white text-base md:text-lg py-2.5 focus:outline-none focus:border-highlight transition-colors placeholder:text-white/30 resize-none"
                    placeholder="Contanos tu situación..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-highlight text-white py-4 md:py-5 text-sm font-bold uppercase tracking-wider hover:bg-highlight/90 active:scale-[0.98] transition-all rounded-md mt-4"
                >
                  {c.cta} →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
