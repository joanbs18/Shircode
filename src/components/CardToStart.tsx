import React from "react";
import "../styles/cardToStart.css";

interface CardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="card">
      <div className="number">
        <p className="text">{number}</p>
      </div>

      <div className="icon">
        {icon} {/* 👈 Aquí se renderiza el icono dinámico */}
      </div>

      <p className="heading">{title}</p>
      <p className="content">{description}</p>
    </div>
  );
};

export default Card;
