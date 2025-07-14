import React, { useState } from "react";
import awalogo from "./assets/awalogo.jpg";
import "./Header.css";

const UrgencyBar = () => (
  <div className="urgency-bar">
    <p>🔥 ¡OFERTA ESPECIAL! Consulta GRATIS + 20% descuento en implantes este mes | 📞 Llama AHORA: +1 (619) 586-8226</p>
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <UrgencyBar />
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={awalogo} alt="Dentist Team Logo" className="logo-img" />
            <span>Dentist Team</span>
          </div>
          <button className="menu-icon" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
            &#9776;
          </button>
          <nav className={menuOpen ? "open" : ""}>
            <a href="#por-que-elegirnos" onClick={() => setMenuOpen(false)}>¿Por Qué Nosotros?</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#especialistas" onClick={() => setMenuOpen(false)}>Especialistas</a>
            <a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a>
            <a href="#agenda" onClick={() => setMenuOpen(false)}>Agenda Cita</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </nav>
          <a
            href="https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20mi%20consulta%20GRATIS%20para%20implantes%20%F0%9F%A6%B7"
            className="btn-agendar"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONSULTA GRATIS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 