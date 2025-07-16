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
          text="Standout web design
for tech and AI brands"
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text-content"
        />

        <BlurText
          text="I build websites that bring users in and drive revenue. Built fast, designed to convert, ready to grow."
          delay={150}
          animateBy="words"
          direction="top"
          className="blur-text-description"
        />

        <button className="btn-53">
          <div className="original">Let´s talk</div>
          <div className="letters">
            <span>L</span>
            <span>e</span>
            <span>t´</span>
            <span>s</span>
            <span> </span>
            <span>t</span>
            <span>a</span>
            <span>l</span>
            <span>k</span>
          </div>
        </button>
      </div>
    </section>
  );
};
export default Hero;
