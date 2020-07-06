DROP DATABASE IF EXISTS employeedb;

CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE employee
(
  id INT AUTO_INCREMENT,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
);

CREATE TABLE role
(
  id INT AUTO_INCREMENT,
  role VARCHAR(30),
);

CREATE TABLE department
(
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);


