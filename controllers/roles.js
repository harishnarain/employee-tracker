// Dependencies
const cTable = require("console.table");
const {
  getRoleAll,
  getRoleById,
  addRole,
  deleteRole,
} = require("../models/roles");

// Methods
const showAll = async () => {
  await getRoleAll().then((res) => {
    console.table(res);
  });
};

const getAll = async () => {
  return await getRoleAll().then((res) => res);
};

const add = async (roleObj) => {
  await addRole(roleObj).then((res) => {
    console.log(`${res.affectedRows} row(s) added.`);
  });
};

const remove = async (id) => {
  await deleteRole(id).then((res) => {
    console.log(`${res.affectedRows} row(s) removed.`);
  });
};

// Exports
module.exports = { showAll, getAll, add, remove };
