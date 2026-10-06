"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, fadeLeft, fadeRight, cardAnimation } from "@/types/animations";


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

const categorias = [
  "Todos",
  "Publicidade",
  "Eventos",
  "Beleza",
  "Lifestyle",
];



export default function TrabalhosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const trabalhosFiltrados =
    categoriaAtiva === "Todos"
      ? trabalhos
      : trabalhos.filter(
          (trabalho) => trabalho.categoria === categoriaAtiva
        );

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F5] text-[#292929]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        {/* Decoração */}
        <motion.div
          className="absolute -right-20 top-24 h-56 w-56 rounded-full bg-[#FF914C]/10"
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-[#FF914C]/10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl"
          >
            <motion.span
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meu portfólio
            </motion.span>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Trabalhos que
              <br />
              <motion.span
                className="inline-block text-[#FF914C]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                viraram histórias.
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Um pouco dos trabalhos, campanhas, experiências e projetos que
              fizeram parte da minha trajetória como criadora de conteúdo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIAS
      ========================================================= */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex gap-3 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {categorias.map((categoria, index) => {
              const ativa = categoriaAtiva === categoria;

              return (
                <motion.button
                  key={categoria}
                  onClick={() => setCategoriaAtiva(categoria)}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    ativa
                      ? "bg-[#292929] text-white"
                      : "border border-[#E9DCD4] bg-white text-[#666] hover:border-[#FF914C] hover:text-[#FF914C]"
                  }`}
                >
                  {ativa && (
                    <motion.span
                      layoutId="categoriaAtiva"
                      className="absolute inset-0 -z-0 rounded-full bg-[#292929]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {categoria}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          GALERIA
      ========================================================= */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {trabalhosFiltrados.length > 0 ? (
            <motion.div
              layout
              className="grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {trabalhosFiltrados.map((trabalho, index) => (
                  <motion.article
                    layout
                    key={trabalho.id}
                    variants={cardAnimation}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                      y: 20,
                      transition: {
                        duration: 0.25,
                      },
                    }}
                    transition={{
                      layout: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className={`group relative overflow-hidden rounded-[1.5rem] bg-[#F2DDD0] shadow-sm ${
                      trabalho.destaque
                        ? "row-span-2 md:col-span-2"
                        : "row-span-1"
                    }`}
                  >
                    {/* Imagem */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={trabalho.imagem}
                        alt={trabalho.titulo}
                        fill
                        sizes={
                          trabalho.destaque
                            ? "(max-width: 768px) 100vw, 50vw"
                            : "(max-width: 768px) 50vw, 25vw"
                        }
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Borda laranja no hover */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-[1.5rem] border-2 border-[#FF914C]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Informações */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-5 text-white"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileHover={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <motion.span
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFB17E]"
                      >
                        {trabalho.categoria}
                      </motion.span>

                      <h2 className="mt-1 text-lg font-bold">
                        {trabalho.titulo}
                      </h2>
                    </motion.div>

                    {/* Número */}
                    <motion.span
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#292929]"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      0{trabalho.id}
                    </motion.span>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="rounded-[2rem] bg-white px-6 py-20 text-center"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1E8] text-xl"
              >
                !
              </motion.div>

              <h2 className="mt-5 text-2xl font-bold">
                Nenhum trabalho encontrado
              </h2>

              <p className="mt-3 text-[#777]">
                Ainda não existem trabalhos cadastrados nessa categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* =========================================================
          SOBRE OS TRABALHOS
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-[#FF914C]/10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Mais do que publicidade
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Cada parceria precisa fazer sentido.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TIPOS DE TRABALHO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Formatos
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Algumas formas de trabalhar comigo
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
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
                texto:
                  "Conteúdos rápidos, espontâneos e próximos do público.",
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
              <motion.div
                key={item.numero}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 45px rgba(41, 41, 41, 0.10)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group rounded-[1.5rem] border border-[#EDE0D9] bg-white p-7"
              >
                <motion.span
                  className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#FFF1E8] px-3 text-sm font-bold text-[#FF914C]"
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                >
                  {item.numero}
                </motion.span>

                <h3 className="mt-6 text-xl font-bold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777]">
                  {item.texto}
                </p>

                <motion.div
                  className="mt-5 h-1 rounded-full bg-[#FF914C]"
                  initial={{
                    width: "20%",
                  }}
                  whileHover={{
                    width: "45%",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#292929] px-6 py-14 text-center text-white sm:px-10"
        >
          {/* Elementos decorativos */}
          <motion.div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF914C]/20"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-white/5"
            animate={{
              y: [0, -12, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <motion.span
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Vamos trabalhar juntos
            </motion.span>

            <motion.h2
              className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tem uma ideia ou uma campanha em mente?
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl leading-7 text-white/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Me conte um pouco sobre o seu projeto e vamos conversar sobre as
              possibilidades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contato"
                className="mt-8 inline-flex rounded-full bg-[#FF914C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e87935]"
              >
                <motion.span
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  Entrar em contato
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}