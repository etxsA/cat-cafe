# RUST Backend 
A simple implementation of rust backend to run the api.

## Initialize sqlite db
To initialize the db file, disiel is used. 
Run the following command to run the migration: 
```console
diesel migration run
```

## Create default hashes for passwords
The project works with hardcoded passwords, to create the hashes there is a bin that can be executed with the command:
```console
cargo run --bin hash_sample_pass
```
The resulting hashes should be added to database migration, so it can be initialized succesfully. 
