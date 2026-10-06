'use client';
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

const trabalhos = [
  {
    id: 1,
    titulo: "Campanha de marca",
    categoria: "Publicidade",
    imagem: "/images/trabalho-1.jpg",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Produção de conteúdo",
    categoria: "Lifestyle",
    imagem: "/images/trabalho-2.jpg",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Evento especial",
    categoria: "Eventos",
    imagem: "/images/trabalho-3.jpg",
    destaque: false,
  },
  {
    id: 4,
    titulo: "Campanha de beleza",
    categoria: "Beleza",
    imagem: "/images/trabalho-4.jpg",
    destaque: true,
  },
  {
    id: 5,
    titulo: "Conteúdo para marca",
    categoria: "Publicidade",
    imagem: "/images/trabalho-5.jpg",
    destaque: false,
  },
  {
    id: 6,
    titulo: "Experiência",
    categoria: "Lifestyle",
    imagem: "/images/trabalho-6.jpg",
    destaque: false,
  },
];

const categorias = ["Todos", "Publicidade", "Eventos", "Beleza", "Lifestyle"];

export default function TrabalhosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const trabalhosFiltrados =
    categoriaAtiva === "Todos"
      ? trabalhos
      : trabalhos.filter((trabalho) => trabalho.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#292929]">
      {/* Hero */}
      <section className="px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Meu portfólio
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Trabalhos que
              <br />
              <span className="text-[#FF914C]">viraram histórias.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg">
              Um pouco dos trabalhos, campanhas, experiências e projetos que
              fizeram parte da minha trajetória como criadora de conteúdo.
            </p>
          </div>
        </div>
      </section>
      {/* Categorias */}

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {" "}
            {categorias.map((categoria) => {
              const ativa = categoriaAtiva === categoria;
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaAtiva(categoria)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${ativa ? "bg-[#292929] text-white" : "border border-[#E9DCD4] bg-white text-[#666] hover:border-[#FF914C] hover:text-[#FF914C]"}`}
                >
                  {" "}
                  {categoria}{" "}
                </button>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Galeria */}{" "}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          {trabalhosFiltrados.length > 0 ? (
            <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
              {" "}
              {trabalhosFiltrados.map((trabalho) => (
                <article
                  key={trabalho.id}
                  className={`group relative overflow-hidden rounded-[1.5rem] bg-[#F2DDD0] ${trabalho.destaque ? "row-span-2 md:col-span-2" : "row-span-1"}`}
                >
                  {" "}
                  <Image
                    src={trabalho.imagem}
                    alt={trabalho.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />{" "}
                  {/* Overlay */}{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />{" "}
                  {/* Informações */}{" "}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {" "}
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFB17E]">
                      {" "}
                      {trabalho.categoria}{" "}
                    </span>{" "}
                    <h2 className="mt-1 text-lg font-bold">
                      {" "}
                      {trabalho.titulo}{" "}
                    </h2>{" "}
                  </div>{" "}
                </article>
              ))}{" "}
            </div>
          ) : (
            <div className="rounded-[2rem] bg-white px-6 py-20 text-center">
              {" "}
              <h2 className="text-2xl font-bold">
                {" "}
                Nenhum trabalho encontrado{" "}
              </h2>{" "}
              <p className="mt-3 text-[#777]">
                {" "}
                Ainda não existem trabalhos cadastrados nessa categoria.{" "}
              </p>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </section>
      {/* Sobre os trabalhos */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Mais do que publicidade
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Cada parceria precisa fazer sentido.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#666]">
              Gosto de trabalhar com marcas que tenham conexão com o meu
              conteúdo e com as pessoas que me acompanham. A ideia é criar
              conteúdos que não pareçam apenas uma publicidade, mas que façam
              parte da experiência de quem está assistindo.
            </p>

            <p className="mt-5 leading-8 text-[#666]">
              Cada projeto é pensado de acordo com a proposta da marca, o
              formato do conteúdo e a melhor maneira de conversar com o público.
            </p>
          </div>
        </div>
      </section>
      {/* Tipos de trabalho */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Formatos
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Algumas formas de trabalhar comigo
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                numero: "01",
                titulo: "Publis",
                texto:
                  "Divulgação de produtos e serviços através de conteúdos para as redes sociais.",
              },
              {
                numero: "02",
                titulo: "Stories",
                texto: "Conteúdos rápidos, espontâneos e próximos do público.",
              },
              {
                numero: "03",
                titulo: "Reels",
                texto:
                  "Vídeos criativos pensados para apresentar marcas de forma natural.",
              },
              {
                numero: "04",
                titulo: "Story Maker",
                texto:
                  "Cobertura e divulgação de eventos, experiências e lançamentos.",
              },
              {
                numero: "05",
                titulo: "Campanhas",
                texto:
                  "Projetos completos desenvolvidos em parceria com marcas.",
              },
              {
                numero: "06",
                titulo: "Conteúdo",
                texto:
                  "Produção de fotos e vídeos para utilização nas redes sociais.",
              },
            ].map((item) => (
              <div
                key={item.numero}
                className="rounded-[1.5rem] border border-[#EDE0D9] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#FF914C]">
                  {item.numero}
                </span>

                <h3 className="mt-6 text-xl font-bold">{item.titulo}</h3>

                <p className="mt-3 text-sm leading-6 text-[#777]">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#292929] px-6 py-14 text-center text-white sm:px-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
            Vamos trabalhar juntos
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Tem uma ideia ou uma campanha em mente?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
            Me conte um pouco sobre o seu projeto e vamos conversar sobre as
            possibilidades.
          </p>

          <Link
            href="/contato"
            className="mt-8 inline-flex rounded-full bg-[#FF914C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e87935]"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </main>
  );
}
