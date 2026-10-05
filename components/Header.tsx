"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

<Link
  href="/"
  className="relative inline-block"
>
  <span className="text-3xl font-bold tracking-tight text-[#FF914C]">
    POLIANA
  </span>

  <span className="absolute left-1/2 top-[95%] z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serif text-base font-bold italic tracking-wide text-black">
    MENDES
  </span>
</Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-[#FF914C]"
          >
            Início
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium text-gray-700 transition hover:text-[#FF914C]"
          >
            Sobre
          </Link>

          <Link
            href="/trabalhos"
            className="text-sm font-medium text-gray-700 transition hover:text-[#FF914C]"
          >
            Trabalhos
          </Link>

          <Link
            href="/servicos"
            className="text-sm font-medium text-gray-700 transition hover:text-[#FF914C]"
          >
            Serviços
          </Link>

          <Link
            href="/contato"
            className="rounded-full bg-[#FF914C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F47F36]"
          >
            Contrate
          </Link>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1E8] text-[#FF914C] md:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-2xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Início
            </Link>

            <Link
              href="/sobre"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Sobre
            </Link>

            <Link
              href="/trabalhos"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Trabalhos
            </Link>

            <Link
              href="/servicos"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Serviços
            </Link>

            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#FF914C] px-5 py-3 text-center font-semibold text-white"
            >
              Quero contratar
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}