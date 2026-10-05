"use client";

import { FormEvent, useState } from "react";

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  const whatsappLink =
    "https://wa.me/556598009777?text=Ol%C3%A1%20Poliana!%20Gostaria%20de%20falar%20sobre%20uma%20poss%C3%ADvel%20parceria.";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Depois vamos conectar este formulário ao backend,
    // e-mail, WhatsApp ou CRM.
    setEnviado(true);
  }

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#292929]">
      {/* Hero */}
      <section className="px-5 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Contato
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Vamos criar algo
              <br />
              <span className="text-[#FF914C]">juntos?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg">
              Quer apresentar sua marca, falar sobre uma campanha ou criar uma
              parceria? Preencha o formulário e conte um pouco sobre o seu
              projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Informações */}
          <aside className="rounded-[2rem] bg-[#292929] p-7 text-white sm:p-9">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Fale comigo
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Conte sobre sua ideia.
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              Quanto mais informações você compartilhar, melhor podemos
              entender o seu projeto e pensar em uma parceria que faça sentido
              para a sua marca.
            </p>

            <div className="mt-10 space-y-7">
              {/* WhatsApp */}
              <div>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  WhatsApp
                </span>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-3 font-medium transition hover:text-[#FF914C]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.92 11.92 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.46-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-sm text-white/60">
                      Atendimento
                    </span>
                    <span>+55 65 9800-9777</span>
                  </span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  Conversar pelo WhatsApp
                </a>
              </div>

              {/* Instagram */}
              <div>
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
              </div>

              {/* Atendimento */}
              <div>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  Atendimento
                </span>

                <p className="mt-1 text-white/80">
                  Parcerias e campanhas
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white/5 p-5">
              <p className="text-sm leading-6 text-white/60">
                Após o envio, as informações serão analisadas para que
                possamos retornar sobre a possibilidade de parceria.
              </p>
            </div>
          </aside>

          {/* Formulário */}
          <div className="rounded-[2rem] border border-[#EADDD5] bg-white p-6 sm:p-9">
            {enviado ? (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0E7] text-2xl text-[#FF914C]">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Obrigado pelo contato!
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#666]">
                  Sua mensagem foi registrada. Em breve entraremos em contato
                  para conversar sobre o seu projeto.
                </p>

                <button
                  onClick={() => setEnviado(false)}
                  className="mt-8 rounded-full border border-[#292929] px-6 py-3 text-sm font-semibold transition hover:bg-[#292929] hover:text-white"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    Fale sobre o seu projeto
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    Preencha os dados abaixo e conte um pouco sobre o que você
                    tem em mente.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
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
                  </div>

                  {/* Empresa */}
                  <div>
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
                  </div>

                  {/* Email + WhatsApp */}
                  <div className="grid gap-6 sm:grid-cols-2">
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
                  </div>

                  {/* Instagram */}
                  <div>
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
                  </div>

                  {/* Tipo de parceria */}
                  <div>
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
                  </div>

                  {/* Plano */}
                  <div>
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
                      <option value="">
                        Ainda não sei
                      </option>
                      <option value="start">Start</option>
                      <option value="plus">Plus</option>
                      <option value="premium">Premium</option>
                      <option value="master">Master</option>
                      <option value="personalizado">
                        Quero uma proposta personalizada
                      </option>
                    </select>
                  </div>

                  {/* Orçamento */}
                  <div>
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
                  </div>

                  {/* Mensagem */}
                  <div>
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
                  </div>

                  {/* Consentimento */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#FF914C]"
                    />

                    <span className="text-xs leading-5 text-[#777]">
                      Autorizo o contato para tratar sobre a solicitação
                      enviada através deste formulário.
                    </span>
                  </label>

                  {/* Botão */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#FF914C] px-6 py-4 font-semibold text-white transition hover:bg-[#e87935]"
                  >
                    Enviar proposta
                  </button>

                  <p className="text-center text-xs text-[#999]">
                    Seus dados serão utilizados apenas para contato sobre sua
                    solicitação.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Instagram + WhatsApp */}
      <section className="bg-white px-5 py-16 text-center sm:px-8 lg:px-12">
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
          >
            Conversar pelo WhatsApp
          </a>

          <a
            href="https://www.instagram.com/polianamendesx/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-sm font-semibold text-[#292929] transition hover:text-[#FF914C]"
          >
            @polianamendesx
          </a>
        </div>
      </section>
    </main>
  );
}