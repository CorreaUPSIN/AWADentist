import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contacto" className="contact-section">
    <div className="container">
      <h2>Contáctanos</h2>
      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>📞 Llámanos AHORA</h3>
          <p><a href="tel:+166195868226">+1 (619) 586-8226</a></p>
          <p>Horario: Lunes a Sábado 8AM - 8PM</p>
        </div>
        <div className="contact-info-card">
          <h3>💬 WhatsApp</h3>
          <p><a href="https://api.whatsapp.com/send?phone=16195868226">Chatea con nosotros</a></p>
          <p>Respuesta en menos de 5 minutos</p>
        </div>
        <div className="contact-info-card">
          <h3>📍 Ubicación</h3>
          <p>Tijuana, Baja California</p>
          <p>A solo 5 minutos de la frontera</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 