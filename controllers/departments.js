// Dependencies
const cTable = require("console.table");
const {
  getDepartmentAll,
  addDepartment,
  deleteDepartment,
} = require("../models/departments");

// Methods
const showAll = async () => {
  await getDepartmentAll().then((res) => {
    console.table(res);
  });
};

const getAll = async () => {
  return await getDepartmentAll().then((res) => res);
};

const add = async (name) => {
  await addDepartment(name).then((res) => {
    console.log(`${res.affectedRows} row(s) added.`);
  });
};

const remove = async (id) => {
  await deleteDepartment(id).then((res) => {
    console.log(`${res.affectedRows} row(s) removed.`);
  });
};

// Exports
module.exports = {
  showAll,
  getAll,
  add,
  remove,
};
