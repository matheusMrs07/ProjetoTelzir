module.exports = app => {
  const prices = require("../controllers/price.controller.js");

  var router = require("express").Router();

  // Create a new price
  router.post("/", prices.create);

  // Retrieve all prices
  router.get("/", prices.findAll);


  // Retrieve a single price with id
  router.get("/:id", prices.findOne);

  // Update a price with id
  router.put("/:id", prices.update);

  // Delete a price with id
  router.delete("/:id", prices.delete);

  // Delete all prices
  router.delete("/", prices.deleteAll);

  app.use('/api/prices', router);
};
