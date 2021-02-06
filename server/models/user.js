'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.savedRecipe, { as: userId })
    }
  };
  User.init({
    username: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    passwordSalt: DataTypes.STRING,
    ingredientsStr: DataTypes.STRING,
    externalType: DataTypes.STRING,
    externalId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};