INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Finance");

INSERT INTO role (department_id, title, salary)
VALUES ( 1, "Sales Lead", 100000),
       ( 1, "Salesperson", 80000),
       ( 2, "Lead Engineer", 150000),
       ( 2, "Software Engineer", 120000),
       ( 4, "Account Manager", 160000),
       ( 4, "Accountant", 125000),
       ( 3, "Legal Team Lead", 250000),
       ( 3, "Lawyer", 190000);

INSERT INTO employee (role_id, manager_id, first_name, last_name)
VALUES ( 1, null, "John", "Doe"),
       ( 2, 2, "Mike", "Chan"),
       ( 3, null, "Ashley", "Rodrieguez"),
       ( 4, 4, "Kevin", "Tupik"),
       ( 5, null, "Kunal", "Singh"),
       ( 6, 6, "Malia", "Brown"),
       ( 7, null, "Sarah", "Lourd"),
       ( 8, 8, "Tom", "Allen");
