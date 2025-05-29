import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";

export default function Home() {
  
  return (
    <>
      <div className="relative w-full">
        <Hero />
        <Footer />
      </div>
    </>
  );
}
