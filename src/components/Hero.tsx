import React from "react";
import "../assets/style/Hero.scss";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        {/* <h1 className="hero_content_title"></h1> */}
        <p className="hero_content_subtitle">Efektywniej. Wydajniej. Razem.</p>
        {/* <button className="hero_content_button">Sprawdz naszą ofertę</button> */}
        <button className="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>Sprawdz naszą ofertę</span>
      </button>
      </div>
      <div className="hero_shadow"></div>
    </section>
  );
};

export default HeroSection;
