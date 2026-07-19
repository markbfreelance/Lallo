import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import ServicesSection from "@/components/ServicesSection";
import OfficialsSection from "@/components/OfficialsSection";
import TransparencySection from "@/components/TransparencySection";
import TourismSection from "@/components/TourismSection";
import WaveDivider from "@/components/WaveDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <StatStrip />

        {/* New Services Section */}
        <ServicesSection />

        {/* Wave: light services → light officials */}
        <WaveDivider
          colorFrom="var(--color-sand-50)"
          colorTo="var(--color-sand-50)"
        />

        <OfficialsSection />

        {/* Wave: light officials → slightly tinted transparency */}
        <WaveDivider
          colorFrom="var(--color-sand-50)"
          colorTo="oklch(0.97 0.008 75)"
        />

        <TransparencySection />

        {/* Wave: tinted transparency → light tourism */}
        <WaveDivider
          colorFrom="oklch(0.97 0.008 75)"
          colorTo="var(--color-sand-50)"
        />

        <TourismSection />
      </main>

      <Footer />
    </>
  );
}
