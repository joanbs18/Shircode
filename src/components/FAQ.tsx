import { useState } from "react";
import "../styles/faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué tipo de software desarrollan?",
    answer: "Desarrollamos software a medida según las necesidades de cada cliente, desde aplicaciones web hasta sistemas internos de gestión.",
  },
  {
    question: "¿Cuánto tiempo tarda un proyecto típico?",
    answer: "El tiempo depende de la complejidad del proyecto, pero generalmente entre 4 a 12 semanas.",
  },
  {
    question: "¿Puedo solicitar cambios durante el desarrollo?",
    answer: "Sí, trabajamos de manera iterativa y te mantenemos informado para que puedas solicitar ajustes.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer: "Sí, incluimos soporte y mantenimiento según el plan que elijas.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleIndex(index)}>
            <h3 className="faq-question">{item.question}</h3>
            <p className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;