-- adding values into tables

INSERT INTO department(deptname)
VALUES
("Engineering"),
("Finance"),
("Legal");

INSERT INTO emprole (title, salary, department_id)
VALUES
("Software Engineer", 120000, 1),
("Tech Lead", 200000, 1),
("Account Manager", 16000, 2),
("Accountant", 10000,2),
("Lawyer", 18000, 3),
("Legal Team Lead", 25000, 3);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
 VALUES
 ("John", "Doe" ,2, NULL),
 ("Mike", "Chan" ,1, 1),
 ("Sarah", "Lourd" ,6, NULL),
 ("Tom", "Allen" ,5, 3),
 ("Kunal", "Singh" ,3, NULL),
 ("Maria", "Brown" ,4, 5);
