# CRUD_postgreSQL
sample application for CRUD operations using postgreSQL with Angular UI

some database pre-requisites

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

you can also find this in database.sql file located inside of employee-api
