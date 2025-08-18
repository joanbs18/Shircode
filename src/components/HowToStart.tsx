import { useEffect } from "react";
import "../styles/howToStart.css";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Hablemos de tu idea",
    description:
      "Nos reunimos contigo para entender tu proyecto, tus metas y lo que deseas lograr con el software.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Creamos un plan y un prototipo visual para que veas cómo se adaptará el sistema a tus necesidades.",
  },
  {
    number: "03",
    title: "Desarrollo a tu medida",
    description:
      "Construimos el software paso a paso, manteniéndote siempre al tanto del progreso.",
  },
  {
    number: "04",
    title: "Implementación y soporte",
    description:
      "Te entregamos el sistema funcionando y te acompañamos con soporte para asegurar el éxito.",
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
      <h1 className="title">Cómo empezar</h1>
      <div className="steps-grid">
      {steps.map((step, index) => (
          <div
            key={step.number}
            className={`step-card${index === steps.length - 1 ? ' last-step' : ''}`}
          >
            <span className="step-number">{step.number}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStart;
