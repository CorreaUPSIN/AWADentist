import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "💰",
    title: "Ahorra hasta $15,000",
    desc: "Implantes 70% más baratos que en USA con la misma calidad",
  },
  {
    icon: "⚡",
    title: "Mismo día de tratamiento",
    desc: "Sin listas de espera, agenda tu cita para esta semana",
  },
  {
    icon: "🎓",
    title: "Especialistas certificados",
    desc: "Doctores con certificaciones de USA y Europa",
  },
  {
    icon: "🛡️",
    title: "Garantía de por vida",
    desc: "Tu inversión está protegida para siempre",
  },
  {
    icon: "💳",
    title: "Financiamiento flexible",
    desc: "Pagos mensuales desde $99 sin intereses",
  },
  {
    icon: "🏥",
    title: "Clínica de lujo",
    desc: "Instalaciones modernas con tecnología de vanguardia",
  },
];

const WhyChooseUs = () => (
  <section id="por-que-elegirnos" className="why-choose-us">
    <div className="container">
      <h2>¿Por Qué 500+ Pacientes Nos Eligen?</h2>
      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <div className="reason-card" key={i}>
            <div className="reason-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 