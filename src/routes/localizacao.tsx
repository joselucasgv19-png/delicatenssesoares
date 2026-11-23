import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, canonicalUrl, WHATS, img } from "@/lib/site";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Visite a Delicatensse Soares: endereço, horários de funcionamento e contato. Venha conhecer e descobrir seus favoritos.",
      },
      { property: "og:title", content: "Localização | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Venha conhecer, descobrir seus favoritos e aproveitar uma experiência acolhedora.",
      },
      { property: "og:image", content: `${SITE_URL}${img.salaoA.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.salaoA.url}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/localizacao") }],
  }),
  component: Localizacao,
});

function Localizacao() {
  return (
    <div className="animate-page-enter">
      <section className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Visite a Delicatensse Soares
            </p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-4xl">
              Venha conhecer e descobrir seus favoritos
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Entre em contato, consulte nossa disponibilidade e encontre a melhor opção para o seu
              momento.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Rua das Oliveiras, 320 — Centro, São Paulo/SP</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Ter a Dom, 07h às 20h — Segunda fechado</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATS}
                target="_blank"
                rel="noopener"
                className="shine inline-block rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar pelo WhatsApp
              </a>
              <Link
                to="/reserva"
                className="inline-block rounded-full border border-ink px-7 py-4 font-display text-sm font-black uppercase tracking-wide transition-colors hover:bg-ink hover:text-background"
              >
                Página de reserva
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-3d overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mapa da Delicatensse Soares"
                src="https://www.google.com/maps?q=Rua%20das%20Oliveiras%20320%20Centro%20S%C3%A3o%20Paulo&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
