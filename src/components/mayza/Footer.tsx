import { ShoppingBag, Smile, Star, Heart } from "lucide-react";

const promises = [
  { icon: ShoppingBag, label: "Shop Smart" },
  { icon: Smile, label: "Gift Better" },
  { icon: Star, label: "Live Happier" },
];

export function Footer() {
  return (
    <footer className="mt-6 bg-gradient-soft">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-8 px-5 py-8 lg:px-8">
        {promises.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 text-sm font-bold text-secondary-foreground"
          >
            <Icon className="h-5 w-5 text-primary" /> {label}
          </span>
        ))}
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground lg:px-8">
        <p className="flex items-center justify-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by Mayza mart —
          gifts, accessories and essentials for everyone.
        </p>
      </div>
    </footer>
  );
}
