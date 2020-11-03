USE employee_db;

/* Seed departments */
INSERT INTO departments (id, name)
VALUES (1, "Sales");

INSERT INTO departments (id, name)
VALUES (2, "Customer Support");

INSERT INTO departments (id, name)
VALUES (3, "Information Technology");

/* Seed roles */
INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Manager", 120000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES (2, "Account Manager", 90000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES (3, "Account Delivery Executive", 90000, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES (4, "Customer Service Rep", 75000, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "IT Director", 100000, 3);

INSERT INTO roles (id, title, salary, department_id)
VALUES (6, "Software Engineer", 95000, 3);

/* Seed employees */
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Mary", "Scott", 1, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sam", "Spade", 2, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Jill", "Stewart", 3, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Wayne", "Elger", 4, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Edward", "Wong", 5, null);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Akshay", "Bhatia", 6, 5);