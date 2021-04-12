const { v4: uuid } = require('uuid');
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./users');
const Users = require('./users');

class Invitations extends Model {
  static async createInvitationForUser(UserId, email) {
    const token = uuid();

    const invitation = {
      token,
      UserId,
      email,
    };

    await this.create(invitation);

    return token;
  }
}

Invitations.init({
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Invitations',
  freezeTableName: true,
});
Invitations.belongsTo(Users, {
  foreignKey: 'UserId',
});
Invitations.belongsTo(Users, {
  foreignKey: 'invitedUserId',
});

module.exports = Invitations;
