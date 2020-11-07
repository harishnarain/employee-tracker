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
const showAll = async (filter) => {
  // filter should be an object defined as {managerId: 1, departmentId: 1}
  await getEmployeeAll(filter).then((res) => {
    console.table(res);
  });
};

const getAll = async (filter) => {
  // filter should be an object defined as {managerId: 1, departmentId: 1}
  return await getEmployeeAll(filter).then((res) => res);
};

const getManagers = async () => {
  const filter = { managerId: "" };
  return await getEmployeeAll(filter).then((res) => res);
};

const add = async (employeeObj) => {
  await addEmployee(employeeObj).then((res) => {
    console.log(`${res.affectedRows} row(s) added.`);
  });
};

const remove = async (id) => {
  await deleteEmployee(id).then((res) => {
    console.log(`${res.affectedRows} row(s) removed.`);
  });
};

const updateRole = async (id, roleId) => {
  await updateEmployeeRole(id, roleId).then((res) => {
    console.log(`${res.affectedRows} row(s) updated.`);
  });
};

const updateManager = async (id, managerId) => {
  await updateEmployeeManager(id, managerId).then((res) => {
    console.log(`${res.affectedRows} row(s) updated.`);
  });
};

// Exports
module.exports = {
  showAll,
  getManagers,
  getAll,
  add,
  updateRole,
  updateManager,
  remove,
};
