import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/mayza/Header";
import { Hero } from "@/components/mayza/Hero";
import { CategoryBar } from "@/components/mayza/CategoryBar";
import { CategoryGrid } from "@/components/mayza/CategoryGrid";
import { BestSellers } from "@/components/mayza/BestSellers";
import { Footer } from "@/components/mayza/Footer";

const title = "Mayza mart — Gifts, Accessories & Essentials for Everyone";
const description =
  "Shop return gifts, hair accessories, handbags, toys, stationery, home decor and everyday essentials at Mayza mart — thoughtful finds for every age and occasion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryBar />
        <CategoryGrid />
        <BestSellers />
      </main>
      <Footer />
    </div>
  );
}
