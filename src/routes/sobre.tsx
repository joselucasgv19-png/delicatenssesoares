import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, img, motivos, depoimentos } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Conheça a história da Delicatensse Soares: um espaço para quem valoriza qualidade, praticidade e bons sabores, com atendimento próximo e acolhedor.",
      },
      { property: "og:title", content: "Sobre nós | Delicatensse Soares" },
      {
        property: "og:description",
        content:
          "Um espaço para quem valoriza qualidade, praticidade e bons sabores.",
      },
      { property: "og:image", content: `${SITE_URL}${img.salaoA.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.salaoA.url}` },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="animate-page-enter">
      {/* Nossa história */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="photo-glow card-3d overflow-hidden rounded-3xl">
              <img
                src={img.salaoA.url}
                alt="Salão da Delicatensse Soares com iluminação quente"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Nossa história
            </p>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">
              Um espaço para quem valoriza qualidade, praticidade e bons sabores
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Seja para o dia a dia, para aquele momento especial ou simplesmente para se permitir
              uma pausa e aproveitar algo que realmente vale a pena. Aqui, encontrar o que você
              procura fica mais fácil, com uma experiência acolhedora e um atendimento próximo,
              pensado para receber cada cliente com atenção.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Uma boa delicatessen não é apenas sobre o que está na prateleira. É sobre a sensação
              de encontrar algo que desperta vontade, a praticidade de resolver tudo em um só lugar
              e a satisfação de voltar porque a experiência vale a pena.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {motivos.map((m) => (
                <div key={m.titulo} className="card-3d rounded-2xl border border-border bg-card p-5">
                  <m.icone className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-display text-base font-black">{m.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ambiente */}
      <section className="relative overflow-hidden bg-ink py-20 text-background sm:py-28">
        <img
          src={img.salaoB.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary">
                O ambiente
              </p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
                Uma experiência que começa antes da primeira mordida
              </h2>
              <p className="mt-5 leading-relaxed text-background/80">
                Iluminação quente, mesas acolhedoras e um balcão que convida a ficar. A
                Delicatensse Soares busca oferecer um lugar onde qualidade, sabor e atendimento
                caminham juntos.
              </p>
              <Link
                to="/localizacao"
                className="shine mt-8 inline-block rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Venha nos visitar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Quem já sentou à mesa
          </p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            Depoimentos de clientes
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome} delay={i * 110}>
              <figure className="card-3d h-full rounded-3xl border border-border bg-card p-7">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-4 leading-relaxed text-muted-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-2">
                  <span className="font-display font-black">{d.nome}</span>
                  <span className="flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
