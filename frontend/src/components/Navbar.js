import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [imagenes, setImagenes] = useState({});

  useEffect(() => {
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
    fetchImagenes();
  }, []);

  const logo = imagenes.logo;

  return (
    <nav className="main-nav">
      {logo && (
        <div className="logo-container">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
      )}
      <Link to="/" className="nav-link">
        <button className="glow-on-hover">Inicio</button>
      </Link>
      <Link to="/login" className="nav-link">
        <button className="glow-on-hover">Login</button>
      </Link>
      <Link to="/menu" className="nav-link">
        <button className="glow-on-hover">Menu</button>
      </Link>
      <Link to="/sam" className="nav-link">
        <button className="glow-on-hover">Sam... ?</button>
      </Link>
    </nav>
  );
}

export default Navbar;
