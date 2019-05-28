export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  })

  User.associate = (models) => {
    User.hasMany(models.Item, { onDelete: 'CASCADE' })
  }

  return User
}
