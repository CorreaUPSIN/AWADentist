import React from "react";
import "./Services.css";

const services = [
  {
    img: "/AlfredoOE.jpg",
    title: "Implantes Dentales",
    oldPrice: "$3,500 USD",
    newPrice: "$1,200 USD",
    features: [
      "✅ Implante de titanio premium",
      "✅ Corona de porcelana",
      "✅ Garantía de por vida",
      "✅ Consulta GRATIS",
    ],
    badge: "MÁS POPULAR",
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20información%20sobre%20implantes%20%F0%9F%A6%B7",
  },
  {
    img: "/AprilIRB.jpg",
    title: "Ortodoncia Invisible",
    oldPrice: "$4,500 USD",
    newPrice: "$1,800 USD",
    features: [
      "✅ Alineadores invisibles",
      "✅ Tratamiento completo",
      "✅ Seguimiento incluido",
      "✅ Consulta GRATIS",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20información%20sobre%20ortodoncia%20%F0%9F%A6%B7",
  },
  {
    img: "/CaroOPD.jpg",
    title: "Blanqueamiento Profesional",
    oldPrice: "$800 USD",
    newPrice: "$150 USD",
    features: [
      "✅ Blanqueamiento láser",
      "✅ Resultados inmediatos",
      "✅ Kit de mantenimiento",
      "✅ Consulta GRATIS",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20información%20sobre%20blanqueamiento%20%F0%9F%A6%B7",
  },
  {
    img: "/ItzelCD.jpg",
    title: "Cirugía Oral",
    oldPrice: "$2,500 USD",
    newPrice: "$800 USD",
    features: [
      "✅ Extracciones complejas",
      "✅ Cirugía de muelas del juicio",
      "✅ Sedación incluida",
      "✅ Consulta GRATIS",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20información%20sobre%20cirugía%20oral%20%F0%9F%A6%B7",
  },
];

const Services = () => (
  <section id="servicios" className="services-section">
    <div className="container">
      <h2>Nuestros Servicios Premium</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className={`service-card${s.badge ? " featured" : ""}`} key={i}>
            {s.badge && <div className="service-badge">{s.badge}</div>}
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <div className="price">
              <span className="old-price">{s.oldPrice}</span>
              <span className="new-price">{s.newPrice}</span>
            </div>
            <ul className="service-features">
              {s.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <a href={s.link} className="btn-service" target="_blank" rel="noopener noreferrer">
              CONSULTA GRATIS
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 