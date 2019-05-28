import Sequelize from 'sequelize'

const sequelize = new Sequelize(
  process.env.DATABASE || 'scaffold-api-db',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASSWORD || 'postgres',
  { dialect: 'postgres' }
)

const models = {
  User: sequelize.import('./User'),
  Item: sequelize.import('./Item')
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export { sequelize }

export default models
