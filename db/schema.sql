DROP DATABASE IF EXISTS stocks_dev;

CREATE DATABASE stocks_dev;

\c stocks_dev;

CREATE TABLE stocks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL,
    quantity INT,
    purchaseDate DATE,
    optionType TEXT,
    expiryDate DATE
);