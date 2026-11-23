import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE_URL, canonicalUrl, img } from "@/lib/site";

const perguntas = [
  {
    pergunta: "Como faço uma reserva na Delicatensse Soares?",
    resposta:
      "A reserva é feita pelo WhatsApp. Você pode chamar nossa equipe, consultar a disponibilidade e escolher o dia e o horário para o seu momento.",
  },
  {
    pergunta: "Onde a Delicatensse Soares fica?",
    resposta:
      "Estamos na Rua das Oliveiras, 320 — Centro, São Paulo/SP. Na página de localização você também encontra o mapa e os dados de contato.",
  },
  {
    pergunta: "Qual é o horário de funcionamento?",
    resposta: "Atendemos de terça a domingo, das 07h às 20h. Às segundas-feiras estamos fechados.",
  },
  {
    pergunta: "O que encontro no cardápio?",
    resposta:
      "O cardápio reúne padaria artesanal, cafeteria especial e opções do empório, como doces, tábuas de frios e cestas para presente.",
  },
  {
    pergunta: "Quais são as delícias da casa?",
    resposta:
      "Entre os destaques estão os pães artesanais, a tábua da casa e o bolo pudim, além dos queridinhos do balcão apresentados na página de delícias.",
  },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes | Delicatensse Soares" },
      {
        name: "description",
        content:
          "Tire dúvidas sobre reservas, localização, horários, cardápio e delícias da Delicatensse Soares. Encontre as respostas e fale com a nossa equipe.",
      },
      { property: "og:title", content: "Perguntas Frequentes | Delicatensse Soares" },
      {
        property: "og:description",
        content: "Reservas, localização, horários e cardápio: consulte as dúvidas frequentes.",
      },
      { property: "og:image", content: `${SITE_URL}${img.salaoA.url}` },
      { name: "twitter:image", content: `${SITE_URL}${img.salaoA.url}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/faq") }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <div className="animate-page-enter">
      <section className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Dúvidas frequentes
            </p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-5xl">
              Perguntas frequentes
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Informações para planejar sua visita e aproveitar a experiência na Delicatensse
              Soares.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {perguntas.map((item, i) => (
              <Reveal key={item.pergunta} delay={i * 70}>
                <details className="card-3d group rounded-3xl border border-border bg-card px-6 py-5 open:shadow-lg">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-black marker:hidden">
                    <h2>{item.pergunta}</h2>
                    <Plus
                      className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.resposta}</p>
                </details>
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
                Reservar pelo WhatsApp
              </Link>
              <Link
                to="/localizacao"
                className="inline-block rounded-full border border-ink px-7 py-4 font-display text-sm font-black uppercase tracking-wide transition-colors hover:bg-ink hover:text-background"
              >
                Ver localização
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
