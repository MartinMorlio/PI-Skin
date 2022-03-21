CREATE DATABASE skin;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR,
    price number
)