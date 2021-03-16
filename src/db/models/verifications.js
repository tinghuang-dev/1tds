const { v4: uuid } = require('uuid');
const { DataTypes, Model } = require('sequelize');
const add = require('date-fns/add');
const { sequelize } = require('./index');
const Users = require('./users');

const EXPIRE_LIST = {
  RESET_PASSWORD: {
    minutes: 15,
  },
  VERIFY_EMAIL: {
    hours: 24,
  },
};

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
    const verification = await this.findOne({ where: { token, scope }, include: Users });

    if (!verification) {
      return null;
    }

    const { createdAt, User } = verification;

    const expiredTime = add(createdAt, EXPIRE_LIST[scope]);

    const isExpired = expiredTime < new Date();

    if (isExpired) {
      return null;
    }

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
