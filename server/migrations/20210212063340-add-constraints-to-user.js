'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'Users',
      'displayName',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )

    await queryInterface.changeColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid email format."
          }
        }
      }
    )

    await queryInterface.changeColumn(
      'Users',
      'passwordHash',
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: {
            msg: "Password must contains at least a number or a letter."
          },
          len: {
            args: [8],
            msg: "Password must be at least 8 characters long."
          }
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'Users',
      'displayName',
      {
        type: Sequelize.STRING
      }
    )

    await queryInterface.changeColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING
      }
    )

    await queryInterface.changeColumn(
      'Users',
      'passwordHash',
      {
        type: Sequelize.STRING
      }
    )
  }
};
