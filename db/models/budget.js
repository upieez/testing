const { DataTypes } = require("sequelize");

const initBudget = (sequelize) =>
  sequelize.define(
    "Budget",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "categories",
          key: "id",
        },
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    }
  );

module.exports = initBudget;
