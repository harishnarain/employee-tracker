// Dependencies
const cTable = require("console.table");
const {
  getDepartmentAll,
  addDepartment,
  deleteDepartment,
} = require("../models/departments");
const employees = require("./employees");

// Methods
const showAll = async () => {
  await getDepartmentAll().then((res) => {
    console.table(res);
  });
};

const getAll = async () => {
  return await getDepartmentAll().then((res) => res);
};

const showUtilizedBudget = async (id) => {
  const filterObj = {
    departmentId: id,
  };
  await employees.getAll(filterObj).then((res) => {
    let budget = 0;
    res.forEach((el) => {
      budget += el.salary;
    });
    const currencyOptions = { style: "currency", currency: "USD" };
    console.log(
      `The total utilized budget is: ${new Intl.NumberFormat(
        "en-US",
        currencyOptions
      ).format(budget)}`
    );
  });
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
  showUtilizedBudget,
  add,
  remove,
};
