-- Database Initialization

CREATE TABLE IF NOT EXISTS gatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    foto TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS platillos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT NOT NULL UNIQUE,
    contrasena TEXT NOT NULL
);

/* Default cats*/
INSERT INTO gatos (nombre, descripcion, foto) VALUES
('Nebulosa', '', ),
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
