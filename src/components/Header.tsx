import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el valor según el punto de scroll donde quieras el efecto
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#home">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Acerca</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
