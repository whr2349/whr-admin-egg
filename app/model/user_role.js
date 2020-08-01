
module.exports = app => {
  const { STRING, DATE, UUID } = app.Sequelize;

  const UserRole = app.model.define('user_role', {
    id: { type: UUID, primaryKey: true },
    role_id: { type: STRING(30), comment: '角色id' },
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'user_roles',
  });

  return UserRole;
};
