import { useEffect } from "react";
import Card from "./CardToStart"; // 👈 Importamos tu Card con SVG dinámico
import "../styles/howToStart.css";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode; // 👈 Ahora cada paso tiene un ícono
}

const steps: Step[] = [
  {
    number: "01",
    title: "Planeación inicial",
    description:
      "Definimos el propósito de la app, el presupuesto disponible y quién será el responsable de desarrollarla.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Organización del proyecto",
    description:
      "Dividimos las funcionalidades en módulos para que el desarrollo sea más ágil y claro.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2zm0 6h14v-2H7v2zM7 5v2h14V5H7zM3 19h2v-2H3v2zm0-12v2h2V7H3zm0 6h2v-2H3v2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Registro de funcionalidades",
    description:
      "En sesiones con un especialista UX/UI, documentamos cada característica de manera detallada.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 4h18v2H3V4zm0 14h18v2H3v-2zm0-7h18v2H3v-2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Prototipo funcional (UX)",
    description:
      "Creamos un esquema visual sencillo en blanco y negro que muestre cómo funcionará la aplicación.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4V6zm0 10h16v2H4v-2zm0-5h16v2H4v-2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Diseño visual (UI)",
    description:
      "Incorporamos estilos, colores y elementos gráficos que darán a la app una apariencia moderna y coherente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 3l7.071 7.071-1.414 1.414L12 5.828l-5.657 5.657-1.414-1.414L12 3z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Desarrollo técnico",
    description:
      "Aquí transformamos tu idea en una aplicación estable, escalable y lista para usarse.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Soporte y evolución",
    description:
      "Actualizamos funciones, añadimos nuevas características y hacemos ajustes continuos para mejorar tu app.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 22c5.523 0 10-4.477 10-10h-2a8 8 0 11-8-8V2C6.477 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
  },
];

const HowToStart: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".step-card");
    cards.forEach((card, index) => {
      card.classList.add("hidden-card");
      setTimeout(() => card.classList.add("show-card"), index * 300);
    });
  }, []);

  return (
    <section className="how-to-start">
      <h1 className="title">Nuestro proceso de desarrollo</h1>
      <h2 className="title">7 fases para construir tu aplicación</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`${index === steps.length - 1 ? " last-step" : ""}`}
          >
            <Card
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStart;
