export default (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })

  Item.associate = (models) => {
    Item.belongsTo(models.User)
  }

  return Item
}
