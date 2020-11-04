const {
  getObjects,
  getObjectById,
  addObject,
  deleteObject,
} = require("./dbObj");

const getRoleAll = async () => {
  return await getObjects("roles").then((res) => res);
};

const getRoleById = async (id) => {
  const idObj = { id: id };
  return await getObjectById("roles", idObj);
};

const addRole = async (role) => {
  return await addObject("roles", role);
};

const deleteRole = async (id) => {
  const idObj = { id: id };
  return await deleteObject("roles", idObj);
};

module.exports = {
  getRoleAll,
  getRoleById,
  addRole,
  deleteRole,
};
