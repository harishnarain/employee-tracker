const db = require("../util/db");

const runQuery = async (queryType, objType, prop) => {
  try {
    switch (queryType) {
      case "GET":
        return await db.query(`SELECT * FROM ${objType}`);
        break;
      case "GET_BY_ID":
        return await db.query(`SELECT * FROM ${objType} WHERE ?`, prop);
        break;
      case "ADD":
        return await db.query(`INSERT INTO ${objType} SET ?`, prop);
        break;
      case "DELETE":
        return await db.query(`DELETE FROM ${objType} WHERE ?`, prop);
        break;
      case "UPDATE":
        return await db.query(`UPDATE ${objType} SET ? WHERE ?`, [
          prop.update,
          prop.id,
        ]);
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

const addObject = async (objType, obj) => {
  return await runQuery("ADD", objType, obj);
};

const getObjects = async (objType) => {
  return await runQuery("GET", objType);
};

const getObjectById = async (objType, id) => {
  return await runQuery("GET_BY_ID", objType, id);
};

const deleteObject = async (objType, id) => {
  return await runQuery("DELETE", objType, id);
};

const updateObject = async (objType, obj) => {
  return await runQuery("UPDATE", objType, obj);
};

module.exports = {
  getObjects,
  getObjectById,
  addObject,
  deleteObject,
  updateObject,
};
