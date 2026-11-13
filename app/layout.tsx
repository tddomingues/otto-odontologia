import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Otto Odontologia | Clínica fictícia em Maringá · Projeto de portfólio",
  description:
    "Landing page conceitual de uma clínica odontológica fictícia, com foco em prevenção e atendimento sem pressa. Projeto de portfólio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}