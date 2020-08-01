module.exports = app => {
    const { STRING, DATE, UUID } = app.Sequelize;

    const Menu = app.model.define('menu', {
        id: { type: UUID, primaryKey: true },
        menu_name: { type: STRING(30), unique: true },
        type: {
            type: STRING(30),
            comment: '菜单类型目录还是页面',
        },
        icon: {
            type: STRING(30),
            comment: '图标',
        },
        route: {
            type: STRING(100),
            comment: '节点路由',
        },
        alive: {
            type: STRING(30),
            comment: '路由缓存',
        },
        path: {
            type: STRING(100),
            comment: '文件路径',
        },
        nub: {
            type: STRING(30),
            comment: '序号',
        },
        pid: { type: UUID },
        created_at: DATE,
        updated_at: DATE,
    }, {
        tableName: 'menus',
    });

    return Menu;
};
