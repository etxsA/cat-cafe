import React, { useState, useEffect } from "react";
import "../styles/sam.css";

function Sam() {
  const [content, setContent] = useState({});
  const [imagenes, setImagenes] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/sam-content")
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(err => console.error("Error fetching SAM content:", err));
  }, []);

  useEffect(() => {

    fetch("http://localhost:8000/api/sam-image")
      .then(response => response.json())
      .then(data => setImagenes(data))
      .catch(err => console.error("Error fetching images:", err));
  }, []);

  const samImage = imagenes["sam"];

  return (
    <div className="sam-page">
      <div className="sam-container">
        <h1 className="sam-title">{content.sam_title}</h1>
        <h3 className="sam-subtitle">{content.sam_subtitle}</h3>
        <div className="sam-image-container">
          <img src={samImage} alt="Sam el Insumergible" className="sam-image" />
        </div>
        <section className="sam-section">
          <h2>Biografía</h2>
          <p>{content.sam_bio}</p>
        </section>
        <section className="sam-section">
          <h2>Historia y Aventuras</h2>
          <p>{content.sam_history}</p>
        </section>
        <section className="sam-section">
          <h2>Datos Curiosos</h2>
          <p>{content.sam_facts}</p>
        </section>
        <footer className="sam-footer">
          <p>
            Fuente:{" "}
            <a
              href="https://historia.nationalgeographic.com.es/a/leyenda-insumergible-sam-gato-que-sobrevivio-a-tres-naufragios-durante-segunda-guerra-mundial_19884"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Geographic
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Sam;
