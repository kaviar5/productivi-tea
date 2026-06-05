import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/productivitea-logo.png.asset.json";
import mark from "@/assets/productivitea-mark.png.asset.json";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="group flex items-center" aria-label="ProductiviTEA home">
          <img
            src={mark.url}
            alt="ProductiviTEA"
            className="h-12 w-auto md:h-14"
          />
          <span className="ml-3 font-serif text-xl text-espresso md:text-2xl">ProductiviTEA</span>
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
            <img
              src={logo.url}
              alt="ProductiviTEA"
              className="h-10 w-auto"
            />
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
