const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');
const Users = require('./users');

class Verifications extends Model {}

Verifications.init({
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Verifications',
  freezeTableName: true,
});
Verifications.belongsTo(Users);
module.exports = Verifications;
