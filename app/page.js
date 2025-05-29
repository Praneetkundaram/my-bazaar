import { Suspense } from "react";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading filters...</div>}>
        <Hero />
      </Suspense>
      <Footer />
    </>
  );
}
