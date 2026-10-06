"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp, fadeUpScale, fadeLeft, fadeRight, cardAnimation } from "@/types/animations";



export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FFF9F5] pt-28">

        {/* CÍRCULO GRANDE DE FUNDO */}

        <motion.div
          className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#FF914C]/5"
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

        {/* CÍRCULO DIREITO */}

        <motion.div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FF914C]/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-20">

          {/* =====================================================
              TEXTO
          ===================================================== */}

          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
          >

            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              Influenciadora digital
            </motion.p>

            <motion.h1
              className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-[#292929] sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              Oi, eu sou

              <motion.span
                className="block text-[#FF914C]"
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                }}
              >
                Poliana.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-lg leading-8 text-gray-600"
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
                delay: 0.7,
              }}
            >
              Criadora de conteúdo, apresentadora e influenciadora.
              Aqui você conhece um pouco do meu trabalho e encontra
              tudo para fazer uma parceria comigo.
            </motion.p>

            {/* BOTÕES */}

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
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
                delay: 0.9,
              }}
            >

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/contato"
                  className="block rounded-full bg-[#FF914C] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#FF914C]/20 transition-colors hover:bg-[#F47F36]"
                >
                  Quero contratar
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/trabalhos"
                  className="block rounded-full border border-[#FF914C] px-7 py-4 text-center font-semibold text-[#FF914C] transition-colors hover:bg-[#FF914C] hover:text-white"
                >
                  Ver meu trabalho
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>


          {/* =====================================================
              FOTO
          ===================================================== */}

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >

            <div className="relative">

              {/* HALO ATRÁS DA FOTO */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-[430px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[12rem] bg-[#FF914C]/10 blur-2xl sm:h-[530px] sm:w-[400px]"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CÍRCULO SUPERIOR */}

              <motion.div
                className="absolute -right-5 -top-5 z-0 h-24 w-24 rounded-full bg-[#FF914C]/20"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CÍRCULO INFERIOR */}

              <motion.div
                className="absolute -bottom-5 -left-5 z-0 h-20 w-20 rounded-full bg-[#FF914C]/15"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -5, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* PEQUENO PONTO DECORATIVO */}

              <motion.div
                className="absolute -right-10 top-1/2 z-20 h-5 w-5 rounded-full bg-[#FF914C]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* =================================================
                  MÁSCARA DA FOTO
              ================================================= */}

              <motion.div
                className="relative z-10 h-[420px] w-[300px] overflow-hidden rounded-[10rem] rounded-b-[3rem] bg-[#FF914C] shadow-2xl sm:h-[520px] sm:w-[370px]"
                initial={{
                  clipPath: "inset(100% 0% 0% 0% round 160px)",
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  clipPath: "inset(0% 0% 0% 0% round 160px)",
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.025,
                }}
              >

                {/* FOTO */}

                <motion.img
                  src="/images/poliana-home.jpg"
                  alt="Poliana"
                  className="h-full w-full object-cover"
                  initial={{
                    scale: 1.15,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                />

                {/* BRILHO PASSANDO NA FOTO */}

                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/20 blur-md"
                  animate={{
                    left: ["-50%", "130%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.8,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SOBRE
      ===================================================== */}

      <motion.section
        className="bg-white px-5 py-20 md:px-8 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={fadeUp}
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
              variants={fadeUp}
            >
              Sobre mim
            </motion.p>

            <motion.h2
              className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
              variants={fadeUp}
            >
              Muito mais que uma
              <span className="text-[#FF914C]"> divulgação.</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              variants={fadeUp}
            >
              Meu trabalho é criar conteúdos que aproximam marcas,
              produtos e pessoas. Cada parceria é pensada para
              conversar de forma natural com quem me acompanha.
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{
                x: 8,
              }}
            >
              <Link
                href="/sobre"
                className="mt-8 inline-flex font-semibold text-[#FF914C] hover:underline"
              >
                Conheça mais sobre mim →
              </Link>
            </motion.div>

          </div>

        </div>

      </motion.section>


      {/* =====================================================
          SERVIÇOS
      ===================================================== */}

      <section className="bg-[#FFF1E8] px-5 py-20 md:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Serviços
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Vamos trabalhar juntos?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Algumas das formas em que posso ajudar sua marca
              a chegar até o meu público.
            </p>

          </motion.div>


          {/* CARDS */}

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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

            {/* STORIES */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.025,
              }}
              className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#FF914C]/10"
            >

              <h3 className="text-xl font-bold">
                Stories
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Divulgação através dos stories para apresentar
                produtos, serviços e marcas.
              </p>

              <motion.p
                className="mt-6 text-2xl font-bold text-[#FF914C]"
                whileHover={{
                  scale: 1.05,
                  originX: 0,
                }}
              >
                R$ 100,00
              </motion.p>

            </motion.div>


            {/* REELS */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.025,
              }}
              className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#FF914C]/10"
            >

              <h3 className="text-xl font-bold">
                Reels
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Conteúdo em vídeo para apresentar sua marca
                de maneira criativa.
              </p>

              <motion.p
                className="mt-6 text-2xl font-bold text-[#FF914C]"
                whileHover={{
                  scale: 1.05,
                  originX: 0,
                }}
              >
                R$ 100 a R$ 200
              </motion.p>

            </motion.div>


            {/* LIVE */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.025,
              }}
              className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#FF914C]/10 sm:col-span-2 lg:col-span-1"
            >

              <h3 className="text-xl font-bold">
                Apresentação de Live
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Apresentação de lives com duração de até 3 horas.
              </p>

              <motion.p
                className="mt-6 text-2xl font-bold text-[#FF914C]"
                whileHover={{
                  scale: 1.05,
                  originX: 0,
                }}
              >
                R$ 170,00
              </motion.p>

            </motion.div>

          </motion.div>


          {/* BOTÃO */}

          <motion.div
            className="mt-10 text-center"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <motion.div
              className="inline-block"
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >

              <Link
                href="/servicos"
                className="inline-flex rounded-full bg-[#FF914C] px-7 py-4 font-semibold text-white shadow-lg shadow-[#FF914C]/20 transition-colors hover:bg-[#F47F36]"
              >
                Ver todos os serviços e pacotes
              </Link>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FF914C] px-5 py-20 text-white md:px-8 lg:py-28">

        {/* CÍRCULO ESQUERDO */}

        <motion.div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CÍRCULO DIREITO */}

        <motion.div
          className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
        >

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tem uma marca e quer trabalhar comigo?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Entre em contato e vamos conversar sobre sua ideia,
            campanha ou parceria.
          </p>

          <motion.div
            className="inline-block"
            whileHover={{
              scale: 1.07,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >

            <Link
              href="/contato"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#FF914C] shadow-xl transition-colors hover:bg-[#FFF1E8]"
            >
              Entrar em contato
            </Link>

          </motion.div>

        </motion.div>

      </section>

    </main>
  );
}