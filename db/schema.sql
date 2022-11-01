-- CREATE DATABASE
DROP DATABASE IF EXISTS EMPLOYEE_TRACKER;
CREATE DATABASE EMPLOYEE_TRACKER;
USE EMPLOYEE_TRACKER;

-- CREATE TABLES

CREATE TABLE department(
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     deptname VARCHAR(30)
);

CREATE TABLE emprole(
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INT,
     FOREIGN KEY (department_id)
     REFERENCES department(id)
     ON DELETE SET NULL
);

CREATE TABLE employee(
     id INT AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT,
     manager_id INT,
     FOREIGN KEY (role_id)
     REFERENCES emprole(id)
     ON DELETE SET NULL ,
     FOREIGN KEY (manager_id)
     REFERENCES emprole(id)
     ON DELETE SET NULL 
);

SHOW DATABASES;
SHOW TABLES;