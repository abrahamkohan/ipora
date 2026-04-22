"use client";

import { CopyContent } from "@/lib/copy";

interface FooterProps {
  copy: CopyContent;
}

export function Footer({ copy }: FooterProps) {
  const f = copy.footer;

  return (
    <footer className="bg-white border-t border-border py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Left - Logo and tagline */}
          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-4">
            <span className="font-display font-bold text-base md:text-lg text-primary">
              ipora<span className="text-highlight">.</span>
            </span>
            <span className="text-[11px] md:text-sm text-text-muted">
              {f.tag}
            </span>
          </div>

          {/* Right - Copyright */}
          <div className="text-[11px] md:text-xs text-text-muted/70">
            {f.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
