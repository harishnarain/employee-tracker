// Dependencies
const showSplash = require("./controllers/splash");
const mainMenu = require("./menus/main");

// Globals

// Methods
const init = async () => {
  showSplash();

  mainMenu.show();
};

// Init
init();
