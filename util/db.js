const mysql = require("mysql");
const { promisify } = require("util");

const connectDb = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "harish",
    password: "lanier",
    database: "employee_db",
  });

  return {
    query(sql, args) {
      return promisify(connection.query).call(connection, sql, args);
    },
    close() {
      return promisify(connection.end).call(connection);
    },
  };
};

module.exports = connectDb();
