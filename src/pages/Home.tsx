import Hero from "../components/Hero";
import We from "../components/Project";
import CarouselServices from "../components/CarouselServicios";
import ResponsiveSection from "../components/ResposiveSection";
import HowToStart from "../components/HowToStart";
import StackTec from "../components/StackTec";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <CarouselServices />
      <We />
      <ResponsiveSection />
      <HowToStart />
      <StackTec />
      <ContactForm />
      <Footer />
  
    </>
  );
}

export default Home;
