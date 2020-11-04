const {
  getObjects,
  getObjectById,
  addObject,
  deleteObject,
} = require("./dbObj");

const getDepartmentAll = async () => {
  return await getObjects("departments").then((res) => res);
};

const getDepartmentById = async (id) => {
  const idObj = { id: id };
  return await getObjectById("departments", idObj);
};

const addDepartment = async (name) => {
  const deptObj = { name: name };
  return await addObject("departments", deptObj);
};

const deleteDepartment = async (id) => {
  const idObj = { id: id };
  return await deleteObject("departments", idObj);
};

module.exports = {
  getDepartmentAll,
  getDepartmentById,
  addDepartment,
  deleteDepartment,
};
