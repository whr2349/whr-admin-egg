'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('menus', {
      id: { type: UUID, primaryKey: true },
      menu_name: { type: STRING(30), unique: true },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menus');
  },
};

