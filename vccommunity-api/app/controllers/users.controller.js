const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const uuid = require("uuid")


// Create and Save a new User
exports.create = (req, res) => {
  // Create a User
  const user = {
    userId: uuid.v4(),
    username: req.body.username,
    userPassword: req.body.userPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    currentBalance: req.body.currentBalance,
  };

  // Save Movie in the database
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.userId;

  Users.findByPk(id)
    .then(data => {
      res.status(data ? 200 : 404).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};
