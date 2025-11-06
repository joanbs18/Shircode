import "../styles/hero.css";
import TiltedCard from "./TiltedCard";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";

const Hero: React.FC = () => {
  // 🔹 Variants para el contenedor (activa animación escalonada)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // anima los hijos uno tras otro
      },
    },
  };

  // 🔹 Variants para cada bloque (imagen, texto, botón)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Imagen con efecto Tilt */}
        <motion.div variants={itemVariants}>
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
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={itemVariants}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          Shircode
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "10px" }}
        >
          Expertos en desarrollo de software, diseño web y apps móviles en Costa Rica
        </motion.p>

        {/* Botón */}
        <motion.button
          variants={itemVariants}
          className="btn-53 mt-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
