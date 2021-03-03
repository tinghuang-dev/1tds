const env = process.env.NODE_ENV || 'development';

const Sequelize = require('sequelize');
const config = require('../config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
