import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
