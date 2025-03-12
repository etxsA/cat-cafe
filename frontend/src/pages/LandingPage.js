// frontend/src/pages/LandingPage.js
import React, { useEffect, useState } from "react";
import "../styles/landing.css";

function LandingPage() {
  const [content, setContent] = useState({});
  const [gatos, setGatos] = useState([]);
  const [imagenes, setImagenes] = useState({});

  useEffect(() => {
    fetchContent();
    fetchGatos();
    fetchImagenes();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch("http://localhost:8000/content-landingpage");
      if (!response.ok) throw new Error("Error fetching content");
      const data = await response.json();
      setContent(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchGatos = async () => {
    try {
      const response = await fetch("http://localhost:8000/gatos");
      if (!response.ok) throw new Error("Error fetching gatos");
      const data = await response.json();
      setGatos(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImagenes = async () => {
    try {
      const response = await fetch("http://localhost:8000/imagenes");
      if (!response.ok) throw new Error("Error fetching imagenes");
      const data = await response.json();
      setImagenes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const landingImage = imagenes.landing_image;

  return (
    <div className="container">
      <div className="landing-container">
        <div className="comet comet1" />
        <div className="comet comet2" />
        <div className="comet comet3" />
        <div className="comet comet4" />
        <div className="comet comet5" />
        <div className="comet comet6" />
        <div className="landing-content">
          <h1>{content.landing_title}</h1>
          <p>{content.landing_subtitle}</p>
        </div>
        {landingImage && (
          <img
            src={landingImage}
            alt="Floating Cat"
            className="floating-cat"
          />
        )}
      </div>
      {/* Mostrar todos los gatos */}
      <section className="gatos-section">
        <h2>{content.cats_info}</h2>
        <div className="gatos-grid">
          {gatos.map((gato) => (
            <div key={gato.id} className="gato-card">
              <img src={gato.foto} alt={gato.nombre} />
              <h3>{gato.nombre}</h3>
              <p>{gato.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
