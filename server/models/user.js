'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.SavedRecipe, { as: 'userId' })
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
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync()
        user.passwordHash = bcrypt.hashSync(user.passwordHash, salt)
        user.passwordSalt = salt
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};