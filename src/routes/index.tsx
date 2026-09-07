import { createFileRoute } from "@tanstack/react-router";
import {
  Coffee,
  Croissant,
  Heart,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Star,
  Sparkles,
  ShoppingBag,
  Quote,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.png.asset.json";
import salaoA from "@/assets/restaurante3.jpg.asset.json";
import salaoB from "@/assets/restaurante4.jpg.asset.json";
import pao from "@/assets/ex1.jpg.asset.json";
import tabua from "@/assets/ex2.jpg.asset.json";
import sanduiche from "@/assets/ex3.jpg.asset.json";
import boloFuba from "@/assets/ex4.jpg.asset.json";
import cafePaoQueijo from "@/assets/ex5.jpg.asset.json";
import boloPudim from "@/assets/ex6.jpg.asset.json";

const WHATS = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Delicatessen%20Soares.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delicatessen Soares | Sabor, qualidade e bons momentos" },
      {
        name: "description",
        content:
          "Delicatessen Soares: pães artesanais, cafés especiais, tábuas, sanduíches e bolos caseiros num ambiente acolhedor. Reserve pelo WhatsApp.",
      },
      { property: "og:title", content: "Delicatessen Soares" },
      {
        property: "og:description",
        content:
          "Sabor, qualidade e aquele prazer de encontrar tudo o que você procura em um só lugar.",
      },
      { property: "og:image", content: `https://delicatessensoares.com.br${pao.url}` },
      { name: "twitter:image", content: `https://delicatessensoares.com.br${pao.url}` },
    ],
  }),
  component: Index,
});

const delicias = [
  {
    img: pao.url,
    nome: "Pães Artesanais",
    desc: "Fermentação natural, casca crocante e miolo macio, assados todos os dias.",
  },
  {
    img: tabua.url,
    nome: "Tábua da Casa",
    desc: "Queijos, frios selecionados, azeitonas e pães quentinhos para compartilhar.",
  },
  {
    img: boloPudim.url,
    nome: "Bolo Pudim",
    desc: "Camadas de pão de ló, doce de leite e pudim cremoso. Um clássico irresistível.",
  },
];

const maisPedidos = [
  {
    img: cafePaoQueijo.url,
    nome: "Café + Pão de Queijo",
    desc: "O combo que abre o dia com aconchego.",
    preco: "R$ 18,90",
    tag: "Mais vendido",
  },
  {
    img: sanduiche.url,
    nome: "Sanduíche Soares",
    desc: "Pão na chapa, bacon, queijo e salada fresca.",
    preco: "R$ 32,90",
    tag: "Favorito",
  },
  {
    img: boloFuba.url,
    nome: "Bolo de Fubá Cremoso",
    desc: "Receita de casa, feito na hora do lanche.",
    preco: "R$ 12,90",
    tag: "Da vovó",
  },
  {
    img: tabua.url,
    nome: "Tábua para Dois",
    desc: "Perfeita para receber alguém especial.",
    preco: "R$ 79,90",
    tag: "Para dividir",
  },
];

const cardapio = [
  {
    titulo: "Padaria",
    icone: Croissant,
    itens: [
      ["Pão de fermentação natural", "R$ 24,00"],
      ["Croissant de manteiga", "R$ 14,00"],
      ["Pão de queijo (6 un.)", "R$ 16,00"],
      ["Focaccia de alecrim", "R$ 22,00"],
    ],
  },
  {
    titulo: "Cafeteria",
    icone: Coffee,
    itens: [
      ["Espresso duplo", "R$ 9,00"],
      ["Cappuccino cremoso", "R$ 15,00"],
      ["Coado especial 250ml", "R$ 12,00"],
      ["Chocolate quente", "R$ 17,00"],
    ],
  },
  {
    titulo: "Empório & Doces",
    icone: ShoppingBag,
    itens: [
      ["Tábua de frios (individual)", "R$ 46,00"],
      ["Bolo pudim (fatia)", "R$ 19,00"],
      ["Torta de limão", "R$ 18,00"],
      ["Cesta presente", "a partir de R$ 129,00"],
    ],
  },
];

