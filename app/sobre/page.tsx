import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#292929]">
      {/* Hero */}
      <section className="px-5 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* Imagem */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-[#FF914C]" />

<div className="relative mx-auto h-[500px] w-full max-w-[500px] sm:h-[580px]">
  {/* Foto principal */}
  <div className="absolute left-0 top-0 h-[390px] w-[72%] overflow-hidden rounded-[2rem] shadow-xl sm:h-[460px]">
    <img
      src="/images/poliana-1.jpg"
      alt="Poliana"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Foto menor - direita */}
  <div className="absolute right-0 top-10 h-[190px] w-[38%] overflow-hidden rounded-[1.5rem] border-8 border-[#FFF9F5] shadow-lg sm:h-[230px]">
    <img
      src="/images/poliana-2.jpg"
      alt="Poliana"
      className="h-full w-full object-cover"
    />
  </div>

                {/* Foto menor - inferior */}
                <div className="absolute bottom-0 right-[8%] h-[190px] w-[42%] overflow-hidden rounded-[1.5rem] border-8 border-[#FFF9F5] shadow-lg sm:h-[220px]">
                    <img
                    src="/images/poliana-3.jpg"
                    alt="Poliana"
                    className="h-full w-full object-cover"
                    />
                </div>

                {/* Detalhe decorativo */}
                <div className="absolute bottom-5 left-3 h-16 w-16 rounded-full bg-[#FF914C] sm:h-20 sm:w-20" />
                </div>
          </div>

          {/* Texto */}
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Sobre mim
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Muito prazer,
              <br />
              eu sou a <span className="text-[#FF914C]">Poliana.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F5F5F]">
              Mais do que criar conteúdo, eu gosto de transformar momentos,
              experiências e histórias em algo que possa gerar conexão com
              outras pessoas.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-[#6B6B6B]">
              Aqui você pode conhecer um pouco mais sobre quem eu sou, o meu
              trabalho e tudo aquilo que faz parte da minha jornada como
              influenciadora.
            </p>
          </div>
        </div>
      </section>

      {/* Quem sou */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
                Quem sou
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Uma história construída com autenticidade
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#666]">
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
            </div>
          </div>
        </div>
      </section>

      {/* O que faço */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
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
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              <div
                key={item.number}
                className="rounded-3xl border border-[#F1E3DB] bg-white p-6"
              >
                <span className="text-sm font-bold text-[#FF914C]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#777]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conexão */}
      <section className="bg-[#FF914C] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
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
        </div>
      </section>

      {/* Destaques */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-3xl bg-[#FFF9F5] p-6 text-center">
              <strong className="block text-3xl font-bold text-[#FF914C]">
                +5K
              </strong>
              <span className="mt-2 block text-sm text-[#777]">
                Seguidores
              </span>
            </div>

            <div className="rounded-3xl bg-[#FFF9F5] p-6 text-center">
              <strong className="block text-3xl font-bold text-[#FF914C]">
                +50
              </strong>
              <span className="mt-2 block text-sm text-[#777]">
                Trabalhos
              </span>
            </div>

            <div className="rounded-3xl bg-[#FFF9F5] p-6 text-center">
              <strong className="block text-3xl font-bold text-[#FF914C]">
                +15
              </strong>
              <span className="mt-2 block text-sm text-[#777]">
                Empresas
              </span>
            </div>

            <div className="rounded-3xl bg-[#FFF9F5] p-6 text-center">
              <strong className="block text-3xl font-bold text-[#FF914C]">
                3
              </strong>
              <span className="mt-2 block text-sm text-[#777]">
                Anos de atuação
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#292929] px-6 py-12 text-center text-white sm:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Quer trabalhar comigo?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Vamos conversar sobre sua marca, seu projeto ou sua próxima
            campanha.
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