const { prompt } = require("inquirer");
const employees = require("../controllers/employees");
const departments = require("../models/departments");
const roles = require("../models/roles");

const promptDepartment = async () => {
  return await departments.getDepartmentAll().then(async (res) => {
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

const promptRole = async () => {
  return await roles.getRoleAll().then(async (res) => {
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

const showEmployeesByDept = async () => {
  return promptDepartment().then((ans) => {
    return employees.showAll({ departmentId: ans });
  });
};

const promptManagers = async () => {
  return await employees.getManagers().then(async (res) => {
    return await prompt([
      {
        name: "manager",
        type: "rawlist",
        choices: () => {
          const choicesArr = [];
          res.forEach((manager) => {
            choicesArr.push({
              value: manager.id,
              name: `${manager.first_name} ${manager.last_name}`,
            });
          });
          return choicesArr;
        },
        message: "Select Manager:",
      },
    ]).then((ans) => {
      return ans.manager;
    });
  });
};

const promptEmployee = async () => {
  return await employees.getAll().then(async (res) => {
    return await prompt([
      {
        name: "employee",
        type: "rawlist",
        choices: () => {
          const choicesArr = [];
          res.forEach((employee) => {
            choicesArr.push({
              value: employee.id,
              name: `${employee.first_name} ${employee.last_name}`,
            });
          });
          return choicesArr;
        },
        message: "Select Employee:",
      },
    ]).then((ans) => {
      return ans.employee;
    });
  });
};

const removeEmployee = async () => {
  const employeeId = await promptEmployee();
  return await employees.remove(employeeId);
};

const showEmployeesByManager = async () => {
  return promptManagers().then((ans) => {
    return employees.showAll({ managerId: ans });
  });
};

const addEmployee = async (empType) => {
  const empObject = {};
  await prompt([
    {
      name: "firstName",
      type: "input",
      message: "Enter employee's first name:",
    },
    {
      name: "lastName",
      type: "input",
      message: "Enter employee's last name:",
    },
  ]).then((ans) => {
    empObject.first_name = ans.firstName;
    empObject.last_name = ans.lastName;
  });

  if (!empType) {
    empObject.manager_id = await promptManagers();
  }
  empObject.role_id = await promptRole();
  return await employees.add(empObject);
};

const updateRole = async () => {
  const employeeId = await promptEmployee();
  const roleId = await promptRole();
  employees.updateRole(employeeId, roleId);
};

const updateManager = async () => {
  const employeeId = await promptEmployee();
  const managerId = await promptManagers();
  employees.updateManager(employeeId, managerId);
};

const updateEmployee = async () => {
  await prompt([
    {
      type: "list",
      name: "updateOption",
      message: "Please select option:",
      choices: [
        {
          name: "Update employee's role",
          value: "updateRole",
        },
        {
          name: "Update employee's manager",
          value: "updateManager",
        },
        {
          name: "Cancel",
          value: "cancel",
        },
      ],
    },
  ]).then(async (ans) => {
    switch (ans.updateOption) {
      case "updateRole":
        return await updateRole();
      case "updateManager":
        return await updateManager();
      default:
        break;
    }
  });
};

const show = async () => {
  await prompt([
    {
      type: "list",
      name: "employeeOption",
      message: "Please select an option:",
      choices: [
        {
          name: "Display all employees",
          value: "displayEmployees",
        },
        {
          name: "Display employees by department",
          value: "displayEmpByDept",
        },
        {
          name: "Display employees by manager",
          value: "displayEmpByMgr",
        },
        {
          name: "Add employee",
          value: "addEmployee",
        },
        {
          name: "Add Manager",
          value: "addManager",
        },
        {
          name: "Delete employee",
          value: "deleteEmployee",
        },
        {
          name: "Update employee",
          value: "updateEmployee",
        },
        {
          name: "Cancel",
          value: "cancel",
        },
      ],
    },
  ]).then(async (ans) => {
    switch (ans.employeeOption) {
      case "displayEmployees":
        return employees.showAll();
      case "displayEmpByDept":
        return await showEmployeesByDept();
      case "displayEmpByMgr":
        return await showEmployeesByManager();
      case "addEmployee":
        return await addEmployee();
      case "addManager":
        return await addEmployee("manager");
      case "deleteEmployee":
        return await removeEmployee();
      case "updateEmployee":
        return await updateEmployee();
      default:
        break;
    }
  });
};

module.exports = { show };
