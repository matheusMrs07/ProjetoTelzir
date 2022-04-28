const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');



exports.create = (req, res) => { // Validate request
    if (!req.body.name) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Criar User
    const user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    }; 

    // Save Ususario in the database
    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Ususario."
        });
    });
};

// Retrieve all Ususarios from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;
    const tipo = req.query.tipo;
    var condition = tipo ? {
        tipo: tipo
    } : null;

    User.findAll({where: condition}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Ususarios."
        });
    });
};

// Find a single Ususario with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);

    User.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Ususario with id=" + id
        });
    });
};

// Update a Ususario by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    if (req.body.password) 
        req.body.password = bcrypt.hashSync(req.body.password, 10);
    

    User.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Ususario was updated successfully."});
        } else {
            res.send({message: `Cannot update User with id=${id}. Maybe Ususario was not found or req.body is empty!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Ususario with id=" + id
        });
    });
};

// Delete a Ususario with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.send({message: "Ususario was deleted successfully!"});
        } else {
            res.send({message: `Cannot delete Ususario with id=${id}. Maybe Ususario was not found!`});
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Ususario with id=" + id
        });
    });
};

// Delete all Ususarios from the database.
exports.deleteAll = (req, res) => {
    User.destroy({where: {}, truncate: false}).then(nums => {
        res.send({message: `${nums} Ususarios were deleted successfully!`});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Ususarios."
        });
    });
};
