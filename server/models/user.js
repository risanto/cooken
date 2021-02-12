'use strict'

const { Model } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')

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
  User.init(
    {
      displayName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Display name cannot be empty."
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email address is already in use."
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Email cannot be empty."
          },
          isEmail: {
            msg: "Invalid email format."
          }
        }
      },
      passwordHash: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password cannot be empty."
          },
          len: {
            args: [8],
            msg: "Password must be at least 8 characters long."
          }
        }
      },
      ingredientsStr: DataTypes.STRING,
      externalType: DataTypes.STRING,
      externalId: DataTypes.STRING
    }, {
    hooks: {
      beforeCreate: async (user) => {
        try {
          user.passwordHash = await hashPassword(user.passwordHash)

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