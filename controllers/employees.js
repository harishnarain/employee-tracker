// Dependencies
const cTable = require("console.table");
const {
  getEmployeeAll,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  deleteEmployee,
} = require("../models/employees");

// Globals

// Methods
const showAll = (filter) => {
  // filter should be an object defined as {managerId: 1, department: 1}
  getEmployeeAll(filter).then((res) => {
    console.table(res);
  });
};

const add = (employeeObj) => {
  addEmployee(employeeObj).then((res) => {
    console.log(`${res.affectedRows} row(s) added.`);
  });
};

const remove = (id) => {
  deleteEmployee(id).then((res) => {
    console.log(`${res.affectedRows} row(s) removed.`);
  });
};

const updateRole = (id, roleId) => {
  updateEmployeeRole(id, roleId).then((res) => {
    console.log(`${res.affectedRows} row(s) updated.`);
  });
};

const updateManager = (id, managerId) => {
  updateEmployeeManager(id, managerId).then((res) => {
    console.log(`${res.affectedRows} row(s) updated.`);
  });
};

// Exports
module.exports = { showAll, add, updateRole, updateManager, remove };
