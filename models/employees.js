const {
  getObjects,
  getObjectById,
  addObject,
  deleteObject,
  updateObject,
} = require("./dbObj");

const getEmployeeAll = async () => {
  return await getObjects("employees").then((res) => res);
};

const getEmployeeById = async (id) => {
  const idObj = { id: id };
  return await getObjectById("employees", idObj);
};

const getEmployeeByManager = async (managerId) => {
  const managerIdObj = { manager_id: managerId };
  return await getObjectById("employees", managerIdObj);
};

const addEmployee = async (employee) => {
  return await addObject("employees", employee);
};

const deleteEmployee = async (id) => {
  const idObj = { id: id };
  return await deleteObject("employees", idObj);
};

const updateEmployeeRole = async (id, roleId) => {
  const updatedEmployee = {
    id: {
      id: id,
    },
    update: {
      role_id: roleId,
    },
  };
  return await updateObject("employees", updatedEmployee);
};

const updateEmployeeManager = async (id, managerId) => {
  const updatedEmployee = {
    id: {
      id: id,
    },
    update: {
      manager_id: managerId,
    },
  };
  return await updateObject("employees", updatedEmployee);
};

module.exports = {
  getEmployeeAll,
  getEmployeeById,
  getEmployeeByManager,
  addEmployee,
  deleteEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
};
