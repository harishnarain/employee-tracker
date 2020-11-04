const {
  getEmployeeAll,
  getEmployeeById,
  getEmployeeByManager,
  addEmployee,
  deleteEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
} = require("./models/employees");

// Testing
const emp = {
  first_name: "Harish",
  last_name: "Narain",
  role_id: 6,
  manager_id: 5,
};

getEmployeeByManager(1).then((res) => console.log(res));
