const logo = require("asciiart-logo");

const title = "Employee Tracker";

const showSplash = (title) => {
  const logoObj = logo({
    name: "Employee Tracker",
    logoColor: "yellow",
    borderColor: "blue",
  }).render();
  console.log(logoObj);
};

module.exports = showSplash;
