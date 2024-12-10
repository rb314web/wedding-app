import React from 'react';
import '../assets/style/HomePage.scss'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Twój Wymarzony Dzień</h1>
      <p>Z nami stworzysz niezapomniane wspomnienia.</p>
      <button>Zapytaj o ofertę</button>
    </section>
  );
};

export default Hero;