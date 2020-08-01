'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('menus', 'type', {
        type: STRING(30),
        comment: '菜单类型目录还是页面',
      }, { transaction });
      await queryInterface.addColumn('menus', 'cion', {
        type: STRING(30),
        comment: '图标',
      }, { transaction });
      await queryInterface.addColumn('menus', 'route', {
        type: STRING(100),
        comment: '节点路由',
      }, { transaction });
      await queryInterface.addColumn('menus', 'alive', {
        type: STRING(30),
        comment: '路由缓存',
      }, { transaction });
      await queryInterface.addColumn('menus', 'path', {
        type: STRING(100),
        comment: '文件路径',
      }, { transaction });
      await queryInterface.addColumn('menus', 'nub', {
        type: STRING(30),
        comment: '序号',
      }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('menus', 'type', { transaction });
      await queryInterface.removeColumn('menus', 'cion', { transaction });
      await queryInterface.removeColumn('menus', 'route', { transaction });
      await queryInterface.removeColumn('menus', 'alive', { transaction });
      await queryInterface.removeColumn('menus', 'path', { transaction });
      await queryInterface.removeColumn('menus', 'nub', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
