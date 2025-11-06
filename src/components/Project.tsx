import "../styles/project.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Project: React.FC = () => {
  // Variantes de animación para las secciones
  const blockVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="project-container" id="projects">
      <motion.div
        className="project-import"
        variants={blockVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-import-new">
          <div className="pos-kicker">Nuevo</div>

          <h2 id="pos-hero-title" className="pos-title">
            <span className="pos-title__small">
              Presentamos nuestro sistema Ecommerce
            </span>
            <span className="pos-title__main">
              <b>Shirmerce</b>
            </span>
          </h2>

          <p className="pos-subtitle">
            Velocidad y simplicidad para tu negocio online: administra pedidos
            desde tu web, redes sociales y WhatsApp sin complicaciones.
          </p>

          <ul className="pos-features" aria-label="Características principales">
            <li>
              <b>Flujo de venta rápido:</b> interfaz ágil para procesar pedidos
              en segundos.
            </li>
            <li>
              <b>Pedidos desde múltiples canales:</b> sitio web, redes o
              WhatsApp.
            </li>
            <li>
              <b>Atención automática:</b> la IA recibe el pedido, lo registra y
              notifica al cliente.
            </li>
            <li>
              <b>Gestión inteligente de inventario:</b> actualiza existencias en
              tiempo real.
            </li>
            <li>
              <b>Panel de control unificado:</b> visualiza ventas, ingresos y
              estado de pedidos desde un solo lugar.
            </li>
          </ul>

          <button
            className="project-btn"
            onClick={() =>
              window.open(
                "https://wa.me/50687284070?text=Hola%20quiero%20más%20información%20sobre:Shirmerce",
                "_blank"
              )
            }
          >
            <div className="project-default-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                color="#fff"
                fill="none"
              >
                <path
                  d="M13 8.5H13.5V4.69635C13.5 4.31176 13.8118 4 14.1963 4C14.39 4 14.5749 4.08062 14.7066 4.22252L20.6598 10.6336C20.8785 10.8691 21 11.1786 21 11.5C21 11.8214 20.8785 12.1309 20.6598 12.3664L14.7066 18.7775C14.5749 18.9194 14.39 19 14.1963 19C13.8118 19 13.5 18.6882 13.5 18.3037V14.5C7.94555 14.5 4.94688 18.5162 4.19199 19.6847C4.06738 19.8776 3.85713 20 3.6275 20C3.28094 20 3 19.7191 3 19.3725V18.5C3 12.9772 7.47715 8.5 13 8.5Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Me interesa</span>
            </div>
            <div className="project-hover-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                color="#fff"
                fill="none"
              >
                <path
                  d="M17 7C17 4.64298 17 3.46447 16.2678 2.73223C15.5355 2 14.357 2 12 2H9C6.64298 2 5.46447 2 4.73223 2.73223C4 3.46447 4 4.64298 4 7V17C4 19.357 4 20.5355 4.73223 21.2678C5.46447 22 6.64298 22 9 22H12C14.357 22 15.5355 22 16.2678 21.2678C17 20.5355 17 19.357 17 17V16"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.5 2H8.5L9 3H12L12.5 2Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 12.5C12 12.5 13.3485 13.0067 14 15C14 15 17.1765 10 20 9"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Descubre</span>
            </div>
          </button>
        </div>

        <img
          src="/img/persona-2.webp"
          alt="Persona utilizando sistema ecommerce"
          className="shirorder-image"
        />
      </motion.div>

      <h2 style={{ textAlign: "center", marginBottom: "3.2rem" }}>
        Software que Impulsa Resultados
      </h2>

      {/* Grilla de proyectos animada */}
      <motion.div
        className="project-grid"
        variants={blockVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            img: "/img/Macbook-Air-myrdistribuidora.webp",
            title: "Tienda en línea de verdurería",
          },
          {
            img: "/img/egguz (1).webp",
            title: "Reservas de Fisioterapía",
          },
          {
            img: "/img/Gali.webp",
            title: "Portafolio arquitectónico en línea",
          },
          {
            img: "/img/Macbook-Air-asterion-rg.webp",
            title: "Landing Page de Abogados",
          },
        ].map((proj, i) => (
          <motion.div
            key={i}
            className="project-item"
            variants={blockVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="project-image"
              loading="lazy"
            />
            <h2 className="project-title">{proj.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
