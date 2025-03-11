-- Tabla de gatos
CREATE TABLE IF NOT EXISTS gatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    foto TEXT NOT NULL,
    descripcion TEXT NOT NULL
);

-- Tabla de platillos
CREATE TABLE IF NOT EXISTS platillos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL
);

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT NOT NULL,
    pass TEXT NOT NULL
);

-- Insertar 5 datos de prueba en gatos
INSERT INTO gatos (nombre, foto, descripcion) VALUES
('Cosmo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cat_Eyes.jpg/480px-Cat_Eyes.jpg', 'El gato aventurero del cosmos'),
('Nova', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/360px-Cat03.jpg', 'La guardiana de la galaxia felina'),
('Stella', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Greycat.jpg/480px-Greycat.jpg', 'Exploradora estelar con gran curiosidad'),
('Orion', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kot_Leon.JPG/480px-Kot_Leon.JPG', 'Amante de los asteroides y el chill interestelar'),
('Luna', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Black_white_cat_on_fence.jpg/352px-Black_white_cat_on_fence.jpg', 'La reina de la Vía Láctea y compañera serena');

-- Insertar 5 datos de prueba en platillos
INSERT INTO platillos (nombre, precio) VALUES
('Meteorito Capuchino', 80.0),
('Nebulosa Frappé', 90.5),
('Galaxy Cake', 120.0),
('Eclipse de Chocolate', 70.0),
('Saturno Latte', 85.0);

-- Insertar 3 usuarios de prueba
INSERT INTO usuarios (usuario, pass) VALUES
--- admin123
('admin', '$2b$12$qa.oQctSLqpYF7HWagMq1.hqnCB9ILZzUcdBj5qmXzWP/OoYs9TnS'),
('cosmic', '$2b$12$6VbKTpPIsu2b2Wn4u/Z01uVn5CWzCf/.4Kjsl/QVAcIqYCXczGxMG'),
('galaxy', '$2b$12$nxpVx1uySH7cUaU38FieG.10iKnal1UxNs2Qr.mK0eGNdBfYtTsl2'),
('galaxy2', '$2b$12$nxpVx1uySH7cUaU38FieG.10iKnal1UxNs2Qr.mK0eGNdBfYtTsl2'),
('galaxy1', '$2b$12$nxpVx1uySH7cUaU38FieG.10iKnal1UxNs2Qr.mK0eGNdBfYtTsl2');

