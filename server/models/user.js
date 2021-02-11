'use strict'

const { Model } = require('sequelize')

const bcrypt = require('bcrypt')
const saltRounds = 10

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
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    ingredientsStr: DataTypes.STRING,
    externalType: DataTypes.STRING,
    externalId: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (user) => {
        try {
          user.passwordHash = await bcrypt.hash(user.passwordHash, saltRounds)

        } catch (error) {
          throw error
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};