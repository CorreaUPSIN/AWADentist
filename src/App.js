import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import UrgencySection from "./UrgencySection";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import Specialists from "./Specialists";
import Testimonials from "./Testimonials";
import Appointment from "./Appointment";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrgencySection />
      <WhyChooseUs />
      <Services />
      <Specialists />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
