const Curtida = (sequelize, DataTypes) => {
    let curtida = sequelize.define(
        'Curtida', 
        {
            id_curtida: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_post: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

        }, {
            indexes: [{
                unique: true,
                fields: ['id_posts', 'id_usuario']
            }]
        }, {
            tableName: "curtida",
            timestamps: false
        }
    );

    curtida.associate = (listaDeModelos) => {
        curtida.belongsTo(listaDeModelos.Usuario, {
            foreignKey: 'id_usuario',
            as: 'curtidaUsuario'
        });
        curtida.belongsTo(listaDeModelos.Post, {
            foreignKey: 'id_post',
            as: 'curtidaPost'
        });
    };

    return curtida;
};

module.exports = Curtida;