module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new usuario
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);


  // Retrieve a single usuario with id
  router.get("/:id", users.findOne);

  // Update a usuario with id
  router.put("/:id", users.update);

  // Delete a usuario with id
  router.delete("/:id", users.delete);

  // Delete all users
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};
