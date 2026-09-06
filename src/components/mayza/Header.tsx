import { Search, ShoppingCart, User, ChevronDown, Heart } from "lucide-react";

const navItems = ["Home", "Shop", "New Arrivals", "Best Sellers", "About Us", "Contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-gradient-to-b from-card to-secondary/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-4 px-5 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
            <Heart className="h-5 w-5 fill-current" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl font-bold tracking-tight text-primary">
              Mayza
            </span>
            <span className="script -mt-1 block text-lg text-accent-foreground">mart</span>
          </span>
        </a>

        <nav className="order-3 flex w-full flex-wrap items-center gap-1 md:order-none md:w-auto md:flex-1 md:justify-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={
                item === "Home"
                  ? "inline-flex items-center gap-1 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
                  : "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
              }
            >
              {item}
              {item === "Shop" && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden lg:block">
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search for gifts, accessories, home decor..."
              className="h-11 w-[22rem] rounded-full border border-border bg-card pl-5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <span className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
              <Search className="h-4 w-4" />
            </span>
          </div>
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground lg:hidden"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-secondary-foreground transition-colors hover:bg-secondary"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-secondary-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-primary text-[11px] font-bold text-primary-foreground">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
