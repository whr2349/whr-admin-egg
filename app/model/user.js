module.exports = app => {
    const { STRING, INTEGER, DATE, UUID, BOOLEAN } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: UUID, primaryKey: true },
        user_name: STRING(255),
        name: { type: STRING(255), unique: true },
        age: INTEGER,
        pwd: STRING(30),
        branch: STRING(30),
        login: { type: BOOLEAN, defaultValue: false },
        last_sign_in_at: DATE,
        created_at: DATE,
        updated_at: DATE,
    }, {
        tableName: 'users',
    });
    User.findByLogin = async function (login) {
        return await this.findOne({
            where: {
                login,
            },
        });
    };
    User.prototype.logSignin = async function () {
        return await this.update({ last_sign_in_at: new Date() });
    };
    return User;
};
