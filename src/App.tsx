import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Divisions } from "@/components/sections/Divisions";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { useLenis } from "@/hooks/useLenis";
import { Cursor } from "@/components/ui/Cursor";


export default function App() {
  useLenis();

  return (
    <div className="noise relative min-h-screen bg-obsidian text-ivory">
      <Cursor />          {/* ← ADD THIS */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}