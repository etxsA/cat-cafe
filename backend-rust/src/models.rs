// Models
// src/models.rs
use serde::{Deserialize, Serialize};

#[derive(Queryable, Serialize, Deserialize)]
pub struct Usuario {
    pub id: i32,
    pub usuario: String,
    pub password_hash: String,
}


#[derive(Queryable, Serialize, Deserialize)]
pub struct Platillo {
    pub id: i32, 
    pub nombre: String, 
    pub precio: i32, 
}

#[derive(Queryable, Serialize, Deserialize)]
pub struct Gato {
    pub id: i32, 
    pub nombre: String, 
    pub foto: String, 
    pub description: String,
}

