#[macro_use]
extern crate rocket;

mod db;
mod routes;
mod models;
mod schema;

use db::DbConn;
use rocket_cors::{AllowedOrigins, CorsOptions};

#[launch]
fn rocket() -> _ {
    // Configurar CORS para permitir solicitudes desde cualquier origen.
    let allowed_origins = AllowedOrigins::all();

    let cors = CorsOptions {
        allowed_origins,
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("Error al crear la configuración de CORS");

    rocket::build()
        .attach(cors)
        .attach(DbConn::fairing())
        .mount("/", routes![
            routes::login,
            routes::get_menu,
            routes::get_gatos,
            routes::get_images,
            routes::get_content_landing,
        ])
}
