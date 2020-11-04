const {
  getDepartmentAll,
  getDepartmentById,
  addDepartment,
  deleteDepartment,
} = require("./models/departments");

// Testing
deleteDepartment(9).then((res) => console.log(res));
