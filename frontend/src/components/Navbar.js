import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

function Navbar() {
  const [imagenes, setImagenes] = useState({});
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/imagenes");
        if (!response.ok) throw new Error("Error fetching imagenes");
        const data = await response.json();
        setImagenes(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImagenes();
  }, []);

  const logo = imagenes["logo"] || imagenes["logo.png"];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
      {isAuthenticated ? (
        <>
          <Link to="/menu" className="nav-link">
            <button className="glow-on-hover">Menu</button>
          </Link>
          <Link to="/sam" className="nav-link">
            <button className="glow-on-hover">Sam... ?</button>
          </Link>
          <button onClick={handleLogout} className="glow-on-hover">
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="nav-link">
          <button className="glow-on-hover">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;