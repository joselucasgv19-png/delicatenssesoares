import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, canonicalUrl, img, depoimentos } from "@/lib/site";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos de Clientes | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Leia os depoimentos de clientes da Delicatensse Soares sobre o atendimento, o ambiente acolhedor, os pães artesanais e as delícias da casa.",
      },
      { property: "og:title", content: "Depoimentos de Clientes | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Experiências de quem já sentou à mesa da Delicatensse Soares.",
      },
      { property: "og:image", content: `${SITE_URL}${img.salaoB.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.salaoB.url}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/depoimentos") }],
  }),
  component: Depoimentos,
});

function Depoimentos() {
  return (
    <div className="animate-page-enter">
      <section className="relative overflow-hidden bg-ink py-20 text-background sm:py-28">
        <img
          src={img.salaoB.url}
          alt="Salão aconchegante da Delicatensse Soares com iluminação quente"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary">
              Quem já sentou à mesa
            </p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-5xl">
              Depoimentos de clientes
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-background/80">
              Experiências compartilhadas por quem escolheu a Delicatensse Soares para momentos
              especiais e para o dia a dia.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Reveal key={d.nome} delay={i * 110}>
                <figure className="card-3d h-full rounded-3xl border border-background/15 bg-background/10 p-7 backdrop-blur-md">
                  <Quote className="h-7 w-7 text-secondary" />
                  <blockquote className="mt-4 leading-relaxed text-background/85">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="font-display font-black">{d.nome}</span>
                    <span className="flex gap-0.5 text-secondary" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to="/reserva"
                className="shine inline-block rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar uma mesa
              </Link>
              <Link
                to="/sobre"
                className="inline-block rounded-full border border-background/40 px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-colors hover:bg-background hover:text-ink"
              >
                Conhecer o restaurante
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
