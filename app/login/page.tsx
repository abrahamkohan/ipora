"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COPY, Language } from "@/lib/copy";

export default function LoginPage() {
  const [lang, setLang] = useState<Language>("es");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Load language preference
  useEffect(() => {
    const saved = localStorage.getItem("ipora-lang") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const c = COPY[lang].login;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-bg2 flex flex-col">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <Link 
          href="/"
          className="font-display font-bold text-xl md:text-2xl text-primary tracking-tight inline-block"
        >
          ipora<span className="text-highlight">.</span>
        </Link>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 md:py-12">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-text-muted hover:text-primary transition-colors mb-6 md:mb-8"
          >
            {c.back}
          </Link>

          {/* Card */}
          <div className="bg-white border border-border rounded-lg p-6 md:p-10 lg:p-12 shadow-sm">
            {!sent ? (
              <>
                {/* Title */}
                <h1 className="font-display font-bold text-2xl md:text-3xl text-primary mb-2 tracking-tight">
                  {c.title}
                </h1>
                <p className="text-sm md:text-base text-text-mid mb-6 md:mb-8">
                  {c.sub}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-text mb-2">
                      {c.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={c.placeholder}
                      className="w-full px-4 py-3 border border-border rounded-md text-base focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 md:py-4 text-sm font-bold uppercase tracking-wider rounded-md hover:bg-primary-2 active:scale-[0.98] transition-all"
                  >
                    {c.cta}
                  </button>
                </form>

                {/* Fine print */}
                <p className="text-xs text-text-muted mt-5 text-center">
                  {c.fine}
                </p>
              </>
            ) : (
              /* Success state */
              <div className="text-center py-4 md:py-6">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 md:mb-6 rounded-full bg-highlight/10 flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-xl md:text-2xl text-primary mb-2">
                  {c.sentTitle}
                </h2>
                <p className="text-sm md:text-base text-text-mid mb-1">
                  {c.sentBody}
                </p>
                <p className="text-sm md:text-base font-semibold text-primary mb-4">
                  {email}
                </p>
                <p className="text-xs md:text-sm text-text-muted mb-5">
                  {c.sentFine}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm font-semibold text-highlight hover:underline"
                >
                  {c.resend}
                </button>
              </div>
            )}
          </div>

          {/* Language toggle */}
          <div className="flex justify-center mt-6 md:mt-8">
            <div className="flex border border-border bg-white rounded-md overflow-hidden">
              {(["es", "en"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    lang === l
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
