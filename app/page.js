import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <div className="relative w-full">
        <Hero />
        <Footer />
      </div>
    </Suspense>
  );
}
