import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/notes", label: "Notes" },
  { to: "/ideas", label: "Ideas Vault" },
  { to: "/experiments", label: "Experiments" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <CoffeeMark />
          <span className="font-serif text-lg tracking-tight text-espresso">
            Productivi<span className="italic text-coffee">TEA</span>
          </span>
        </Link>
        <nav className="hidden gap-7 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground transition-colors hover:text-coffee"
              activeProps={{ className: "text-espresso" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <CoffeeMark />
              <span className="font-serif text-base text-espresso">
                Productivi<span className="italic text-coffee">TEA</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Notes from the bench. Brewed slowly, served warm.
            </p>
          </div>
          <p className="font-hand text-xl text-coffee">— always thinking in drafts</p>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ProductiviTEA. Brewed with intent.
        </p>
      </div>
    </footer>
  );
}

export function CoffeeMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M8 13h14v8a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-8Z" stroke="currentColor" strokeWidth="1.4" className="text-coffee" />
      <path d="M22 15h2.5a2.5 2.5 0 0 1 0 5H22" stroke="currentColor" strokeWidth="1.4" className="text-coffee" />
      <path d="M12 8c0 1.5 1 2 1 3.5S12 13 12 14M16 7c0 1.5 1 2 1 3.5S16 12 16 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="steam text-coffee/70" />
    </svg>
  );
}

export function Divider() {
  return <div className="mx-auto my-12 max-w-xs divider-wave" />;
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="fade-up">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center">
      <p className="font-hand text-xl text-coffee">{eyebrow}</p>
      <h1 className="mt-2 text-balance text-5xl text-espresso md:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
        {description}
      </p>
      <Divider />
    </section>
  );
}
