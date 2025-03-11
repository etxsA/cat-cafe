use bcrypt::{hash, DEFAULT_COST};

fn main() {
    let password = "admin123";
    let password1 = "catlover";
    let password2 = "stars";
    let password_hash = hash(password, DEFAULT_COST).unwrap();
    let password_hash1 = hash(password1, DEFAULT_COST).unwrap();
    let password_hash2 = hash(password2, DEFAULT_COST).unwrap();
    
    println!("password_hash1: {}", password_hash);
    println!("password_hash2: {}", password_hash1);
    println!("password_hash3: {}", password_hash2);
}