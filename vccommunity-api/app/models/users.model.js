module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING
      },
      userPassword: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      currentBalance: {
        type: Sequelize.STRING
      }
    });
    return Users;
  };