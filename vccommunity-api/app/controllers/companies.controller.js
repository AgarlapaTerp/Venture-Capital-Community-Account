const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;
const uuid = require("uuid")

// Create and Save a new Company
exports.create = (req, res) => {
  // Create a Movie
  const company = {
    id: uuid.v4(),
    username: req.body.username,
    password: req.body.password,
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    state: req.body.state,
    city: req.body.city,
    companyUrl: req.body.companyUrl,
    phone: req.body.phone,
    goal: req.body.goal,
  };

  // Save Company in the database
  Companies.create(company)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company."
      });
    });
};

// Retrieve all Companies from the database. is this allowed?
exports.findAll = (req, res) => {
  Companies.findAll({where: null})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companies."
      });
    });
};

// Find a single Company with an id
exports.findOneById = (req, res) => {
  const id = req.params.id;

  Companies.findByPk(id)
    .then(data => {
      res.status(data ? 200 : 404).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comapny with id=" + id
      });
    });
};

// Find a single Company by name
exports.findOneByName = (req, res) => {
  const companyName = req.params.companyName;

  Companies.findOne({companyName: companyName})
    .then(data => {
      res.status(data ? 200 : 404).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comapny with that name=" + companyName
      });
    });
};
