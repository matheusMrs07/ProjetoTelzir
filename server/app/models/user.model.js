module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    createdAt: {
      field: 'CREATED_AT',
      type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'UPDATED_AT',
        type: Sequelize.DATE,
    },
  });
  return Users;
};
