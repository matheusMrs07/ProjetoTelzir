module.exports = app => {
  const cities = require("../controllers/city.controller.js");

  var router = require("express").Router();

  // Create a new city
  router.post("/", cities.create);

  // Retrieve all cities
  router.get("/", cities.findAll);


  // Retrieve a single city with id
  router.get("/:id", cities.findOne);

  // Update a city with id
  router.put("/:id", cities.update);

  // Delete a city with id
  router.delete("/:id", cities.delete);

  // Delete all cities
  router.delete("/", cities.deleteAll);

  app.use('/api/cities', router);
};
