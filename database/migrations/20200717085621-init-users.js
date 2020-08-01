'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, UUID, BOOLEAN } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: UUID, primaryKey: true },
      user_name: STRING(30),
      age: INTEGER,
      branch: STRING(30),
      login: { type: BOOLEAN, defaultValue: false },
      last_sign_in_at: DATE,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
