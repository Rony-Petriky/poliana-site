import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Poliana | Influenciadora Digital",
  description:
    "Conheça o trabalho da Poliana, influenciadora digital e criadora de conteúdo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#FFF9F5] text-[#292929] antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}