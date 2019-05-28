export default (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  })

  Item.associate = (models) => {
    Item.belongsTo(models.User)
  }

  return Item
}
