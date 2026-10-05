import Link from "next/link";

const planos = [
  {
    nome: "Start",
    descricao: "Para marcas que querem começar a criar presença e conexão nas redes.",
    destaque: false,
    itens: [
      "Stories 2 vezes por mês",
    ],
    price: 200
  },
  {
    nome: "Plus",
    descricao: "Uma parceria mais completa para aumentar a presença da sua marca.",
    destaque: false,
    itens: [
        "Stories 2 vezes por mês",
        "1 reels por trimestre"
    ],
    price: 250,
  },
  {
    nome: "Premium",
    descricao: "Para campanhas que precisam de mais presença e variedade de conteúdo.",
    destaque: true,
    itens: [
      "Stories 4 vezes por mês",
    ],
    price: 300,
  },
  {
    nome: "Master",
    descricao: "Uma parceria completa para marcas que querem construir uma campanha especial.",
    destaque: false,
    itens: [
        "Stories 2 vezes por mês",
        "1 reels por trimestre"
    ],
    price: 350,
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#292929]">
      {/* Hero */}
      <section className="px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Serviços
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Escolha a parceria
              <br />
              que combina com a sua <span className="text-[#FF914C]">marca.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#666] sm:text-lg">
              Existem diferentes formas de criar uma parceria. Escolha a
              categoria que mais combina com o seu projeto ou entre em contato
              para criarmos algo personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {planos.map((plano) => (
            <article
              key={plano.nome}
              className={`relative flex flex-col rounded-[2rem] p-7 ${
                plano.destaque
                  ? "bg-[#292929] text-white shadow-2xl lg:-translate-y-3"
                  : "border border-[#EADDD5] bg-white"
              }`}
            >
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF914C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Mais escolhido
                </div>
              )}

              <div>
                <span
                  className={`text-sm font-semibold uppercase tracking-[0.15em] ${
                    plano.destaque
                      ? "text-[#FF914C]"
                      : "text-[#FF914C]"
                  }`}
                >
                  Plano
                </span>

                <h2 className="mt-2 text-3xl font-bold">{plano.nome}</h2>

                <p
                  className={`mt-4 min-h-[80px] text-sm leading-6 ${
                    plano.destaque ? "text-white/70" : "text-[#777]"
                  }`}
                >
                  {plano.descricao}
                </p>
              </div>

              {/* Preço */}
              <div
                className={`my-7 border-y py-6 ${
                  plano.destaque
                    ? "border-white/10"
                    : "border-[#EFE2DB]"
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider ${
                    plano.destaque ? "text-white/50" : "text-[#999]"
                  }`}
                >
                  A partir de
                </span>

                <div className="mt-1">
                  <span className="text-sm">R$</span>{" "}
                  <span className="text-3xl font-bold">{plano.price}</span>
                </div>
              </div>

              {/* Itens */}
              <div className="flex-1">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    plano.destaque ? "text-white/50" : "text-[#999]"
                  }`}
                >
                  Inclui
                </span>

                <ul className="mt-5 space-y-3">
                  {plano.itens.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm ${
                        plano.destaque
                          ? "text-white/85"
                          : "text-[#666]"
                      }`}
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF914C] text-[10px] font-bold text-white">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
            </article>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Como funciona
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Do primeiro contato à publicação
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                numero: "01",
                titulo: "Contato",
                texto: "Você apresenta sua marca, produto ou projeto.",
              },
              {
                numero: "02",
                titulo: "Briefing",
                texto: "Entendemos os objetivos e o formato da campanha.",
              },
              {
                numero: "03",
                titulo: "Criação",
                texto: "O conteúdo é planejado e produzido.",
              },
              {
                numero: "04",
                titulo: "Publicação",
                texto: "A campanha vai ao ar para o público.",
              },
            ].map((etapa) => (
              <div key={etapa.numero} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0E7] text-sm font-bold text-[#FF914C]">
                  {etapa.numero}
                </div>

                <h3 className="mt-5 text-lg font-bold">{etapa.titulo}</h3>

                <p className="mt-2 text-sm leading-6 text-[#777]">
                  {etapa.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalizado */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#FF914C] px-6 py-12 text-center text-white sm:px-10">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Projeto personalizado
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Não encontrou exatamente o que procura?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/90">
            Podemos montar uma proposta personalizada de acordo com os
            objetivos da sua marca e da sua campanha.
          </p>

          <Link
            href="/contato"
            className="mt-8 inline-flex rounded-full bg-[#292929] px-7 py-3.5 font-semibold text-white transition hover:bg-black"
          >
            Solicitar proposta
          </Link>
        </div>
      </section>
    </main>
  );
}
