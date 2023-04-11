DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT NOT NULL,
  salary DECIMAL NOT NULL,
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
);