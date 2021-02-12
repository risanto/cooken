'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SavedRecipe.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  SavedRecipe.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {  // SavedRecipe belongsTo User
        model: 'Users',
        key: 'id'
      }
    },
    recipeId: DataTypes.INTEGER,
    imageSrc: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SavedRecipe',
  });
  return SavedRecipe;
};