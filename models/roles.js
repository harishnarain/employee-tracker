const db = require("../util/db");
const {
  getObjects,
  getObjectById,
  addObject,
  deleteObject,
} = require("./dbObj");

const getRoleAll = async () => {
  //return await getObjects("roles").then((res) => res);
  let query = `SELECT
                roles.id,
                roles.title,
                roles.salary,
                departments.name AS department
              FROM roles roles
              INNER JOIN departments ON (roles.department_id = departments.id)`;
  query += ";";
  try {
    return await db.query(query);
  } catch (err) {
    console.error(err);
  }
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
