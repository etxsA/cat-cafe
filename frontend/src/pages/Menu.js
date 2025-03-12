import React, { useState, useEffect, useRef } from "react";
import "../styles/menu.css";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/menu")
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(err => console.error("Error fetching menu items:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/imagenes")
      .then(response => response.json())
      .then(data => setImagenes(data))
      .catch(err => console.error("Error fetching imagenes:", err));
  }, []);

  // Juego
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    let animationFrameId;
    let score = 0;

    // Objeto gato 
    const cat = {
      width: 50,
      height: 50,
      x: width / 2 - 25,
      y: height - 60,
      speed: 5
    };

    // Arrays para balas y meteoritos
    let bullets = [];
    let meteorites = [];

    // Estado de las teclas
    const keys = { left: false, right: false, space: false };

    // Eventos para controlar
    function handleKeyDown(e) {
      if (e.code === "ArrowLeft") keys.left = true;
      if (e.code === "ArrowRight") keys.right = true;
      if (e.code === "Space") keys.space = true;
    }
    function handleKeyUp(e) {
      if (e.code === "ArrowLeft") keys.left = false;
      if (e.code === "ArrowRight") keys.right = false;
      if (e.code === "Space") keys.space = false;
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Función para crear meteoritos
    function spawnMeteorite() {
      const size = Math.random() * 20 + 20; 
      meteorites.push({
        x: Math.random() * (width - size),
        y: -size,
        width: size,
        height: size,
        speed: Math.random() * 2 + 1 
      });
    }

    // Control del disparo
    let lastShotTime = 0;

    function updateGame() {
      // Limpiar canvas y dibujar fondo espacial
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Mostrar puntaje
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${score}`, 10, 25);

      // Mover gato
      if (keys.left && cat.x > 0) {
        cat.x -= cat.speed;
      }
      if (keys.right && cat.x < width - cat.width) {
        cat.x += cat.speed;
      }

      // Dibujar gato (rectángulo amarillo)
      ctx.fillStyle = "#ffcc00";
      ctx.fillRect(cat.x, cat.y, cat.width, cat.height);

      // Disparar balas si se presiona la barra espaciadora (con cooldown)
      if (keys.space) {
        const now = Date.now();
        if (now - lastShotTime > 300) { // 300ms entre disparos
          bullets.push({
            x: cat.x + cat.width / 2 - 2.5,
            y: cat.y,
            width: 5,
            height: 10,
            speed: 7
          });
          lastShotTime = now;
        }
      }

      // Actualizar balas
      bullets.forEach((bullet, bulletIndex) => {
        bullet.y -= bullet.speed;
        // Remover bala si sale de la pantalla
        if (bullet.y < 0) {
          bullets.splice(bulletIndex, 1);
        }
      });

      // Dibujar balas 
      bullets.forEach(bullet => {
        ctx.fillStyle = "red";
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      });

      // Generar meteoritos
      if (Math.random() < 0.02) {
        spawnMeteorite();
      }

      // Actualizar meteoritos y comprobar colisiones
      meteorites.forEach((meteorite, mIndex) => {
        meteorite.y += meteorite.speed;
        // Dibujar meteorito 
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.arc(
          meteorite.x + meteorite.width / 2,
          meteorite.y + meteorite.height / 2,
          meteorite.width / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.closePath();

        // Remover meteorito si sale de la pantalla
        if (meteorite.y > height) {
          meteorites.splice(mIndex, 1);
        }

        // Comprobar colisiones entre balas y meteoritos
        bullets.forEach((bullet, bIndex) => {
          if (
            bullet.x < meteorite.x + meteorite.width &&
            bullet.x + bullet.width > meteorite.x &&
            bullet.y < meteorite.y + meteorite.height &&
            bullet.y + bullet.height > meteorite.y
          ) {
            meteorites.splice(mIndex, 1);
            bullets.splice(bIndex, 1);
            score++;
          }
        });
      });

      animationFrameId = requestAnimationFrame(updateGame);
    }

    updateGame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="menu-page">
      {/* Contenedor de items del menú */}
      <div className="menu-container">
        <h2>Our Cosmic Menu</h2>
        <div className="menu-items">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <img
                src={imagenes[item.nombre] || imagenes["menu_default"]}
                alt={item.nombre}
                className="menu-item-image"
              />
              <h3>{item.nombre}</h3>
              <p>${item.precio.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Juego */}
      <div className="game-container">
        <h2> Juega Mientras Esperas</h2>
        <canvas ref={canvasRef} width="800" height="300"></canvas>
      </div>
    </div>
  );
}

export default Menu;
