# Employee Tracker - Yet another employee tracker command line application
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, the challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Table of Contents
- [Employee Tracker - Yet another employee tracker command line application](#employee-tracker---yet-another-employee-tracker-command-line-application)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Screenshots](#screenshots)
  - [Questions](#questions)

## Installation
1. Clone this GitHub repository

   ```
   git clone git@github.com:harishnarain/employee-tracker.git
   ```

2. Install all dependent npm packages

   ```
   npm install --save
   ```
3. Create the **employee_db** database running the script `sql-scripts/0_createdb.sql` in MySQL
4. Create the **departments** table running the script `sql-scripts/1_departments.sql` in MySQL
5. Create the **roles** table running the script `sql-scripts/2_roles.sql` in MySQL
6. Create the **employees** table running the script `sql-scripts/3_employees.sql` in MySQL
7. Seed mock data running the script `sql-scripts/4_seed.sql` in MySQL

## Usage
1. Run `npm start` to start the application
2. Choose **Employee**, **Role** or **Department** management categories and use the submenus to run the appropriate operations
## Features
* Display all employees
* Display employees by department
* Display employees by manager
* Display roles
* Display departments
* Display utilized budget of department
* Add employees
* Add managers
* Add roles
* Add departments
* Delete employees
* Delete roles
* Delete departments
* Update employee's role
* Update employee's department


## License
This project uses the MIT license
## Contributing
Pull requests are welcome
## Screenshots
**View operations**

[![View operations](http://img.youtube.com/vi/O694BQXE5qo/3.jpg)](https://youtu.be/O694BQXE5qo)

**Add operations**

[![Add operations](http://img.youtube.com/vi/cUJlylX5iYU/2.jpg)](https://youtu.be/cUJlylX5iYU)

**Update operations**

[![Update operations](http://img.youtube.com/vi/GgWYEKWmW-A/3.jpg)](https://youtu.be/GgWYEKWmW-A)

**Delete operations**

[![Delete operations](http://img.youtube.com/vi/gMf1Vh63vDU/3.jpg)](https://youtu.be/gMf1Vh63vDU)

## Questions
Checkout my GitHub [profile](https://github.com/harishnarain)

Please feel free to email at: <harishnarain@gmail.com>