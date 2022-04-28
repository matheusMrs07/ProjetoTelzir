module.exports = (sequelize, Sequelize) => {
  const Cities = sequelize.define("cities", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: Sequelize.STRING
    },
    code: {
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
  return Cities;
};
