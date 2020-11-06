const { prompt } = require("inquirer");
const employeeMenu = require("./employees");
const roleMenu = require("./roles");
const departmentMenu = require("./departments");
const db = require("../util/db");

const show = () => {
  prompt([
    {
      type: "list",
      name: "managementCategory",
      message: "Please select an option:",
      choices: [
        {
          name: "Employee Management",
          value: "employee",
        },
        {
          name: "Role Management",
          value: "role",
        },
        {
          name: "Department Management",
          value: "department",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ]).then(async (ans) => {
    switch (ans.managementCategory) {
      case "employee":
        await employeeMenu.show();
        break;
      case "role":
        await roleMenu.show();
        break;
      case "department":
        await departmentMenu.show();
        break;
      default:
        return db.close();
    }
    return show();
  });
};

module.exports = { show };
