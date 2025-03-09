-- Database Initialization
-- backend/sql/init.sql
DROP TABLE IF EXISTS gatos;
DROP TABLE IF EXISTS platillos;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE gatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    foto TEXT NOT NULL,
    descripcion TEXT NOT NULL
);

CREATE TABLE platillos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL
);

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT NOT NULL UNIQUE,
    contrasena TEXT NOT NULL
);

/* Default cats*/
INSERT INTO gatos (nombre, foto, descripcion) VALUES
('Nebulosa', 'https://via.placeholder.com/150?text=Nebulosa', 'Un gato misterioso que adora flotar entre las estrellas.'),
('Galaxio', 'https://via.placeholder.com/150?text=Galaxio', 'Le encanta perseguir cometas y rayos de luz.'),
('Astrix', 'https://via.placeholder.com/150?text=Astrix', 'Hábil cazador de asteroides.'),
('Cosmo', 'https://via.placeholder.com/150?text=Cosmo', 'Siempre soñando con viajes interplanetarios.'),
('Nova', 'https://via.placeholder.com/150?text=Nova', 'Tan brillante que ilumina cualquier rincón cósmico.');

/*Default plates*/
INSERT INTO platillos (nombre, precio) VALUES
('Pastel de Estrellas', 5.99),
('Café Cósmico', 2.50),
('Muffin Lunar', 3.25),
('Té de Saturno', 2.00),
('Bagel Espacial', 4.00);

/* Default Users*/
INSERT INTO usuarios (usuario, contrasena) VALUES
('admin', 'adminpass'),
('spacelover', 'cosmos123'),
('astrocat', 'galaxy999'),
('nebula', 'milkyway'),
('rocketman', '1234');
