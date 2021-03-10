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

    await queryInterface.bulkUpdate('Verifications', {
      scope: 'OLD_TOKEN',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      'Verifications',
      'scope',
    );
  },
};
