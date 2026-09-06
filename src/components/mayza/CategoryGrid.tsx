import { ArrowRight, ChevronRight, Heart, Gift } from "lucide-react";
import { categories } from "./data";

const giftOccasions = [
  "Birthdays",
  "Anniversaries",
  "Festivals",
  "Corporate Gifts",
  "Just Because",
];

export function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-[1600px] px-5 py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="script text-4xl text-secondary-foreground">
                Explore Our Categories ♡
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Thoughtful finds for every mood, age and occasion
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-soft transition-colors hover:bg-accent/60"
            >
              View All Categories <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-card/90 text-primary shadow-soft">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-sm font-bold text-secondary-foreground">{cat.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cat.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2rem] bg-gradient-soft p-6 shadow-soft">
          <p className="script text-4xl leading-tight text-secondary-foreground">
            Perfect Gifts for Every Occasion ♡
          </p>
          <span className="mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-soft">
            <Gift className="h-9 w-9 text-primary" />
          </span>
          <a
            href="#best-sellers"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-glow"
          >
            Shop Now <ArrowRight className="h-4 w-4" />
          </a>
          <ul className="mt-5 space-y-2">
            {giftOccasions.map((o) => (
              <li
                key={o}
                className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground"
              >
                <Heart className="h-4 w-4 text-primary" />
                {o}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
