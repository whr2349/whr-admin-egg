'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('role_menus', {
      id: { type: UUID, primaryKey: true },
      role_id: { type: STRING(30), comment: '角色id' },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role_menus');
  },
};
