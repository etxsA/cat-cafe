use std::collections::HashMap;
use rocket::http::Status;
use rocket::serde::json::Json;
use once_cell::sync::Lazy;


use crate::db::DbConn; 
use crate::models::{Usuario, Platillo, Gato};
use crate::schema::{usuarios, platillos, gatos};
use diesel::prelude::*;
use bcrypt::verify;


#[derive(serde::Deserialize)]
pub struct LoginRequest { 
    usuario: String, 
    password: String,
}


#[post("/login", format="json", data="<login_request>")]
pub async fn login(conn: DbConn, login_request: Json<LoginRequest>) -> Result<Json<bool>, Status> {
    let login_data = login_request.into_inner();
    let result = conn.run(move |c| {
        usuarios::table
            .filter(usuarios::usuario.eq(login_data.usuario))
            .first::<Usuario>(c)
            .optional()
    }).await;

    match result {
        Ok(Some(user)) => {
            // Verificamos contraseña

            if verify(&login_data.password, &user.pass).unwrap_or(false) {
                Ok(Json(true))
            } else {
                Ok(Json(false))
            }
        }
        Ok(None) => {
            // Usuario no encontrado
            Ok(Json(false))
        }
        Err(_) => {
            // Enviar Error
            Err(Status::InternalServerError)
        }

    }
}

// Menú

#[get("/menu")]
pub async fn get_menu(conn: DbConn) -> Result<Json<Vec<Platillo>>, Status> {
    let result = conn.run(|c| {
        platillos::table
        .load::<Platillo>(c)
    }).await;

    match result { 
        Ok(menu) => Ok(Json(menu)),
        Err(_) => Err(Status::InternalServerError),
    }
}

// Infor gatos
#[get("/gatos")]
pub async fn get_gatos(conn: DbConn) -> Result<Json<Vec<Gato>>, Status> {
    let result = conn.run(|c| {
        gatos::table
            .load::<Gato>(c)
    }).await;    

    match result {
        Ok(gatos) => Ok(Json(gatos)),
        Err(_) => Err(Status::InternalServerError),
    }
}

// Imagenes
static IMAGES: Lazy<HashMap<String, String>> = Lazy::new(|| {
    let mut map = HashMap::new();
    map.insert("gato1.png".to_string(), "https://example.com/images/gato1.png".to_string());
    map.insert("gato2.png".to_string(), "https://example.com/images/gato2.png".to_string());
    map
});

#[get("/imagenes")]
pub async fn get_images() -> Json<HashMap<String, String>> {
    Json(IMAGES.clone())
}

// Textos