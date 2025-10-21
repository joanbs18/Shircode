import { Suspense, lazy } from "react";


const Hero = lazy(() => import("../components/Hero"));
const We = lazy(() => import("../components/Project"));
const CarouselServices = lazy(() => import("../components/CarouselServicios"));
const ResponsiveSection = lazy(() => import("../components/ResposiveSection"));
const HowToStart = lazy(() => import("../components/HowToStart"));
const StackTec = lazy(() => import("../components/StackTec"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const Footer = lazy(() => import("../components/Footer"));

function Home() {
  return (
    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Shircode ;</div>}>
      <Hero />
      <CarouselServices />
      <We />
      <ResponsiveSection />
      <HowToStart />
      <StackTec />
      <ContactForm />
      <Footer />
    </Suspense>
  );
}

export default Home;
