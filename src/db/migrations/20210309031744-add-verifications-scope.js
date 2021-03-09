module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Verifications',
      'scope',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      'Verifications',
      'scope',
    );
  },
};
