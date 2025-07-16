import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
     <header className="header">
      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Proyectos</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
