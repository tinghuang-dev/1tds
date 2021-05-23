const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../index');
const { STATUS } = require('./STATUS');

class Users extends Model {
  async verifyEmail() {
    if (this.status !== STATUS.PENDING_VERIFICATION) {
      return;
    }

    this.status = STATUS.ACTIVE;

    await this.save();
  }
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
    defaultValue: STATUS.PENDING_VERIFICATION,
  },
}, {
  sequelize,
  modelName: 'Users',
  freezeTableName: true,
});

module.exports = Users;