const depoimentos = [
  {
    nome: "Mariana Alves",
    texto:
      "O café da manhã aqui virou ritual de sábado. O pão sai do forno na sua frente e o atendimento é de uma gentileza rara.",
  },
  {
    nome: "Rodrigo Menezes",
    texto:
      "Levei clientes para uma reunião informal e todos pediram o endereço depois. Ambiente lindo, iluminação quente e comida impecável.",
  },
  {
    nome: "Camila Duarte",
    texto:
      "Resolvo tudo num lugar só: café da tarde, presente para a sogra e o pão da semana. A tábua para dois é o melhor programa da cidade.",
  },
];

const motivos = [
  {
    icone: Star,
    titulo: "Qualidade em cada escolha",
    texto:
      "Produtos selecionados para oferecer uma experiência que combina sabor, praticidade e confiança.",
  },
  {
    icone: Sparkles,
    titulo: "Variedade para diferentes momentos",
    texto:
      "Uma opção para o café, para a rotina, para receber alguém em casa ou simplesmente para aproveitar seu momento.",
  },
  {
    icone: Heart,
    titulo: "Atendimento próximo",
    texto:
      "Mais do que vender produtos, queremos proporcionar uma experiência agradável desde o primeiro contato.",
  },
  {
    icone: Clock,
    titulo: "Praticidade para o seu dia",
    texto:
      "Tudo em um só lugar para você encontrar o que precisa com mais facilidade e comodidade.",
  },
];

