module.exports = app => {
  const { STRING, DATE, UUID } = app.Sequelize;

  const RoleMenu = app.model.define('role_menu', {
    id: { type: UUID, primaryKey: true },
    role_id: { type: STRING(30), comment: '角色id' },
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'role_menus',
  });

  return RoleMenu;
};
