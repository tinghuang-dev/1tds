module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Verifications', 'token', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.removeColumn('Verifications', 'UserId');

    await queryInterface.addColumn('Verifications', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    });
  },

  down: async () => {

  },
};
