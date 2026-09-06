import catReturnGifts from "@/assets/cat-return-gifts.jpg";
import catHair from "@/assets/cat-hair.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catToys from "@/assets/cat-toys.jpg";
import catStationery from "@/assets/cat-stationery.jpg";
import catHome from "@/assets/cat-home.jpg";
import catJewellery from "@/assets/cat-jewellery.jpg";
import catParty from "@/assets/cat-party.jpg";
import catPhone from "@/assets/cat-phone.jpg";
import pClips from "@/assets/p-clips.jpg";
import pGiftbox from "@/assets/p-giftbox.jpg";
import pHandbag from "@/assets/p-handbag.jpg";
import pCandle from "@/assets/p-candle.jpg";
import pScrunchies from "@/assets/p-scrunchies.jpg";
import pBottle from "@/assets/p-bottle.jpg";

export type Category = {
  name: string;
  tagline: string;
  image: string;
};

export const categories: Category[] = [
  { name: "Return Gifts", tagline: "Make it memorable", image: catReturnGifts },
  { name: "Hair Accessories", tagline: "Style in every strand", image: catHair },
  { name: "Handbags & Purses", tagline: "Carry your style", image: catBags },
  { name: "Toys", tagline: "Fun for all ages", image: catToys },
  { name: "Stationery", tagline: "Write • Create • Dream", image: catStationery },
  { name: "Home & Lifestyle", tagline: "Make it cozy", image: catHome },
  { name: "Jewellery & Fashion", tagline: "Accessorize your style", image: catJewellery },
  { name: "Party Supplies", tagline: "Celebrate in style", image: catParty },
  { name: "Phone Accessories", tagline: "Stay connected", image: catPhone },
];

export type Product = {
  name: string;
  price: number;
  rating: number;
  badge: "Best Seller" | "New";
  image: string;
};

export const products: Product[] = [
  {
    name: "Cute Hair Clips Set (Pack of 12)",
    price: 249,
    rating: 4.8,
    badge: "Best Seller",
    image: pClips,
  },
  {
    name: "Unicorn Return Gift Box (Set of 5)",
    price: 299,
    rating: 4.7,
    badge: "Best Seller",
    image: pGiftbox,
  },
  { name: "Mini Handbag (Kids & Teens)", price: 349, rating: 4.6, badge: "New", image: pHandbag },
  { name: "Scented Candle Gift Set", price: 499, rating: 4.8, badge: "Best Seller", image: pCandle },
  {
    name: "Designer Scrunchies (Set of 5)",
    price: 199,
    rating: 4.7,
    badge: "Best Seller",
    image: pScrunchies,
  },
  { name: "Cute Water Bottle (500ml)", price: 299, rating: 4.6, badge: "New", image: pBottle },
  {
    name: "Stationery Set (Unicorn Theme)",
    price: 349,
    rating: 4.8,
    badge: "Best Seller",
    image: catStationery,
  },
  { name: "Teddy Bear (Small)", price: 399, rating: 4.9, badge: "Best Seller", image: catToys },
];
