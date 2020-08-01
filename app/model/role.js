module.exports = app => {
  const { STRING, DATE, UUID } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: UUID, primaryKey: true },
    role_name: { type: STRING(30), unique: true },
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'roles',
  });

  return Role;
};
