import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, X } from "lucide-react";

import { WHATS, img } from "@/lib/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/delicias", label: "Delícias" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/localizacao", label: "Localização" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={img.logo.url}
            alt="Logo Delicatensse Soares"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
          />
          <span className="truncate font-display text-base font-black uppercase tracking-tight sm:text-lg">
            Delicatensse <span className="heat-text">Soares</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/reserva"
            className="shine hidden rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-wide text-ink sm:inline-block sm:text-sm"
            style={{ background: "var(--gradient-heat)" }}
          >
            Reservar
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 lg:hidden">
          <ul className="space-y-1 text-sm font-semibold">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-muted text-primary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/reserva"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl px-3 py-3 text-center font-black uppercase tracking-wide text-ink"
                style={{ background: "var(--gradient-heat)" }}
              >
                Reservar
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={img.logo.url}
              alt="Logo Delicatensse Soares"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-secondary/50"
            />
            <span className="font-display text-lg font-black uppercase">Delicatensse Soares</span>
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
            {nav.map((n) => (
              <li key={n.to}>
                <Link className="hover:text-secondary" to={n.to}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-secondary" to="/reserva">
                Reserva
              </Link>
            </li>
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
            <li>contato@delicatenssesoares.com.br</li>
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
            <a
              href={WHATS}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="rounded-full border border-background/25 p-2.5 transition-colors hover:bg-secondary hover:text-ink"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="rounded-full border border-background/25 p-2.5 transition-colors hover:bg-secondary hover:text-ink"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-background/15 px-4 pt-6 text-xs text-background/55">
        © {new Date().getFullYear()} Delicatensse Soares. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <Link
      to="/reserva"
      aria-label="Reservar pelo WhatsApp"
      className="animate-pulse-glow fixed bottom-5 right-5 z-50 rounded-full px-5 py-4 font-display text-sm font-black uppercase text-ink"
      style={{ background: "var(--gradient-heat)" }}
    >
      Reservar
    </Link>
  );
}
