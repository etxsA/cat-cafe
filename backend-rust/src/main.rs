#[macro_use]
extern crate rocket; 

mod db;
mod routes;
mod models;
mod schema;

use rocket::{Build, Rocket};
use db::DbConn;
use rocket_cors::{AllowedOrigins, CorsOptions};

#[launch]
fn rocket() -> Rocket<Build> {

    // Configure CORS to allow requests from any origin.
    let allowed_origins = AllowedOrigins::all();

    // Create a CORS fairing. You can customize the options as needed.
    let cors = CorsOptions {
        allowed_origins,
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("Error creating CORS fairing");

    rocket::build()
    .attach(cors)
    .attach(DbConn::fairing())
    .mount("/", routes![
        routes::login,
        routes::get_menu,
        routes::get_gatos,
        routes::get_images,
    ])
}