const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');

class Users extends Model {
  async verifyEmail() {
    if (this.status !== 'PENDING_VERIFICATION') {
      return;
    }

    this.status = 'ACTIVE';

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
    defaultValue: 'PENDING_VERIFICATION',
  },
}, {
  sequelize,
  modelName: 'Users',
  freezeTableName: true,
});

module.exports = Users;
