// Definition of routes of the api 
use rocket::http::Status; 
use rocket::response::status;
use rocket::serde::json::Json;
use rocket::State; 


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
            if verify(%login_data.password, &user.pass)
        }
    }
}