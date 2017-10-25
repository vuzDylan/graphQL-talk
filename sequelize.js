const Sequelize = require('sequelize');

export default new Sequelize('database', 'user', 'alpine', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './db.sqlite'
});
