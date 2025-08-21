import "../styles/hero.css";
import BlurText from "./BlurText";
import TiltedCard from "./TiltedCard";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
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
        <BlurText
          text="Shircode ;"
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text"
        />
        <BlurText
          text="Innovación digital a tu medida"
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text-content"
        />

        <BlurText
          text="Creo soluciones inteligentes en web, software, apps y comercio digital, impulsadas con IA."
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text-description"
        />

        <button className="btn-53">
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
