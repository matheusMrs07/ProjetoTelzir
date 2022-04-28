module.exports = (sequelize, Sequelize) => {
  const Plans = sequelize.define("plans", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.DOUBLE
    },
    value: {
      type: Sequelize.DOUBLE
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
  return Plans;
};
