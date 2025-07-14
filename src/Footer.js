import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dentist Team</h4>
          <p>Especialistas certificados en implantes y estética dental en Tijuana, B.C.</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📞 <a href="tel:+166195868226">+1 (619) 586-8226</a></p>
          <p>💬 <a href="https://api.whatsapp.com/send?phone=16195868226">WhatsApp</a></p>
        </div>
        <div className="footer-section">
          <h4>Servicios</h4>
          <p>• Implantes Dentales</p>
          <p>• Ortodoncia Invisible</p>
          <p>• Blanqueamiento</p>
          <p>• Cirugía Oral</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© <span id="year">{new Date().getFullYear()}</span> Dentist Team | Tijuana B.C. | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer; 