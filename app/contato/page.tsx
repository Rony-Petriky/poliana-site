"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/types/animations";


const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  const whatsappLink =
    "https://wa.me/556598009777?text=Ol%C3%A1%20Poliana!%20Gostaria%20de%20falar%20sobre%20uma%20poss%C3%ADvel%20parceria.";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F5] text-[#292929]">
      {/* Hero */}
      <motion.section
        className="px-5 pb-12 pt-28 sm:px-8 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <motion.span
              variants={fadeUp}
              className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
            >
              Contato
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Vamos criar algo
              <br />
              <span className="text-[#FF914C]">juntos?</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg"
            >
              Quer apresentar sua marca, falar sobre uma campanha ou criar uma
              parceria? Preencha o formulário e conte um pouco sobre o seu
              projeto.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Conteúdo */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Informações */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[2rem] bg-[#292929] p-7 text-white sm:p-9"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]"
            >
              Fale comigo
            </motion.span>

            <h2 className="mt-4 text-3xl font-bold">
              Conte sobre sua ideia.
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              Quanto mais informações você compartilhar, melhor podemos
              entender o seu projeto e pensar em uma parceria que faça sentido
              para a sua marca.
            </p>

            <motion.div
              className="mt-10 space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {/* WhatsApp */}
              <motion.div variants={fadeUp}>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  WhatsApp
                </span>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-3 font-medium transition hover:text-[#FF914C]"
                >
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.92 11.92 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.46-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </motion.span>

                  <span>
                    <span className="block text-sm text-white/60">
                      Atendimento
                    </span>
                    <span>+55 65 9800-9777</span>
                  </span>
                </a>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  Conversar pelo WhatsApp
                </motion.a>
              </motion.div>

              {/* Instagram */}
              <motion.div variants={fadeUp}>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  Instagram
                </span>

                <a
                  href="https://www.instagram.com/polianamendesx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium transition hover:text-[#FF914C]"
                >
                  @polianamendesx
                </a>
              </motion.div>

              {/* Atendimento */}
              <motion.div variants={fadeUp}>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  Atendimento
                </span>

                <p className="mt-1 text-white/80">
                  Parcerias e campanhas
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 rounded-2xl bg-white/5 p-5"
            >
              <p className="text-sm leading-6 text-white/60">
                Após o envio, as informações serão analisadas para que
                possamos retornar sobre a possibilidade de parceria.
              </p>
            </motion.div>
          </motion.aside>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#EADDD5] bg-white p-6 sm:p-9"
          >
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex min-h-[600px] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0E7] text-2xl text-[#FF914C]"
                >
                  ✓
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-3xl font-bold"
                >
                  Obrigado pelo contato!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 max-w-md leading-7 text-[#666]"
                >
                  Sua mensagem foi registrada. Em breve entraremos em contato
                  para conversar sobre o seu projeto.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setEnviado(false)}
                  className="mt-8 rounded-full border border-[#292929] px-6 py-3 text-sm font-semibold transition hover:bg-[#292929] hover:text-white"
                >
                  Enviar outra mensagem
                </motion.button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold">
                    Fale sobre o seu projeto
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    Preencha os dados abaixo e conte um pouco sobre o que você
                    tem em mente.
                  </p>
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={stagger}
                >
                  {/* Nome */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="nome"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Seu nome *
                    </label>

                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Digite seu nome"
                      className="w-full rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    />
                  </motion.div>

                  {/* Empresa */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="empresa"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Empresa ou marca *
                    </label>

                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nome da empresa ou marca"
                      className="w-full rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    />
                  </motion.div>

                  {/* Email + WhatsApp */}
                  <motion.div
                    variants={fadeUp}
                    className="grid gap-6 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        E-mail *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="mb-2 block text-sm font-semibold"
                      >
                        WhatsApp *
                      </label>

                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                      />
                    </div>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="instagram"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Instagram da marca
                    </label>

                    <input
                      id="instagram"
                      name="instagram"
                      type="text"
                      placeholder="@suaempresa"
                      className="w-full rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    />
                  </motion.div>

                  {/* Tipo */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="tipo"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Tipo de parceria *
                    </label>

                    <select
                      id="tipo"
                      name="tipo"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option value="publicidade">Publicidade</option>
                      <option value="campanha">Campanha</option>
                      <option value="evento">Evento</option>
                      <option value="conteudo">Produção de conteúdo</option>
                      <option value="parceria">Parceria</option>
                      <option value="outro">Outro</option>
                    </select>
                  </motion.div>

                  {/* Plano */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="plano"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Plano de interesse
                    </label>

                    <select
                      id="plano"
                      name="plano"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    >
                      <option value="">Ainda não sei</option>
                      <option value="start">Start</option>
                      <option value="plus">Plus</option>
                      <option value="premium">Premium</option>
                      <option value="master">Master</option>
                      <option value="personalizado">
                        Quero uma proposta personalizada
                      </option>
                    </select>
                  </motion.div>

                  {/* Orçamento */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="orcamento"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Faixa de investimento
                    </label>

                    <select
                      id="orcamento"
                      name="orcamento"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    >
                      <option value="">
                        Prefiro conversar primeiro
                      </option>
                      <option value="ate-500">Até R$ 500</option>
                      <option value="500-1000">R$ 500 — R$ 1.000</option>
                      <option value="1000-2500">R$ 1.000 — R$ 2.500</option>
                      <option value="2500-5000">R$ 2.500 — R$ 5.000</option>
                      <option value="5000+">Acima de R$ 5.000</option>
                    </select>
                  </motion.div>

                  {/* Mensagem */}
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Conte sobre o projeto *
                    </label>

                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      placeholder="Conte um pouco sobre a sua marca, campanha, produto ou ideia..."
                      className="w-full resize-none rounded-xl border border-[#E5D8D0] bg-[#FFFDFC] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#AAA] focus:border-[#FF914C] focus:ring-2 focus:ring-[#FF914C]/10"
                    />
                  </motion.div>

                  {/* Consentimento */}
                  <motion.label
                    variants={fadeUp}
                    className="flex cursor-pointer items-start gap-3"
                  >
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#FF914C]"
                    />

                    <span className="text-xs leading-5 text-[#777]">
                      Autorizo o contato para tratar sobre a solicitação
                      enviada através deste formulário.
                    </span>
                  </motion.label>

                  {/* Botão */}
                  <motion.button
                    variants={fadeUp}
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="w-full rounded-full bg-[#FF914C] px-6 py-4 font-semibold text-white transition hover:bg-[#e87935]"
                  >
                    Enviar proposta
                  </motion.button>

                  <motion.p
                    variants={fadeUp}
                    className="text-center text-xs text-[#999]"
                  >
                    Seus dados serão utilizados apenas para contato sobre sua
                    solicitação.
                  </motion.p>
                </motion.form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Instagram + WhatsApp */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-white px-5 py-16 text-center sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
            Prefere falar diretamente?
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            Vamos conversar pelo WhatsApp
          </h2>

          <p className="mt-4 leading-7 text-[#666]">
            Se preferir, você também pode entrar em contato diretamente pelo
            WhatsApp.
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
          >
            Conversar pelo WhatsApp
          </motion.a>

          <motion.a
            href="https://www.instagram.com/polianamendesx/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="mt-4 block text-sm font-semibold text-[#292929] transition hover:text-[#FF914C]"
          >
            @polianamendesx
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}