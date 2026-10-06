"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp, cardAnimation } from "@/types/animations";

const planos = [
  {
    nome: "Start",
    descricao:
      "Para marcas que querem começar a criar presença e conexão nas redes.",
    destaque: false,
    itens: ["Stories 2 vezes por mês"],
    price: 200,
  },
  {
    nome: "Plus",
    descricao:
      "Uma parceria mais completa para aumentar a presença da sua marca.",
    destaque: false,
    itens: ["Stories 2 vezes por mês", "1 reels por trimestre"],
    price: 250,
  },
  {
    nome: "Premium",
    descricao:
      "Para campanhas que precisam de mais presença e variedade de conteúdo.",
    destaque: true,
    itens: ["Stories 4 vezes por mês"],
    price: 300,
  },
  {
    nome: "Master",
    descricao:
      "Uma parceria completa para marcas que querem construir uma campanha especial.",
    destaque: false,
    itens: ["Stories 2 vezes por mês", "1 reels por trimestre"],
    price: 350,
  },
];


export default function ServicosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F5] text-[#292929]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-14 pt-28 sm:px-8 lg:px-12">

        {/* decoração de fundo */}

        <motion.div
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FF914C]/5"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-[#FF914C]/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >

          <div className="mx-auto max-w-3xl text-center">

            <motion.span
              className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              Serviços
            </motion.span>

            <motion.h1
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              Escolha a parceria
              <br />
              que combina com a sua{" "}
              <span className="text-[#FF914C]">marca.</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              Existem diferentes formas de criar uma parceria. Escolha a
              categoria que mais combina com o seu projeto ou entre em contato
              para criarmos algo personalizado.
            </motion.p>

          </div>

        </motion.div>
      </section>


      {/* =====================================================
          PLANOS
      ===================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12">

        <motion.div
          className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.15,
          }}
        >

          {planos.map((plano) => (

            <motion.article
              key={plano.nome}
              variants={cardAnimation}
              whileHover={{
                y: plano.destaque ? -16 : -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className={`relative flex flex-col rounded-[2rem] p-7 ${
                plano.destaque
                  ? "bg-[#292929] text-white shadow-2xl lg:-translate-y-3"
                  : "border border-[#EADDD5] bg-white shadow-sm"
              }`}
            >

              {/* BADGE PREMIUM */}

              {plano.destaque && (

                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF914C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                >
                  Mais escolhido
                </motion.div>

              )}

              {/* NOME */}

              <div>

                <motion.span
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FF914C]"
                  whileHover={{
                    letterSpacing: "0.2em",
                  }}
                >
                  Plano
                </motion.span>

                <h2 className="mt-2 text-3xl font-bold">
                  {plano.nome}
                </h2>

                <p
                  className={`mt-4 min-h-[80px] text-sm leading-6 ${
                    plano.destaque
                      ? "text-white/70"
                      : "text-[#777]"
                  }`}
                >
                  {plano.descricao}
                </p>

              </div>


              {/* PREÇO */}

              <div
                className={`my-7 border-y py-6 ${
                  plano.destaque
                    ? "border-white/10"
                    : "border-[#EFE2DB]"
                }`}
              >

                <span
                  className={`text-xs uppercase tracking-wider ${
                    plano.destaque
                      ? "text-white/50"
                      : "text-[#999]"
                  }`}
                >
                  A partir de
                </span>

                <motion.div
                  className="mt-1"
                  whileHover={{
                    scale: 1.05,
                    originX: 0,
                  }}
                >
                  <span className="text-sm">
                    R$
                  </span>{" "}

                  <span className="text-3xl font-bold">
                    {plano.price}
                  </span>
                </motion.div>

              </div>


              {/* ITENS */}

              <div className="flex-1">

                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    plano.destaque
                      ? "text-white/50"
                      : "text-[#999]"
                  }`}
                >
                  Inclui
                </span>

                <ul className="mt-5 space-y-3">

                  {plano.itens.map((item, index) => (

                    <motion.li
                      key={item}
                      className={`flex items-start gap-3 text-sm ${
                        plano.destaque
                          ? "text-white/85"
                          : "text-[#666]"
                      }`}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                      }}
                    >

                      <motion.span
                        className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF914C] text-[10px] font-bold text-white"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                        }}
                      >
                        ✓
                      </motion.span>

                      <span>
                        {item}
                      </span>

                    </motion.li>

                  ))}

                </ul>

              </div>


              {/* BOTÃO */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >

                <Link
                  href="/contato"
                  className={`mt-8 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                    plano.destaque
                      ? "bg-[#FF914C] text-white hover:bg-[#e87935]"
                      : "bg-[#292929] text-white hover:bg-[#FF914C]"
                  }`}
                >
                  Quero esse plano
                </Link>

              </motion.div>

            </motion.article>

          ))}

        </motion.div>
      </section>


      {/* =====================================================
          COMO FUNCIONA
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-6xl">

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Como funciona
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Do primeiro contato à publicação
            </h2>

          </motion.div>


          {/* ETAPAS */}

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              staggerChildren: 0.18,
            }}
          >

            {[
              {
                numero: "01",
                titulo: "Contato",
                texto:
                  "Você apresenta sua marca, produto ou projeto.",
              },
              {
                numero: "02",
                titulo: "Briefing",
                texto:
                  "Entendemos os objetivos e o formato da campanha.",
              },
              {
                numero: "03",
                titulo: "Criação",
                texto:
                  "O conteúdo é planejado e produzido.",
              },
              {
                numero: "04",
                titulo: "Publicação",
                texto:
                  "A campanha vai ao ar para o público.",
              },
            ].map((etapa) => (

              <motion.div
                key={etapa.numero}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                }}
                className="text-center"
              >

                <motion.div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0E7] text-sm font-bold text-[#FF914C]"
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                    backgroundColor: "#FF914C",
                    color: "#FFFFFF",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {etapa.numero}
                </motion.div>

                <h3 className="mt-5 text-lg font-bold">
                  {etapa.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777]">
                  {etapa.texto}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROJETO PERSONALIZADO
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#FF914C] px-6 py-12 text-center text-white sm:px-10"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* CÍRCULO DECORATIVO */}

          <motion.div
            className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* CONTEÚDO */}

          <div className="relative z-10">

            <motion.span
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              Projeto personalizado
            </motion.span>

            <motion.h2
              className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              Não encontrou exatamente o que procura?
            </motion.h2>

            <motion.p
              className="mx-auto mt-5 max-w-xl leading-7 text-white/90"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              Podemos montar uma proposta personalizada de acordo com os
              objetivos da sua marca e da sua campanha.
            </motion.p>

            <motion.div
              className="inline-block"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >

              <Link
                href="/contato"
                className="mt-8 inline-flex rounded-full bg-[#292929] px-7 py-3.5 font-semibold text-white transition hover:bg-black"
              >
                Solicitar proposta
              </Link>

            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}