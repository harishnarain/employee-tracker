/* Initialize new database and schema */

/* Create DB */
SOURCE 0_createdb.sql;

/* Create departments table */
SOURCE 1_departments.sql;

/* Create roles table */
SOURCE 2_roles.sql;

/* Create employees table */
SOURCE 3_employees.sql;

/* Seed mock data */
SOURCE 4_seed.sql;