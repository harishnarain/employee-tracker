const db = require("../util/db");
const {
  getObjectById,
  addObject,
  deleteObject,
  updateObject,
} = require("./dbObj");

const getEmployeeAll = async (filter) => {
  let query = `SELECT 
                employees.id, 
                employees.first_name, 
                employees.last_name,
                title,
                departments.name AS department,
                salary,
                CONCAT_WS(' ', managers.first_name, managers.last_name) AS manager
              FROM employees employees
              INNER JOIN roles ON (employees.role_id = roles.id)
              INNER JOIN departments ON (roles.department_id = departments.id)
              LEFT JOIN employees managers ON managers.id = employees.manager_id\n`;
  if (filter) {
    if (filter.managerId) {
      query += `WHERE employees.manager_id = "${filter.managerId}"`;
    } else if (filter.departmentId) {
      query += `WHERE roles.department_id = "${filter.departmentId}"`;
    } else if (filter.managerId === "") {
      query += "WHERE employees.manager_id IS NULL";
    }
  }

  query += ";";

  try {
    return await db.query(query);
  } catch (err) {
    console.error(err);
  }
};

const getEmployeeById = async (id) => {
  const idObj = { id: id };
  return await getObjectById("employees", idObj);
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
  addEmployee,
  deleteEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
};
