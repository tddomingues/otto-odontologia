import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Otto Odontologia | Clínica fictícia em Maringá · Projeto de portfólio",
  description:
    "Landing page conceitual de uma clínica odontológica fictícia, com foco em prevenção e atendimento sem pressa. Projeto de portfólio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}