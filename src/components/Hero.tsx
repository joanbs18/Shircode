import "../styles/hero.css";
import TiltedCard from "./TiltedCard";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* TiltedCard sigue siendo visual */}
        <TiltedCard
          imageSrc="/img/FotodeJoanBs.jpg"
          altText="Foto de Joan Bravo"
          captionText="Joan Bravo - Shircode"
          containerHeight="120px"
          containerWidth="120px"
          imageHeight="100px"
          imageWidth="100px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Joan Bravo - Shircode</p>
          }
        />

        {/* Texto SEO-friendly */}
        <h1 style={{textAlign: "center"}}>Shircode ; <br />Desarrollo de Software, Páginas Web y Apps Móviles</h1>
        <p style={{fontSize: "2rem", textAlign: "center"}}>
          Impulsa tu negocio con soluciones digitales a medida. Creamos software personalizado,
          páginas web profesionales, tiendas online (e-commerce) y aplicaciones móviles
          optimizadas para tu empresa.
        </p>

        {/* Botón */}
        <button
          className="btn-53"
          onClick={() =>
            window.open(
              "https://wa.me/50687284070?text=Hola%20quiero%20más%20información%20sobre:",
              "_blank"
            )
          }
        >
          <div className="original">Hablemos</div>
          <div className="letters">
            <span>H</span>
            <span>a</span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
            <span>m</span>
            <span>o</span>
            <span>s</span>
          </div>
        </button>
      </div>
    </section>
  );
};
export default Hero;
