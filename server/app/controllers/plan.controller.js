const db = require("../models");
const Plan = db.plans;
const Op = db.Sequelize.Op;




exports.create = (req, res) => { // Validate request
    

    // Criar Plan
    const plan = {
        name: req.body.name,
        time: req.body.time,
        value: req.body.value,
    }; 


    // Save Plan in the database
    Plan.create(plan).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Plan."
        });
    });
};

// Retrieve all Plan from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: name
    } : null;
    const destiny = req.query.destiny;


    Plan.findAll({where: condition}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Plan."
        });
    });
};

// Find a single Plan with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);

    Plan.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Plan with id=" + id
        });
    });
};

// Update a Plan by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Plan.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Plan was updated successfully."});
        } else {
            res.send({message: `Cannot update Plan with id=${id}. Maybe Plan was not found or req.body is empty!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Plan with id=" + id
        });
    });
};

// Delete a Plan with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Plan.destroy({
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Plan was deleted successfully!"});
        } else {
            res.send({message: `Cannot delete Plan with id=${id}. Maybe Plan was not found!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Plan with id=" + id
        });
    });
};

// Delete all Plan from the database.
exports.deleteAll = (req, res) => {
    Plan.destroy({where: {}, truncate: false}).then(nums => {
        res.send({message: `${nums} Plan were deleted successfully!`});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Plan."
        });
    });
};
