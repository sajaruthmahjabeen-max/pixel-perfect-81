import {
  Gift,
  Ribbon,
  Flower2,
  ShoppingBag,
  Baby,
  PencilLine,
  Home,
  Gem,
  Smartphone,
  Sparkles,
  Truck,
  ShieldCheck,
  Heart,
} from "lucide-react";

const quickCategories = [
  { name: "Return Gifts", icon: Gift, tone: "bg-secondary" },
  { name: "Hair Accessories", icon: Ribbon, tone: "bg-accent/60" },
  { name: "Clips & Hair Bands", icon: Flower2, tone: "bg-lavender/60" },
  { name: "Handbags & Purses", icon: ShoppingBag, tone: "bg-secondary" },
  { name: "Toys", icon: Baby, tone: "bg-sky/50" },
  { name: "Stationery", icon: PencilLine, tone: "bg-lavender/50" },
  { name: "Home & Lifestyle", icon: Home, tone: "bg-peach/60" },
  { name: "Jewellery & Fashion", icon: Gem, tone: "bg-accent/50" },
  { name: "Phone Accessories", icon: Smartphone, tone: "bg-sky/40" },
  { name: "More", icon: Sparkles, tone: "bg-secondary" },
];

const benefits = [
  { icon: Truck, title: "Fast & Reliable Delivery", sub: "Across India" },
  { icon: ShieldCheck, title: "Secure Payments", sub: "Multiple options" },
  { icon: Heart, title: "Curated with Love", sub: "For every occasion" },
  { icon: Gift, title: "Perfect for Gifting", sub: "Because every moment matters" },
];

export function CategoryBar() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-8 lg:px-8">
      <h2 className="sr-only">Shop by category</h2>
      <div className="glass-panel no-scrollbar flex gap-2 overflow-x-auto rounded-[2rem] p-4 shadow-soft">
        {quickCategories.map(({ name, icon: Icon, tone }) => (
          <a
            key={name}
            href="#categories"
            className="group flex min-w-[7.5rem] flex-1 flex-col items-center gap-2 rounded-3xl px-2 py-3 transition-colors hover:bg-secondary/70"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full ${tone} shadow-soft transition-transform group-hover:-translate-y-0.5`}
            >
              <Icon className="h-6 w-6 text-primary" />
            </span>
            <span className="text-center text-xs font-bold leading-tight text-secondary-foreground">
              {name}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-5 grid gap-4 rounded-[2rem] bg-gradient-soft p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
        {benefits.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3 lg:justify-center lg:px-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card shadow-soft">
              <Icon className="h-5 w-5 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold text-secondary-foreground">{title}</span>
              <span className="block text-xs text-muted-foreground">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
