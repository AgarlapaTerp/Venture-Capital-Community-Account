const db = require("../models");
const Investments = db.investments;
const Op = db.Sequelize.Op;
const uuid = require("uuid")

// Create and Save a new Investment
exports.create = (req, res) => {
  // Create a investment
  const investment = {
    id: uuid.v4(),
    companyId: req.body.companyId,
    investorId: req.body.investorId,
    amountInvested: req.body.amountInvested,
    interestRate: req.body.interestRate,
    owedToInvestor: req.body.amountInvested * (1 + req.body.interestRate)
  };

  // Save Investment in the database
  Investments.create(investment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the investment."
      });
    });
};

// Retrieve all Investments for certain company from the database.
exports.findAllByCompany = (req, res) => {
  const companyId = req.params.companyId;
  Investments.findAll({ where: {companyId: companyId} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving investments."
      });
    });
};

// Retrieve all Investments for certain persoln from the database.
exports.findAllByUser = (req, res) => {
  const investorId = req.params.investorId;
  Investments.findAll({ where: {investorId: investorId} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving investments."
      });
    });
};