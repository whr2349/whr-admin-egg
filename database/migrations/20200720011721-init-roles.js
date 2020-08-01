'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { DATE, STRING, UUID } = Sequelize;
    await queryInterface.createTable('roles', {
      id: { type: UUID, primaryKey: true },
      role_name: { type: STRING(30), unique: true },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('roles');
  },
};