function Index() {
  return (
    <div className="animate-page-enter min-h-screen bg-background text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Delicatessen Soares"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
            />
            <span className="truncate font-display text-base font-black uppercase tracking-tight sm:text-lg">
              Delicatessen <span className="heat-text">Soares</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a className="transition-colors hover:text-primary" href="#sobre">Sobre</a>
            <a className="transition-colors hover:text-primary" href="#delicias">Delícias</a>
            <a className="transition-colors hover:text-primary" href="#cardapio">Cardápio</a>
            <a className="transition-colors hover:text-primary" href="#local">Localização</a>
          </nav>
          <a
            href={WHATS}
            target="_blank"
            rel="noopener"
            className="shine shrink-0 rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-wide text-ink sm:text-sm"
            style={{ background: "var(--gradient-heat)" }}
          >
            Reservar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative overflow-hidden bg-ink">
        <img
          src={pao.url}
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
              Na Delicatessen Soares, cada detalhe foi pensado para tornar sua experiência mais
              agradável — desde a escolha dos produtos até o momento de levar para casa aquilo que
              você gosta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATS}
                target="_blank"
                rel="noopener"
                className="animate-pulse-glow shine rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                className="rounded-full border border-background/40 px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-colors hover:bg-background hover:text-ink"
              >
                Ver cardápio
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 bottom-8 hidden lg:block">
          <img
            src={cafePaoQueijo.url}
            alt="Café coado e cesta de pães de queijo"
            className="animate-float-slow h-72 w-72 rounded-3xl object-cover shadow-2xl ring-4 ring-secondary/30"
            style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(6deg)" }}
          />
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="photo-glow card-3d overflow-hidden rounded-3xl">
              <img
                src={salaoA.url}
                alt="Salão da Delicatessen Soares com iluminação quente"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Nossa história
            </p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">
              Um espaço para quem valoriza qualidade, praticidade e bons sabores
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Seja para o dia a dia, para aquele momento especial ou simplesmente para se permitir
              uma pausa e aproveitar algo que realmente vale a pena. Aqui, encontrar o que você
              procura fica mais fácil, com uma experiência acolhedora e um atendimento próximo,
              pensado para receber cada cliente com atenção.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {motivos.map((m) => (
                <div
                  key={m.titulo}
                  className="card-3d rounded-2xl border border-border bg-card p-5"
                >
                  <m.icone className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-display text-base font-black">{m.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Delícias da Casa */}
      <section id="delicias" className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Feito aqui</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Delícias da Casa</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Receitas que saem do forno o dia inteiro e viraram motivo para voltar.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {delicias.map((d, i) => (
              <Reveal key={d.nome} delay={i * 110}>
                <article className="card-3d h-full overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="photo-glow">
                    <img
                      src={d.img}
                      alt={d.nome}
                      loading="lazy"
                      className="h-56 w-full object-cover"
                    />
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
                  <img
                    src={p.img}
                    alt={p.nome}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
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
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="relative overflow-hidden bg-ink py-20 text-background sm:py-28">
        <img
          src={salaoB.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-secondary">
              Cardápio resumido
            </p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
              Do café da manhã ao presente de última hora
            </h2>
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
                <a
                  href={WHATS}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-block rounded-full bg-ink px-8 py-4 font-display text-sm font-black uppercase tracking-wide text-background transition-transform hover:scale-105"
                >
                  Garantir minha mesa
                </a>
              </div>
              <div className="photo-glow overflow-hidden rounded-3xl">
                <img
                  src={boloPudim.url}
                  alt="Fatia de bolo pudim com doce de leite"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Localização */}
      <section id="local" className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Visite a Delicatessen Soares
            </p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
              Venha conhecer e descobrir seus favoritos
            </h2>
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
                <span>(11) 99999-9999</span>
              </li>
            </ul>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener"
              className="shine mt-8 inline-block rounded-full px-7 py-4 font-display text-sm font-black uppercase tracking-wide text-ink"
              style={{ background: "var(--gradient-heat)" }}
            >
              Reservar pelo WhatsApp
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-3d overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mapa da Delicatessen Soares"
                src="https://www.google.com/maps?q=Rua%20das%20Oliveiras%20320%20Centro%20S%C3%A3o%20Paulo&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-ink py-14 text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Logo Delicatessen Soares"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-secondary/50"
              />
              <span className="font-display text-lg font-black uppercase">Delicatessen Soares</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Sabor, qualidade e aquele prazer de encontrar tudo o que você procura em um só lugar.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-wide text-secondary">
              Navegue
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/75">
              <li><a className="hover:text-secondary" href="#sobre">Sobre nós</a></li>
              <li><a className="hover:text-secondary" href="#delicias">Delícias da Casa</a></li>
              <li><a className="hover:text-secondary" href="#cardapio">Cardápio</a></li>
              <li><a className="hover:text-secondary" href="#local">Localização</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-wide text-secondary">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/75">
              <li>Rua das Oliveiras, 320 — Centro</li>
              <li>São Paulo/SP</li>
              <li>(11) 99999-9999</li>
              <li>contato@delicatessensoares.com.br</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-wide text-secondary">
              Horários
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/75">
              <li>Terça a sexta: 07h — 20h</li>
              <li>Sábado e domingo: 08h — 20h</li>
              <li>Segunda: fechado</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href={WHATS} target="_blank" rel="noopener" aria-label="Instagram" className="rounded-full border border-background/25 p-2.5 transition-colors hover:bg-secondary hover:text-ink">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={WHATS} target="_blank" rel="noopener" aria-label="Facebook" className="rounded-full border border-background/25 p-2.5 transition-colors hover:bg-secondary hover:text-ink">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-background/15 px-4 pt-6 text-xs text-background/55">
          © {new Date().getFullYear()} Delicatessen Soares. Todos os direitos reservados.
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATS}
        target="_blank"
        rel="noopener"
        aria-label="Reservar pelo WhatsApp"
        className="animate-pulse-glow fixed bottom-5 right-5 z-50 rounded-full px-5 py-4 font-display text-sm font-black uppercase text-ink"
        style={{ background: "var(--gradient-heat)" }}
      >
        WhatsApp
      </a>
    </div>
  );
}
