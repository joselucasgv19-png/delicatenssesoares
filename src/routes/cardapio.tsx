import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, img, cardapio } from "@/lib/site";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Cardápio da Delicatensse Soares: padaria artesanal, cafeteria especial e empório com doces e tábuas. Do café da manhã ao presente de última hora.",
      },
      { property: "og:title", content: "Cardápio | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Do café da manhã ao presente de última hora: padaria, cafeteria e empório.",
      },
      { property: "og:image", content: `${SITE_URL}${img.tabua.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.tabua.url}` },
    ],
  }),
  component: Cardapio,
});

function Cardapio() {
  return (
    <div className="animate-page-enter">
      <section className="relative overflow-hidden bg-ink py-20 text-background sm:py-28">
        <img
          src={img.salaoB.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary">
              Cardápio resumido
            </p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-5xl">
              Do café da manhã ao presente de última hora
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cardapio.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 110}>
                <div className="card-3d h-full rounded-3xl border border-background/15 bg-background/10 p-6 backdrop-blur-md">
                  <c.icone className="h-7 w-7 text-secondary" />
                  <h3 className="mt-4 font-display text-xl font-black">{c.titulo}</h3>
                  <ul className="mt-5 space-y-3.5">
                    {c.itens.map(([nome, preco]) => (
                      <li
                        key={nome}
                        className="flex items-baseline justify-between gap-3 border-b border-background/10 pb-3 text-sm"
                      >
                        <span className="min-w-0 text-background/85">{nome}</span>
                        <span className="shrink-0 font-display font-black text-secondary">
                          {preco}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/reserva"
                className="shine inline-block rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar uma mesa
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
