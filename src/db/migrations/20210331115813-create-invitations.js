module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      invitedUserId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Invitations');
  },
};
