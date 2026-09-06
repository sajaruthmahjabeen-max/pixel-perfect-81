import { ArrowRight, Heart, ShoppingCart, Star, Crown } from "lucide-react";
import { products } from "./data";

export function BestSellers() {
  return (
    <section id="best-sellers" className="mx-auto max-w-[1600px] px-5 py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-end gap-3">
              <Crown className="h-8 w-8 text-primary" />
              <div>
                <h2 className="script text-4xl text-secondary-foreground">Best Sellers</h2>
                <p className="mt-1 text-sm text-muted-foreground">Loved by many, picked by us!</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-soft transition-colors hover:bg-accent/60"
            >
              View All <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-glow">
                    {p.badge}
                  </span>
                  <button
                    aria-label={`Add ${p.name} to wishlist`}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/90 text-primary shadow-soft transition-colors hover:bg-secondary"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                  <h3 className="text-sm font-bold leading-snug text-secondary-foreground">
                    {p.name}
                  </h3>
                  <p className="text-lg font-bold text-primary">₹{p.price}</p>
                  <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    {p.rating}
                  </p>
                  <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2rem] bg-gradient-soft p-6 text-center shadow-soft">
          <p className="script text-5xl leading-tight text-primary">
            Small Things
            <br />
            <span className="text-secondary-foreground">Make</span>
            <br />
            Big Happiness ♡
          </p>
          <span className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-card shadow-soft">
            <Heart className="h-10 w-10 fill-primary text-primary" />
          </span>
          <p className="mt-6 text-sm text-muted-foreground">
            Curated little joys, wrapped with care and ready to gift.
          </p>
        </aside>
      </div>
    </section>
  );
}
