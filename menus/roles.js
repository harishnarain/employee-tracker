const { prompt } = require("inquirer");
const roles = require("../controllers/roles");
const departments = require("../controllers/departments");

const promptRole = async () => {
  return await roles.getAll().then(async (res) => {
    return await prompt([
      {
        name: "role",
        type: "rawlist",
        choices: () => {
          const choicesArr = [];
          res.forEach((role) => {
            choicesArr.push({
              value: role.id,
              name: role.title,
            });
          });
          return choicesArr;
        },
        message: "Select Role:",
      },
    ]).then((ans) => {
      return ans.role;
    });
  });
};

const promptDepartment = async () => {
  return await departments.getAll().then(async (res) => {
    return await prompt([
      {
        name: "department",
        type: "rawlist",
        choices: () => {
          const choicesArr = [];
          res.forEach((dept) => {
            choicesArr.push({
              value: dept.id,
              name: dept.name,
            });
          });
          return choicesArr;
        },
        message: "Select Department:",
      },
    ]).then((ans) => {
      return ans.department;
    });
  });
};

const addRole = async () => {
  const roleObject = {};
  await prompt([
    {
      name: "title",
      type: "input",
      message: "Enter title:",
    },
    {
      name: "salary",
      type: "number",
      message: "Enter salary amount:",
    },
  ]).then((ans) => {
    roleObject.title = ans.title;
    roleObject.salary = ans.salary;
  });
  roleObject.department_id = await promptDepartment();
  return await roles.add(roleObject);
};

const removeRole = async () => {
  const roleId = await promptRole();
  return await roles.remove(roleId);
};

const show = async () => {
  await prompt([
    {
      type: "list",
      name: "roleOption",
      message: "Please select an option",
      choices: [
        {
          name: "Display all roles",
          value: "displayRoles",
        },
        {
          name: "Add role",
          value: "addRole",
        },
        {
          name: "Delete Role",
          value: "deleteRole",
        },
        {
          name: "Cancel",
          value: "cancel",
        },
      ],
    },
  ]).then(async (ans) => {
    switch (ans.roleOption) {
      case "displayRoles":
        return roles.showAll();
      case "addRole":
        return await addRole();
      case "deleteRole":
        return await removeRole();
      default:
        break;
    }
  });
};

module.exports = { show };
