"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp, fadeLeft, fadeRight, cardAnimation } from "@/types/animations";



export default function SobrePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F5] text-[#292929]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:px-12">

        {/* Decoração de fundo */}

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
          className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FF914C]/5"
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* =================================================
              IMAGENS
          ================================================= */}

          <motion.div
            className="relative order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
          >

            {/* Fundo laranja */}

            <motion.div
              className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-[#FF914C]"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            />

            <div className="relative mx-auto h-[500px] w-full max-w-[500px] sm:h-[580px]">

              {/* =================================================
                  FOTO PRINCIPAL
              ================================================= */}

              <motion.div
                className="absolute left-0 top-0 h-[390px] w-[72%] overflow-hidden rounded-[2rem] shadow-xl sm:h-[460px]"
                initial={{
                  opacity: 0,
                  x: -50,
                  scale: 0.92,
                  clipPath: "inset(100% 0% 0% 0% round 32px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0% round 32px)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.025,
                }}
              >

                <motion.img
                  src="/images/poliana-1.jpg"
                  alt="Poliana"
                  className="h-full w-full object-cover"
                  initial={{
                    scale: 1.12,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.3,
                    delay: 0.35,
                    ease: "easeOut",
                  }}
                />

                {/* brilho */}

                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/20 blur-md"
                  animate={{
                    left: ["-50%", "130%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.7,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>


              {/* =================================================
                  FOTO MENOR DIREITA
              ================================================= */}

              <motion.div
                className="absolute right-0 top-10 h-[190px] w-[38%] overflow-hidden rounded-[1.5rem] border-8 border-[#FFF9F5] shadow-lg sm:h-[230px]"
                initial={{
                  opacity: 0,
                  x: 50,
                  y: -20,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  rotate: 2,
                  scale: 1.04,
                }}
              >

                <img
                  src="/images/poliana-2.jpg"
                  alt="Poliana"
                  className="h-full w-full object-cover"
                />

              </motion.div>


              {/* =================================================
                  FOTO MENOR INFERIOR
              ================================================= */}

              <motion.div
                className="absolute bottom-0 right-[8%] h-[190px] w-[42%] overflow-hidden rounded-[1.5rem] border-8 border-[#FFF9F5] shadow-lg sm:h-[220px]"
                initial={{
                  opacity: 0,
                  x: 40,
                  y: 40,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.85,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  rotate: -2,
                  scale: 1.04,
                }}
              >

                <img
                  src="/images/poliana-3.jpg"
                  alt="Poliana"
                  className="h-full w-full object-cover"
                />

              </motion.div>


              {/* =================================================
                  DETALHE DECORATIVO
              ================================================= */}

              <motion.div
                className="absolute bottom-5 left-3 h-16 w-16 rounded-full bg-[#FF914C] sm:h-20 sm:w-20"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </div>
          </motion.div>


          {/* =================================================
              TEXTO HERO
          ================================================= */}

          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >

            <motion.span
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
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
              Sobre mim
            </motion.span>

            <motion.h1
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
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
              Muito prazer,
              <br />
              eu sou a{" "}
              <span className="text-[#FF914C]">
                Poliana.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-8 text-[#5F5F5F]"
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
                delay: 0.35,
              }}
            >
              Mais do que criar conteúdo, eu gosto de transformar momentos,
              experiências e histórias em algo que possa gerar conexão com
              outras pessoas.
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl leading-7 text-[#6B6B6B]"
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
                delay: 0.5,
              }}
            >
              Aqui você pode conhecer um pouco mais sobre quem eu sou, o meu
              trabalho e tudo aquilo que faz parte da minha jornada como
              influenciadora.
            </motion.p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          QUEM SOU
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeLeft}
            >

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
                Quem sou
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Uma história construída com autenticidade
              </h2>

            </motion.div>


            <motion.div
              className="space-y-5 text-base leading-8 text-[#666]"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={fadeRight}
            >

              <p>
                Ser influenciadora vai muito além de publicar uma foto ou um
                vídeo. É criar uma relação verdadeira com as pessoas que
                acompanham o meu trabalho.
              </p>

              <p>
                Ao longo da minha trajetória, fui encontrando na criação de
                conteúdo uma forma de compartilhar experiências, descobrir
                coisas novas e, principalmente, conversar com o meu público de
                uma maneira leve e verdadeira.
              </p>

              <p>
                Cada trabalho é uma oportunidade de contar uma história e
                apresentar uma marca, produto ou experiência de uma forma que
                faça sentido para quem está do outro lado da tela.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          O QUE FAÇO
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Meu trabalho
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Conteúdo que aproxima marcas e pessoas
            </h2>

            <p className="mt-4 leading-7 text-[#666]">
              Trabalho com diferentes formatos de conteúdo para ajudar marcas
              a apresentarem seus produtos e serviços de maneira natural,
              criativa e próxima do público.
            </p>

          </motion.div>


          {/* CARDS */}

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              staggerChildren: 0.15,
            }}
          >

            {[
              {
                number: "01",
                title: "Conteúdo",
                text: "Produção de fotos e vídeos para redes sociais.",
              },
              {
                number: "02",
                title: "Publicidade",
                text: "Divulgação de marcas, produtos e serviços.",
              },
              {
                number: "03",
                title: "Story Maker",
                text: "Cobertura de eventos, lugares e experiências.",
              },
              {
                number: "04",
                title: "Parcerias",
                text: "Projetos desenvolvidos em conjunto com marcas.",
              },
            ].map((item) => (

              <motion.div
                key={item.number}
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                }}
                className="rounded-3xl border border-[#F1E3DB] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#FF914C]/10"
              >

                <motion.span
                  className="text-sm font-bold text-[#FF914C]"
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  {item.number}
                </motion.span>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777]">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CONEXÃO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FF914C] px-5 py-16 text-white sm:px-8 lg:px-12">

        {/* decoração */}

        <motion.div
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
        >

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Conexão
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            Acredito que as melhores histórias são aquelas que parecem uma
            conversa.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/90">
            Por isso, busco manter uma comunicação próxima, espontânea e
            verdadeira com quem acompanha o meu conteúdo.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          DESTAQUES
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              staggerChildren: 0.15,
            }}
          >

            {[
              {
                numero: "+5K",
                texto: "Seguidores",
              },
              {
                numero: "+50",
                texto: "Trabalhos",
              },
              {
                numero: "+15",
                texto: "Empresas",
              },
              {
                numero: "3",
                texto: "Anos de atuação",
              },
            ].map((item) => (

              <motion.div
                key={item.texto}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-[#FFF9F5] p-6 text-center"
              >

                <motion.strong
                  className="block text-3xl font-bold text-[#FF914C]"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {item.numero}
                </motion.strong>

                <span className="mt-2 block text-sm text-[#777]">
                  {item.texto}
                </span>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 lg:px-12">

        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#292929] px-6 py-12 text-center text-white sm:px-10"
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

          {/* decoração */}

          <motion.div
            className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#FF914C]/10"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-[#FF914C]/10"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">

            <motion.h2
              className="text-3xl font-bold sm:text-4xl"
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
            >
              Quer trabalhar comigo?
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-xl leading-7 text-white/70"
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
              Vamos conversar sobre sua marca, seu projeto ou sua próxima
              campanha.
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
                delay: 0.2,
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
                className="mt-8 inline-flex rounded-full bg-[#FF914C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e87935]"
              >
                Entrar em contato
              </Link>

            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}