"use client";

import { CopyContent } from "@/lib/copy";

interface AppMockupProps {
  lang: string;
  copy: CopyContent;
}

export function AppMockup({ lang, copy }: AppMockupProps) {
  const isEs = lang === "es";
  
  return (
    <div className="relative w-full">
      {/* Main mockup card */}
      <div className="bg-white border border-border rounded-lg md:rounded-[10px] overflow-hidden relative">
        {/* Browser chrome */}
        <div className="flex items-center px-3 py-2 md:px-3.5 md:py-2.5 bg-bg2 border-b border-border gap-2">
          <div className="flex gap-1.5 flex-shrink-0">
            {["#e05c2a", "#d4a020", "#2d8a5a"].map((c) => (
              <span key={c} className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 text-center text-[10px] text-text-muted font-mono truncate px-2">
            app.ipora.cliente.com
          </div>
        </div>

        {/* App body */}
        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr]">
          {/* Sidebar */}
          <div className="bg-primary p-2 md:p-4 text-white">
            <div className="hidden md:block text-[9px] tracking-widest opacity-60 mb-2 md:mb-3 uppercase">
              Menú
            </div>
            {["Panel", "Clientes", "Tareas", "Reportes", "Ajustes"].map((item, ix) => (
              <div
                key={item}
                className="py-1 px-1.5 md:py-1.5 md:px-2 text-[9px] md:text-xs mb-0.5 transition-colors"
                style={{
                  background: ix === 0 ? "rgba(255,255,255,0.12)" : "transparent",
                  borderLeft: ix === 0 ? "2px solid var(--highlight)" : "2px solid transparent",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="p-2.5 md:p-4">
            <div className="font-display font-bold text-xs md:text-base text-text">
              {isEs ? "Diagnóstico — Semana 12" : "Diagnostic — Week 12"}
            </div>
            <div className="text-[9px] md:text-xs text-text-muted mt-0.5 mb-2 md:mb-3">
              {isEs ? "Estado del negocio" : "Business status"}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-2 md:mb-3">
              {[
                { l: isEs ? "Leads" : "Leads", v: "184", d: "+32%" },
                { l: isEs ? "Respuesta" : "Reply", v: "2.4h", d: "-18%" },
              ].map((k) => (
                <div key={k.l} className="p-1.5 md:p-2 border border-border bg-bg2">
                  <div className="text-[7px] md:text-[9px] tracking-wider text-text-muted uppercase">
                    {k.l}
                  </div>
                  <div className="font-display font-bold text-sm md:text-xl text-primary mt-0.5 md:mt-1">
                    {k.v}
                  </div>
                  <div className="text-[8px] md:text-[10px] text-green-600 font-semibold mt-0.5">
                    {k.d}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="p-1.5 md:p-2.5 border border-border bg-white mb-2 md:mb-3">
              <div className="text-[8px] md:text-[10px] text-text-muted mb-1 md:mb-1.5">
                {isEs ? "Actividad · últimos 14 días" : "Activity · 14 days"}
              </div>
              <svg viewBox="0 0 300 80" className="w-full h-auto max-h-[50px] md:max-h-[80px] block">
                <path
                  d="M0 60 Q 30 50, 50 45 T 100 30 T 150 35 T 200 20 T 250 25 T 300 10"
                  stroke="var(--highlight)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 60 Q 30 50, 50 45 T 100 30 T 150 35 T 200 20 T 250 25 T 300 10 L 300 80 L 0 80 Z"
                  fill="var(--highlight-light)"
                  opacity="0.6"
                />
                {[0, 50, 100, 150, 200, 250].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    x2={x}
                    y1="0"
                    y2="80"
                    stroke="var(--border)"
                    strokeDasharray="2 3"
                  />
                ))}
              </svg>
            </div>

            {/* Task list */}
            <div>
              {[
                { 
                  t: isEs ? "Integrar WhatsApp" : "Integrate WhatsApp", 
                  s: isEs ? "En curso" : "In progress", 
                  c: "var(--highlight)" 
                },
                { 
                  t: isEs ? "Automatizar facturación" : "Automate billing", 
                  s: isEs ? "En revisión" : "In review", 
                  c: "var(--primary-2)" 
                },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center gap-1.5 md:gap-2 py-1 md:py-1.5 border-b border-border last:border-b-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.c }} />
                  <span className="text-[8px] md:text-[11px] flex-1 text-text truncate min-w-0">{r.t}</span>
                  <span className="text-[8px] md:text-[10px] text-text-muted flex-shrink-0">{r.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badge - Contenido dentro del flujo */}
        <div className="absolute right-2 top-10 md:right-4 md:top-12">
          <div 
            className="bg-highlight text-white py-1 px-2 md:py-2 md:px-3 text-[8px] md:text-xs font-bold tracking-wider uppercase rounded-sm"
            style={{
              transform: "rotate(3deg)",
              boxShadow: "0 2px 8px rgba(224,92,42,0.3)",
            }}
          >
            {isEs ? "Hecho a medida" : "Bespoke"}
          </div>
        </div>
      </div>
    </div>
  );
}
