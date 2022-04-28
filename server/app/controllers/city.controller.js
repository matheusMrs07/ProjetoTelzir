const db = require("../models");
const City = db.cities;
const Op = db.Sequelize.Op;




exports.create = (req, res) => { // Validate request
    

    // Criar City
    const city = {
        name: req.body.name,
        code: req.body.code,
    }; 

    // Save City in the database
    City.create(city).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the City."
        });
    });
};

// Retrieve all City from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: name
    } : null;
    const code = req.query.code;
    var condition = code ? {
        code: code
    } : null;

    City.findAll({where: condition}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving City."
        });
    });
};

// Find a single City with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);

    City.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving City with id=" + id
        });
    });
};

// Update a City by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    City.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "City was updated successfully."});
        } else {
            res.send({message: `Cannot update City with id=${id}. Maybe City was not found or req.body is empty!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating City with id=" + id
        });
    });
};

// Delete a City with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    City.destroy({
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "City was deleted successfully!"});
        } else {
            res.send({message: `Cannot delete City with id=${id}. Maybe City was not found!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete City with id=" + id
        });
    });
};

// Delete all City from the database.
exports.deleteAll = (req, res) => {
    City.destroy({where: {}, truncate: false}).then(nums => {
        res.send({message: `${nums} City were deleted successfully!`});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all City."
        });
    });
};
