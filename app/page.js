import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="relative w-full h-full">
        <Hero />
        <Footer />
      </div>
    </Suspense>
  );
}
