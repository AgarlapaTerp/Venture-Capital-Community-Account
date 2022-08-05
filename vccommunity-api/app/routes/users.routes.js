module.exports = app => {
    const users = require("../controllers/users.controller.js");
    var router = require("express").Router();
    // Create a new user
    router.post("/", users.create);
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    app.use('/api/tutorials', router);
  };