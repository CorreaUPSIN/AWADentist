import React from "react";
import "./Appointment.css";

const Appointment = () => (
  <section id="agenda" className="appointment-section">
    <div className="container">
      <div className="appointment-content">
        <div className="appointment-info">
          <h2>Agenda Tu Consulta GRATIS</h2>
          <p className="appointment-subtitle">¡No pierdas esta oportunidad! Consulta sin costo + 20% descuento en tratamiento</p>
          <div className="appointment-benefits">
            <div className="benefit">✅ Consulta GRATIS valorada en $200</div>
            <div className="benefit">✅ Evaluación completa de tu caso</div>
            <div className="benefit">✅ Plan de tratamiento personalizado</div>
            <div className="benefit">✅ Cotización sin compromiso</div>
            <div className="benefit">✅ 20% descuento si agencias hoy</div>
          </div>
          <div className="contact-info">
            <p>📞 <a href="tel:+166195868226">+1 (619) 586-8226</a></p>
            <p>💬 <a href="https://api.whatsapp.com/send?phone=16195868226">WhatsApp</a></p>
            <p>📍 Tijuana, Baja California (5 min de la frontera)</p>
          </div>
        </div>
        <form className="appointment-form" onSubmit={e => e.preventDefault()}>
          <h3>Reserva Tu Cita GRATIS</h3>
          <input type="text" placeholder="Nombre completo *" required />
          <input type="tel" placeholder="Teléfono *" required />
          <input type="email" placeholder="Correo electrónico *" required />
          <select required>
            <option value="">Selecciona especialidad *</option>
            <option>Implantes Dentales</option>
            <option>Ortodoncia Invisible</option>
            <option>Blanqueamiento</option>
            <option>Cirugía Oral</option>
            <option>Odontopediatría</option>
            <option>Estética Dental</option>
          </select>
          <input type="date" required />
          <input type="time" required />
          <textarea placeholder="Describe tu caso o consulta"></textarea>
          <button type="submit">RESERVAR CONSULTA GRATIS</button>
          <p className="form-note">* Tu información está segura y no será compartida</p>
        </form>
      </div>
    </div>
  </section>
);

export default Appointment; 