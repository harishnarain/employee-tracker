const { prompt } = require("inquirer");
const departments = require("../controllers/departments");

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

const addDepartment = async () => {
  return await prompt([
    {
      name: "departmentName",
      type: "input",
      message: "Enter department name:",
    },
  ]).then(async (ans) => {
    return await departments.add(ans.departmentName);
  });
};

const removeDepartment = async () => {
  const departmentId = await promptDepartment();
  return await departments.remove(departmentId);
};

const show = async () => {
  await prompt([
    {
      type: "list",
      name: "departmentOption",
      message: "Please select an option:",
      choices: [
        {
          name: "Display all departments",
          value: "displayDepartments",
        },
        {
          name: "Add department",
          value: "addDepartment",
        },
        {
          name: "Delete department",
          value: "deleteDepartment",
        },
        {
          name: "Cancel",
          value: "cancel",
        },
      ],
    },
  ]).then(async (ans) => {
    switch (ans.departmentOption) {
      case "displayDepartments":
        return departments.showAll();
      case "addDepartment":
        return await addDepartment();
      case "deleteDepartment":
        return await removeDepartment();
      default:
        break;
    }
  });
};

module.exports = { show };
