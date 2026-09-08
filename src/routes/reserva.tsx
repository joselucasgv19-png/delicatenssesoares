import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Clock, MessageCircle, Users } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, WHATS, img } from "@/lib/site";

export const Route = createFileRoute("/reserva")({
  head: () => ({
    meta: [
      { title: "Reserva | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Reserve sua mesa na Delicatensse Soares pelo WhatsApp. Atendimento próximo, ambiente acolhedor e promoção de café + doce da casa com 20% off.",
      },
      { property: "og:title", content: "Reserva | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Reserve pelo WhatsApp e garanta seu momento especial na Delicatensse Soares.",
      },
      { property: "og:image", content: `${SITE_URL}${img.cafePaoQueijo.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.cafePaoQueijo.url}` },
    ],
  }),
  component: Reserva,
});

const passos = [
  {
    icone: MessageCircle,
    titulo: "Chame no WhatsApp",
    texto: "Clique no botão e fale direto com a nossa equipe, sem cadastro e sem espera.",
  },
  {
    icone: CalendarCheck,
    titulo: "Escolha dia e horário",
    texto: "Consulte a disponibilidade e encontre a melhor opção para o seu momento.",
  },
  {
    icone: Users,
    titulo: "Chegue e aproveite",
    texto: "Sua mesa estará pronta. É só chegar e aproveitar a experiência.",
  },
];

function Reserva() {
  return (
    <div className="animate-page-enter">
      {/* Hero da reserva */}
      <section className="relative overflow-hidden bg-ink py-24 text-background sm:py-32">
        <img
          src={img.salaoA.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, black 45%, transparent), color-mix(in oklab, black 80%, transparent))",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary">
              Reserva
            </p>
            <h1 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
              Seu próximo momento especial pode começar <span className="heat-text">aqui</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-background/80">
              Para aquele café especial, para compartilhar com a família, para receber visitas ou
              simplesmente para se presentear com algo gostoso. Reserve em menos de um minuto.
            </p>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener"
              className="animate-pulse-glow shine mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
              style={{ background: "var(--gradient-heat)" }}
            >
              <MessageCircle className="h-4 w-4" /> Reservar pelo WhatsApp
            </a>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-background/60">
              <Clock className="h-3.5 w-3.5" /> Ter a Dom, 07h às 20h — Segunda fechado
            </p>
          </Reveal>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
            Simples assim
          </p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            Como funciona a reserva
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {passos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 110}>
              <div className="card-3d h-full rounded-3xl border border-border bg-card p-7">
                <span className="font-display text-sm font-black text-accent">0{i + 1}</span>
                <p.icone className="mt-3 h-7 w-7 text-primary" />
                <h3 className="mt-3 font-display text-lg font-black">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promoção */}
      <section className="px-4 pb-20 sm:pb-28">
        <Reveal>
          <div
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center sm:p-14"
            style={{ background: "var(--gradient-heat)" }}
          >
            <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
              Combo café + doce da casa com 20% off
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/80">
              De terça a sexta, das 14h às 17h. Mencione a promoção na sua reserva e aproveite.
            </p>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-block rounded-full bg-ink px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-transform hover:scale-105"
            >
              Quero aproveitar
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
