module.exports = app => {
    const investments = require("../controllers/investments.controller.js");
    var router = require("express").Router();
    // Create a new investment
    router.post("/", investments.create);
    // Retrieve all investments received by company 
    router.get("/:companyId", tutorials.findAllByCompany);
     // Retrieve all investments by user 
     router.get("/:investorId", tutorials.findAllByUSer);
    
    app.use('/api/tutorials', router);
  };