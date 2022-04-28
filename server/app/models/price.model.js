module.exports = (sequelize, Sequelize) => {
  const Prices = sequelize.define("prices", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    origin: {
      type: Sequelize.STRING
    },
    destiny: {
      type: Sequelize.STRING
    },
    price: {
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
  return Prices;
};
