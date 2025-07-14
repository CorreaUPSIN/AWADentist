import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    stars: 5,
    text: "Increíble experiencia. Ahorré $12,000 en mis implantes y la calidad es excelente. El Dr. Alfredo es un profesional increíble.",
    author: "María G.",
    location: "San Diego, CA",
  },
  {
    stars: 5,
    text: "Mi sonrisa se ve perfecta después del blanqueamiento. Solo $150 vs $800 en USA. Definitivamente volveré.",
    author: "Carlos R.",
    location: "Los Angeles, CA",
  },
  {
    stars: 5,
    text: "La Dra. April me ayudó con mi ortodoncia invisible. Resultados increíbles y el precio fue la mitad que en mi ciudad.",
    author: "Ana L.",
    location: "Phoenix, AZ",
  },
  {
    stars: 5,
    text: "Clínica de lujo, personal profesional, precios increíbles. Mi cirugía de muelas del juicio fue sin dolor.",
    author: "Roberto M.",
    location: "Las Vegas, NV",
  },
];

const Testimonials = () => (
  <section id="testimonios" className="testimonials-section">
    <div className="container">
      <h2>Lo Que Dicen Nuestros Pacientes</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">{"⭐".repeat(t.stars)}</div>
            <p>"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.author}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 