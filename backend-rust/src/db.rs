// Connection to db 
use rocket_sync_db_pools::{database, diesel};

#[database("cosmic_cat_cafe")]
pub struct DbConn(diesel::SqliteConnection);