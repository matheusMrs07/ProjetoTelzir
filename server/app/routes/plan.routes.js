module.exports = app => {
  const plans = require("../controllers/plan.controller.js");

  var router = require("express").Router();

  // Create a new price
  router.post("/", plans.create);

  // Retrieve all plans
  router.get("/", plans.findAll);


  // Retrieve a single price with id
  router.get("/:id", plans.findOne);

  // Update a price with id
  router.put("/:id", plans.update);

  // Delete a price with id
  router.delete("/:id", plans.delete);

  // Delete all plans
  router.delete("/", plans.deleteAll);

  app.use('/api/plans', router);
};
