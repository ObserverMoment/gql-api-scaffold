import Sequelize from 'sequelize'

export default new Sequelize(
  process.env.DATABASE || 'scaffold-api-db',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASSWORD || 'postgres',
  { dialect: 'postgres' }
)
