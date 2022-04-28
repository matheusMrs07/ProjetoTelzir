const db = require("../models");
const Price = db.prices;





exports.create = (req, res) => { // Validate request
    

    // Criar Price
    const price = {
        origin: req.body.origin,
        destiny: req.body.destiny,
        price: req.body.price,
    }; 

    // Save Price in the database
    Price.create(price).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Price."
        });
    });
};

// Retrieve all Price from the database.
exports.findAll = (req, res) => {
    const origin = req.query.origin;
    var condition = origin ? {
        origin: origin
    } : null;

    const destiny = req.query.destiny;
    var condition = destiny ? {
        destiny: destiny
    } : null;

    var condition = (destiny && origin) ? {
        destiny: destiny,
        origin: origin
    } : null;

    Price.findAll({where: condition}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Price."
        });
    });
};

// Find a single Price with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    

    Price.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Price with id=" + id
        });
    });
};

// Update a Price by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Price.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Price was updated successfully."});
        } else {
            res.send({message: `Cannot update Price with id=${id}. Maybe Price was not found or req.body is empty!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Price with id=" + id
        });
    });
};

// Delete a Price with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Price.destroy({
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Price was deleted successfully!"});
        } else {
            res.send({message: `Cannot delete Price with id=${id}. Maybe Price was not found!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Price with id=" + id
        });
    });
};

// Delete all Price from the database.
exports.deleteAll = (req, res) => {
    Price.destroy({where: {}, truncate: false}).then(nums => {
        res.send({message: `${nums} Price were deleted successfully!`});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Price."
        });
    });
};
