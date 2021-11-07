const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    "server": config.HOST,
    "dialect": "mssql",
    "options": {
      "port": config.PORT,
      "trustServerCertificate": true
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "users_roles",
  foreignKey: "roles_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.role, {
  through: "users_roles",
  foreignKey: "user_id",
  otherKey: "roles_id"
});

db.ROLES = ["user", "admin"];

module.exports = db;