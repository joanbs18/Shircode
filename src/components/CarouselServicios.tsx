import React from 'react';
import '../styles/carouselServices.css';

const servicios = [
  'Desarrollo de Software',
  'Sitios Web Responsivos',
  'Aplicaciones Móviles',
  'Integraciones API',
  'Automatización de Procesos',
  'Análisis de Datos',
  'Consultoría Tecnológica',
  'Sistemas de Facturación',
  'Sistemas de Punto de Venta (POS)',
  'Software a la Medida',
  'Mantenimiento de Sistemas',
  'Migración de Datos',
  'Diseño de Interfaces (UI/UX)',
  'Plataformas E-commerce',
  'Implementación de ERP',
  'Soluciones en la Nube',
  'Gestión de Inventario',
  'Integración con Pasarelas de Pago',
  'Desarrollo Backend y Frontend',
  'Seguridad Informática',
  'Soporte Técnico Especializado',
];


const CarouselServices: React.FC = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...servicios, ...servicios].map((servicio, index) => (
          <span key={index} className="carousel-item">
            {servicio}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselServices;
// 