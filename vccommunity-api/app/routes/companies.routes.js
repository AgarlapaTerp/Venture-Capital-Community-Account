module.exports = app => {
    const companies = require("../controllers/companies.controller.js");
    var router = require("express").Router();
    // Create a new company
    router.post("/", companies.create);
    // Retrieve all companies
    router.get("/", companies.findAll);
    // Retrieve a single company with id
    router.get("/:id", companies.findOneById);
    // Retrieve a single company with companyname
    router.get("/:companyName", companies.findOneByName);
    
    app.use('/api/companies', router);
  };