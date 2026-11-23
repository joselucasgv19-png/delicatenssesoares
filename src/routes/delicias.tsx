import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, canonicalUrl, img, delicias, maisPedidos } from "@/lib/site";

export const Route = createFileRoute("/delicias")({
  head: () => ({
    meta: [
      { title: "Delícias da Casa | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Pães artesanais, tábua da casa, bolo pudim e os queridinhos do balcão. Conheça as delícias e os mais pedidos da Delicatensse Soares.",
      },
      { property: "og:title", content: "Delícias da Casa | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Receitas que saem do forno o dia inteiro e viraram motivo para voltar.",
      },
      { property: "og:image", content: `${SITE_URL}${img.boloPudim.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.boloPudim.url}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/delicias") }],
  }),
  component: Delicias,
});

function Delicias() {
  return (
    <div className="animate-page-enter">
      {/* Delícias da Casa */}
      <section className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Feito aqui</p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-5xl">Delícias da Casa</h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Receitas que saem do forno o dia inteiro e viraram motivo para voltar.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {delicias.map((d, i) => (
              <Reveal key={d.nome} delay={i * 110}>
                <article className="card-3d h-full overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="photo-glow">
                    <img src={d.img} alt={d.nome} className="h-56 w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-black">{d.nome}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mais Pedidos */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Queridinhos do balcão
          </p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Mais Pedidos</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {maisPedidos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 90}>
              <article className="card-3d h-full overflow-hidden rounded-3xl border border-border bg-card">
                <div className="photo-glow relative">
                  <img src={p.img} alt={p.nome} loading="lazy" className="h-44 w-full object-cover" />
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide text-ink"
                    style={{ background: "var(--gradient-heat)" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-black">{p.nome}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  <p className="mt-4 font-display text-xl font-black text-accent">{p.preco}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              to="/cardapio"
              className="inline-block rounded-full border border-ink px-7 py-4 font-display text-sm font-black uppercase tracking-wide transition-colors hover:bg-ink hover:text-background"
            >
              Ver cardápio completo
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
