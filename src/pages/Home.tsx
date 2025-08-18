import Hero from "../components/Hero";
import We from "../components/Project";
import CarouselServices from "../components/CarouselServicios";
import ResponsiveSection from "../components/ResposiveSection";
import HowToStart from "../components/HowToStart";
import FAQ from "../components/FAQ";
function Home() {
  return (
    <>
      <Hero />
      <CarouselServices />
      <We />
      <ResponsiveSection />
      <HowToStart />
      <FAQ />
    </>
  );
}

export default Home;
