use serde::{Deserialize, Serialize};
use diesel::prelude::*;

#[derive(Queryable, Serialize, Deserialize)]
pub struct Usuario {
    pub id: Option<i32>,
    pub usuario: String,
    pub pass: String,
}

#[derive(Queryable, Serialize, Deserialize)]
pub struct Platillo {
    pub id: Option<i32>,
    pub nombre: String, 
    pub precio: f32,
}

#[derive(Queryable, Serialize, Deserialize)]
pub struct Gato {
    pub id: Option<i32>,
    pub nombre: String, 
    pub foto: String, 
    pub descripcion: String,
}
