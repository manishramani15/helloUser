const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  database: 'sampledb2',
  username: 'root',
  password: 'Manish@15'
})

const Users = db.define(
    'users',
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(8),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        }
    })


module.exports = {
  db,
  Users
}