import { ArrowRight, Gift, Truck, ShieldCheck, Heart } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";

const trustPoints = [
  { icon: Gift, label: "Unique & Trendy Collections" },
  { icon: Truck, label: "Fast & Reliable Delivery" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Heart, label: "Quality Products You'll Love" },
];

const occasions = ["Birthdays", "Weddings", "Return Gifts", "Festivals", "Just Because"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-lavender/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-peach/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-10 lg:grid-cols-[1fr_1.15fr_auto] lg:px-8 lg:py-14">
        <div>
          <p className="script mb-2 text-2xl text-primary">Little Joys · Big Smiles ♡</p>
          <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Gifts • Accessories • Essentials
          </h1>
          <p className="script -mt-1 text-6xl leading-tight text-primary sm:text-7xl">
            for Everyone ♡
          </p>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            From cute kids' goodies to stylish accessories, home essentials and thoughtful gifts —
            find something special for every age and every occasion!
          </p>
          <a
            href="#best-sellers"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Shop Now <ArrowRight className="h-5 w-5" />
          </a>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-xs font-semibold text-secondary-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="max-w-[9rem] leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-card/70 shadow-card">
            <img
              src={heroProducts}
              alt="Gift boxes, handbags, teddy bear, stationery and lifestyle products styled on a pastel table"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 shadow-soft lg:w-56">
          <p className="script text-4xl leading-none text-accent-foreground">
            For Every
            <br />
            Occasion ♡
          </p>
          <ul className="mt-5 space-y-2.5">
            {occasions.map((o) => (
              <li
                key={o}
                className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground"
              >
                <Heart className="h-4 w-4 text-primary" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
