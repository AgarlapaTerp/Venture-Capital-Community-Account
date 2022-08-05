module.exports = (sequelize, Sequelize) => {
    const Companies = sequelize.define("companies", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      companyAddress: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      companyUrl: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      goal: {
        type: Sequelize.DECIMAL
      }
    });
    return Companies;
  };