import db from '../config/db' // Instance of sequelize connected db.

const models = {
  User: db.import('./User'),
  Item: db.import('./Item')
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export default models
