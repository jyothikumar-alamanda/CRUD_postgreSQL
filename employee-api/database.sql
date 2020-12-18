// create database
CREATE DATABASE test;

// go into the database before creating a table
\c test

// create employess table
CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    office VARCHAR(255),
    salary REAL
);