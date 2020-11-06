// Dependencies
const showSplash = require("./controllers/splash");
const employees = require("./controllers/employees");

// Globals

// Methods
const init = async () => {
  showSplash();

  employees.remove(9);
};

// Init
init();
