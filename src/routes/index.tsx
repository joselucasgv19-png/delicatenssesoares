import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, canonicalUrl, img, delicias } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delicatensse Soares | Sabor, qualidade e bons momentos" },
      {
        name: "description",
        content:
          "Delicatensse Soares: pães artesanais, cafés especiais, tábuas, sanduíches e bolos caseiros num ambiente acolhedor. Reserve pelo WhatsApp.",
      },
      { property: "og:title", content: "Delicatensse Soares" },
      {
        property: "og:description",
        content:
          "Sabor, qualidade e aquele prazer de encontrar tudo o que você procura em um só lugar.",
      },
      { property: "og:image", content: `${SITE_URL}${img.pao.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.pao.url}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="animate-page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <img
          src={img.pao.url}
          alt="Pão artesanal fatiado sobre tábua de madeira"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, color-mix(in oklab, oklch(0.68 0.22 45) 45%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in oklab, black 55%, transparent), color-mix(in oklab, black 85%, transparent))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-secondary">
              <Sparkles className="h-3.5 w-3.5" /> Padaria • Café • Empório
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-background sm:text-6xl lg:text-7xl">
              Sabor, qualidade e{" "}
              <span className="heat-text">tudo o que você procura</span> em um só lugar.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
              Na Delicatensse Soares, cada detalhe foi pensado para tornar sua experiência mais
              agradável — desde a escolha dos produtos até o momento de levar para casa aquilo que
              você gosta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/reserva"
                className="animate-pulse-glow shine rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar pelo WhatsApp
              </Link>
              <Link
                to="/cardapio"
                className="rounded-full border border-background/40 px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-colors hover:bg-background hover:text-ink"
              >
                Ver cardápio
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 bottom-8 hidden lg:block">
          <img
            src={img.cafePaoQueijo.url}
            alt="Café coado e cesta de pães de queijo"
            className="animate-float-slow h-72 w-72 rounded-3xl object-cover shadow-2xl ring-4 ring-secondary/30"
            style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(6deg)" }}
          />
        </div>
      </section>

      {/* Destaques da casa */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Feito aqui</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Um gostinho do que sai do nosso forno
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Receitas que saem do forno o dia inteiro e viraram motivo para voltar.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {delicias.map((d, i) => (
            <Reveal key={d.nome} delay={i * 110}>
              <article className="card-3d h-full overflow-hidden rounded-3xl border border-border bg-card">
                <div className="photo-glow">
                  <img src={d.img} alt={d.nome} loading="lazy" className="h-56 w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-black">{d.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              to="/delicias"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-4 font-display text-sm font-black uppercase tracking-wide transition-colors hover:bg-ink hover:text-background"
            >
              Ver todas as delícias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:pb-28">
        <Reveal>
          <div
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 sm:p-14"
            style={{ background: "var(--gradient-heat)" }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
                  Seu próximo momento especial pode começar aqui
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/80">
                  Para aquele café especial, para compartilhar com a família, para receber visitas
                  ou simplesmente para se presentear com algo gostoso. De terça a sexta, das 14h às
                  17h, o combo café + doce da casa sai com <strong>20% off</strong>.
                </p>
                <Link
                  to="/reserva"
                  className="mt-8 inline-block rounded-full bg-ink px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-transform hover:scale-105"
                >
                  Garantir minha mesa
                </Link>
              </div>
              <div className="photo-glow overflow-hidden rounded-3xl">
                <img
                  src={img.boloPudim.url}
                  alt="Fatia de bolo pudim com doce de leite"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
