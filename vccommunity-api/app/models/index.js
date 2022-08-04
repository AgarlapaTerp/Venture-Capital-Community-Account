const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
    // columns: uuid(automatic), username, password, first, last, currentBalance
db.companies = require("./companies.model.js")(sequelize, Sequelize);
    // columns: uuid(automatic), company name, username, password, 
db.userInvestments = require("./userInvestments.model.js")(sequelize, Sequelize);
    // columns: uuid(automatic), userId, investmentAmount, companyId
db.companyFunding = require("./companyFunding.model.js")(sequelize, Sequelize);
    // columns: uuid(automatic), investmentAmount, userId, date

module.exports = db;