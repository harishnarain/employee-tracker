const { prompt, createPromptModule } = require("inquirer");

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
      ],
    },
  ]).then((ans) => {
    switch (ans.managementCategory) {
      case "employee":
        console.log("Employee management selected");
        break;
      case "role":
        console.log("Role management selected");
        break;
      case "department":
        console.log("Department management selected");
        break;
    }
  });
};

module.exports = { show };
