diesel::table! {
    gatos (id) {
        id -> Nullable<Integer>,
        nombre -> Text,
        foto -> Text,
        descripcion -> Text,
    }
}

diesel::table! {
    platillos (id) {
        id -> Nullable<Integer>,
        nombre -> Text,
        precio -> Float,
    }
}

diesel::table! {
    usuarios (id) {
        id -> Nullable<Integer>,
        usuario -> Text,
        pass -> Text,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    gatos,
    platillos,
    usuarios,
);
