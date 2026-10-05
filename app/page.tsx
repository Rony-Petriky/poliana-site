import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FFF9F5] pt-28">

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-20">

          {/* Texto */}
          <div className="order-2 lg:order-1">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Influenciadora digital
            </p>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-[#292929] sm:text-6xl lg:text-7xl">
              Oi, eu sou
              <span className="block text-[#FF914C]">
                Poliana.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Criadora de conteúdo, apresentadora e influenciadora.
              Aqui você conhece um pouco do meu trabalho e encontra
              tudo para fazer uma parceria comigo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contato"
                className="rounded-full bg-[#FF914C] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#F47F36]"
              >
                Quero contratar
              </Link>

              <Link
                href="/trabalhos"
                className="rounded-full border border-[#FF914C] px-7 py-4 text-center font-semibold text-[#FF914C] transition hover:bg-[#FF914C] hover:text-white"
              >
                Ver meu trabalho
              </Link>

            </div>

          </div>

          {/* Foto */}
          <div className="order-1 flex justify-center lg:order-2">

            <div className="relative">

              {/* decoração */}
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#FF914C]/20" />

              <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-[#FF914C]/15" />

              {/* placeholder da foto */}
              <div className="relative flex h-[420px] w-[300px] items-center justify-center overflow-hidden rounded-[10rem] rounded-b-[3rem] bg-[#FF914C] shadow-2xl sm:h-[520px] sm:w-[370px]">

                <span className="px-8 text-center text-lg font-medium text-white">
                    <img
                    src="/images/poliana-home.jpg"
                    alt="Poliana"
                    className="h-full w-full object-cover"
                    />
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SOBRE */}
      <section className="bg-white px-5 py-20 md:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF914C]">
              Sobre mim
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Muito mais que uma
              <span className="text-[#FF914C]"> divulgação.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meu trabalho é criar conteúdos que aproximam marcas,
              produtos e pessoas. Cada parceria é pensada para
              conversar de forma natural com quem me acompanha.
            </p>

            <Link
              href="/sobre"
              className="mt-8 inline-flex font-semibold text-[#FF914C] hover:underline"
            >
              Conheça mais sobre mim →
            </Link>

          </div>

        </div>

      </section>


      {/* SERVIÇOS */}
      <section className="bg-[#FFF1E8] px-5 py-20 md:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

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

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Stories</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Divulgação através dos stories para apresentar
                produtos, serviços e marcas.
              </p>

              <p className="mt-6 text-2xl font-bold text-[#FF914C]">
                R$ 100,00
              </p>
            </div>


            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Reels</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Conteúdo em vídeo para apresentar sua marca
                de maneira criativa.
              </p>

              <p className="mt-6 text-2xl font-bold text-[#FF914C]">
                R$ 100 a R$ 200
              </p>
            </div>


            <div className="rounded-3xl bg-white p-7 shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold">Apresentação de Live</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Apresentação de lives com duração de até 3 horas.
              </p>

              <p className="mt-6 text-2xl font-bold text-[#FF914C]">
                R$ 170,00
              </p>
            </div>

          </div>


          <div className="mt-10 text-center">

            <Link
              href="/servicos"
              className="inline-flex rounded-full bg-[#FF914C] px-7 py-4 font-semibold text-white transition hover:bg-[#F47F36]"
            >
              Ver todos os serviços e pacotes
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#FF914C] px-5 py-20 text-white md:px-8 lg:py-28">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tem uma marca e quer trabalhar comigo?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Entre em contato e vamos conversar sobre sua ideia,
            campanha ou parceria.
          </p>

          <Link
            href="/contato"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#FF914C] transition hover:bg-[#FFF1E8]"
          >
            Entrar em contato
          </Link>

        </div>

      </section>

    </main>
  );
}