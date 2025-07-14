import React from "react";
import "./Hero.css";

const Hero = () => (
  <div className="imghero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/hero.jpg)` }}>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">⭐ 4.9/5 Estrellas - 500+ Pacientes Satisfechos</div>
        <h1>Implantes Dentales en Tijuana</h1>
        <h2>70% MÁS BARATOS que en Estados Unidos</h2>
        <p className="hero-subtitle">Especialistas certificados en USA • Tecnología de vanguardia • Garantía de por vida</p>
        <div className="hero-benefits">
          <div className="benefit-item">✅ Consulta GRATIS</div>
          <div className="benefit-item">✅ Sin lista de espera</div>
          <div className="benefit-item">✅ Mismo día de tratamiento</div>
          <div className="benefit-item">✅ Financiamiento disponible</div>
        </div>
        <div className="hero-cta">
          <a
            href="https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20mi%20consulta%20GRATIS%20para%20implantes%20%F0%9F%A6%B7"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGENDA TU CONSULTA GRATIS
          </a>
          <p className="cta-subtitle">📞 O llama AHORA: +1 (619) 586-8226</p>
        </div>
        <div className="trust-indicators">
          <div className="trust-item">🏆 15+ Años de Experiencia</div>
          <div className="trust-item">🦷 2000+ Implantes Exitosos</div>
          <div className="trust-item">💯 Garantía de Por Vida</div>
        </div>
      </div>
    </section>
  </div>
);

export default Hero; 