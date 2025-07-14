import React from "react";
import AlfredoOE from "./../public/AlfredoOE.jpg";
import AprilIRB from "./../public/AprilIRB.jpg";
import CaroOPD from "./../public/CaroOPD.jpg";
import ItzelCD from "./../public/ItzelCD.jpg";
import WilfredoOE from "./../public/WilfredoOE.jpg";
import "./Specialists.css";

const specialists = [
  {
    img: AlfredoOE,
    name: "Dr. Alfredo OE",
    specialty: "Especialista en Implantes",
    credentials: [
      "• Certificado en USA y Europa",
      "• 15+ años de experiencia",
      "• 1000+ implantes exitosos",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20agendar%20con%20el%20Dr.%20Alfredo%20%F0%9F%A6%B7",
    btn: "Agendar con Dr. Alfredo",
  },
  {
    img: AprilIRB,
    name: "Dra. April IRB",
    specialty: "Ortodoncista",
    credentials: [
      "• Especialista en ortodoncia invisible",
      "• Certificada en Invisalign",
      "• 500+ casos exitosos",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20agendar%20con%20la%20Dra.%20April%20%F0%9F%A6%B7",
    btn: "Agendar con Dra. April",
  },
  {
    img: CaroOPD,
    name: "Dra. Caro OPD",
    specialty: "Odontopediatra",
    credentials: [
      "• Especialista en niños",
      "• Certificada en sedación",
      "• Experiencia en casos complejos",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20agendar%20con%20la%20Dra.%20Caro%20%F0%9F%A6%B7",
    btn: "Agendar con Dra. Caro",
  },
  {
    img: ItzelCD,
    name: "Dra. Itzel CD",
    specialty: "Cirujana Oral",
    credentials: [
      "• Especialista en cirugía compleja",
      "• Certificada en sedación",
      "• Experiencia en casos difíciles",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20agendar%20con%20la%20Dra.%20Itzel%20%F0%9F%A6%B7",
    btn: "Agendar con Dra. Itzel",
  },
  {
    img: WilfredoOE,
    name: "Dr. Wilfredo OE",
    specialty: "Estética Dental",
    credentials: [
      "• Especialista en estética",
      "• Certificado en veneers",
      "• Transformaciones completas",
    ],
    link: "https://api.whatsapp.com/send?phone=16195868226&text=Hola!%20Quiero%20agendar%20con%20el%20Dr.%20Wilfredo%20%F0%9F%A6%B7",
    btn: "Agendar con Dr. Wilfredo",
  },
];

const Specialists = () => (
  <section id="especialistas" className="specialists-section">
    <div className="container">
      <h2>Nuestros Especialistas Certificados</h2>
      <div className="specialists-grid">
        {specialists.map((s, i) => (
          <div className="specialist-card" key={i}>
            <img src={s.img} alt={s.name} />
            <h3>{s.name}</h3>
            <p className="specialty">{s.specialty}</p>
            <p className="credentials">{s.credentials.map((c, j) => <span key={j}>{c}<br/></span>)}</p>
            <a href={s.link} className="btn-specialist" target="_blank" rel="noopener noreferrer">{s.btn}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specialists; 