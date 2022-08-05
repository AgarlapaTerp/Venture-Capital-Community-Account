module.exports = (sequelize, Sequelize) => {
    const Investments = sequelize.define("investments", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      companyId: {
        type: Sequelize.STRING
      },
      investorId: {
        type: Sequelize.STRING
      },
      amountInvested: {
        type: Sequelize.DECIMAL
      },
      owedToInvestor: {
        type: Sequelize.DECIMAL
      },
      interestRate: {
        type: Sequelize.DECIMAL
      }
    });
    return Investments;
  };