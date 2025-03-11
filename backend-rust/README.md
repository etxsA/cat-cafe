# RUST Backend 
A simple implementation of rust backend to run the api.
## Build 
```console 
cargo build --release
```
To run the code simply use cargo run
## Initialize sqlite db
To initialize the db file, disiel is used. 
Run the following command to run the migration: 
```console
diesel migration run --database-url cosmic_cat_cafe.db
```

## Create default hashes for passwords
The project works with hardcoded passwords, to create the hashes there is a bin that can be executed with the command:
```console
cargo run --bin hash_sample_pass
```
The resulting hashes should be added to database migration, so it can be initialized succesfully. 

## Diesel Schemes
Scheme is generated using the diesel_cli 
```console
diesel print-schema --database-url cosmic_cat_cafe.db > src/schema.rs 
```

## Database connection 
Database connection is handled through rocket sync. 