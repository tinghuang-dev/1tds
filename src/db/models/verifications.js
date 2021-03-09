const { v4: uuid } = require('uuid');
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');
const Users = require('./users');

class Verifications extends Model {
  static async createScopedTokenForUser(UserId, scope) {
    const token = uuid();

    const verification = {
      token,
      UserId,
      scope,
    };

    await this.create(verification);

    return token;
  }

  static async getUserByScopedToken(token, scope) {
    const { User } = await this.findOne({ where: { token, scope }, include: Users });

    return User;
  }
}

Verifications.SCOPE = {
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
};

Verifications.init({
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scope: {
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
