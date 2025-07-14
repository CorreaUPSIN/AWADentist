import React, { useEffect, useState } from "react";
import "./UrgencySection.css";

function getTimeLeft() {
  const now = new Date();
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const timeLeft = endDate - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
}

const UrgencySection = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="urgency-section">
      <div className="container">
        <div className="urgency-content">
          <h2>⚠️ OFERTA LIMITADA - SOLO ESTE MES</h2>
          <p>Consulta GRATIS + 20% descuento en implantes + plan de pagos sin intereses</p>
          <div className="countdown">
            <div className="countdown-item">
              <span className="number">{String(time.days).padStart(2, "0")}</span>
              <span className="label">Días</span>
            </div>
            <div className="countdown-item">
              <span className="number">{String(time.hours).padStart(2, "0")}</span>
              <span className="label">Horas</span>
            </div>
            <div className="countdown-item">
              <span className="number">{String(time.minutes).padStart(2, "0")}</span>
              <span className="label">Minutos</span>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20aprovechar%20la%20oferta%20especial%20%F0%9F%A6%B7"
            className="btn-urgency"
            target="_blank"
            rel="noopener noreferrer"
          >
            APROVECHAR OFERTA AHORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection; 