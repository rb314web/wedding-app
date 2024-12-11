import React from "react";
import "../assets/style/Hero.scss";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        {/* <h1 className="hero_content_title"></h1> */}
        <p className="hero_content_subtitle">Efektywniej. Wydajniej. Razem.</p>
        <button className="hero_content_button">Sprawdz naszą ofertę</button>
      </div>
      <div className="hero_shadow"></div>
    </section>
  );
};

export default HeroSection;
