import React, { useState } from "react";
import "../styles/contactForm.css";

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  subscribe: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault(); // bloquea envío si hay errores
      return;
    }

    // Abrir modal al enviar correctamente
    setIsModalOpen(true);

   

    setTimeout(() => setIsModalOpen(false), 3000);
  };

  return (
    <section className="contact-form-grid" id="contact">
      <div className="contact-form-container">
        <h2>Contáctanos</h2>
        <p>
          ¿Interesado en nuestro software? Completa el formulario y nos
          pondremos en contacto contigo.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          action="https://formsubmit.co/5823cecf919647b63ac8e0c537c1e194"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Tipo de interés</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="demo">Solicitar demostración</option>
              <option value="pricing">Consultar precios</option>
              <option value="enterprise">Solución empresarial</option>
              <option value="support">Soporte técnico</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Enviar mensaje
          </button>
        </form>
      </div>

      <div className="logo-contact">
        <div className="card-social">
          {/* Aquí van tus iconos sociales */}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¡Gracias por contactarnos!</h3>
            <p>Hemos recibido tu mensaje y te responderemos pronto.</p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
