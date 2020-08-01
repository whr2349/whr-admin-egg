'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.addColumn('menus', 'pid', {
      type: STRING(36),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('menus', 'pid');
  },
};
