const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');

class Users extends Model {
}
Users.init({
  mobile: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Users',
  freezeTableName: true,
});
module.exports = Users;
