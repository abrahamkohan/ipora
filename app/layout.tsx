import type { Metadata } from "next";
import { Syne, Lato } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ipora — Software boutique · Buenos Aires",
  description: "Diseñamos sistemas que organizan tu operación, automatizan procesos y convierten datos en decisiones. Software boutique a medida.",
  keywords: ["software boutique", "desarrollo a medida", "Buenos Aires", "sistemas de gestión", "automatización"],
  openGraph: {
    title: "Ipora — Software boutique",
    description: "Arquitectura sólida para escalar tu negocio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${lato.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-lato">{children}</body>
    </html>
  );
}
