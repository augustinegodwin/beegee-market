"use client";
import Hero from "../components/sections/hero";
import Category from "../components/sections/category";
import Store from "../components/sections/store";
import Testimonials from "../components/sections/textimonials";
export default function Home() {
  return (
    <main className="w-full pt-16">
      <Hero />
      <Category />
      <Store />
      <Testimonials />
    </main>
  );

}
