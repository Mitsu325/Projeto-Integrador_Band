'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario', [
        {
          nome: 'Erika',
          email: 'kinha@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-04-10 18:57:53",
          id_estado: 26,
          id_cidade: 5284,
          admin: 1,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/banda/1",
          id_tipos_perfil: 2,
        },
        {
          nome: 'Patricia',
          email: 'paty@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-04-10 19:00:53",
          id_estado: 26,
          id_cidade: 5023,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/1",
          id_tipos_perfil: 1,
        },
        {
          nome: 'Andressa',
          email: 'andy@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-04-10 19:15:53",
          id_estado: 26,
          id_cidade: 5265,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/estabelecimento/1",
          id_tipos_perfil: 3,
        },
        {
          nome: 'Jane Doe',
          email: 'jane@yahoo.com',
          senha: bcrypt.hashSync('987654', 10),
          data_cadastro: "2020-04-18 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/2",
          id_tipos_perfil: 1,
        },
        {
          nome: 'John Doe',
          email: 'john@outlook.com',
          senha: bcrypt.hashSync('987654', 10),
          data_cadastro: "2020-05-01' 18:57:53",
          id_estado: 15,
          id_cidade: 2558,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/3",
          id_tipos_perfil: 1,
        },
        {
          nome: 'Os Farofeiros',
          email: 'farofeiros@yahoo.com',
          senha: bcrypt.hashSync('farofa123', 10),
          data_cadastro: "2020-05-10 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/banda/2",
          id_tipos_perfil: 2,
        },
        {
          nome: 'Jack Doe',
          email: 'jack@doe.com',
          senha: bcrypt.hashSync('123Jack', 10),
          data_cadastro: "2020-05-11 18:57:53",
          id_estado: 15,
          id_cidade: 2558,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/estabelecimento/2",
          id_tipos_perfil: 3,
        },
        {
          nome: 'LM Eventos',
          email: 'lm@eventos.com',
          senha: bcrypt.hashSync('eventos123', 10),
          data_cadastro: "2020-05-12 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/banda/3",
          id_tipos_perfil: 2,
        },
        {
          nome: 'Beth Bar',
          email: 'bar@beth.com',
          senha: bcrypt.hashSync('beth567', 10),
          data_cadastro: "2020-05-20 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/estabelecimento/3",
          id_tipos_perfil: 3,
        },
        {
          nome: 'André Moreira',
          email: 'andremoreira@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-02 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/4",
          id_tipos_perfil: 1,
        },
        {
          nome: 'Gabriel Felice',
          email: 'gabriel@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-05 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/5",
          id_tipos_perfil: 1,
        },
        {
          nome: 'Sandra Maria',
          email: 'sandramaria@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-06 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/6",
          id_tipos_perfil: 1,
        },
        {
          nome: 'Adyla Kayanna',
          email: 'adyla@gmail.com',
          senha: bcrypt.hashSync('123456',10),
          data_cadastro: "2020-06-07 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/7",
          id_tipos_perfil: 1, 
        },
        {
          nome: 'Beto Silva',
          email: 'beto@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-07 19:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/8",
          id_tipos_perfil: 1, 
        }, 
        {
          nome: 'Lily',
          email: 'lilian@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-07 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/9",
          id_tipos_perfil: 1, 
        }, 
        {
          nome: 'Edu Santos',
          email: 'eduardo@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-08 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/10",
          id_tipos_perfil: 1, 
        }, 
        {
          nome: 'Rodrigo Trops',
          email: 'trops@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-09 18:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/musico/11",
          id_tipos_perfil: 1, 
        }, 
        {
          nome: 'Rio Eventos',
          email: 'rio@gmail.com',
          senha: bcrypt.hashSync('123456', 10),
          data_cadastro: "2020-06-10 12:57:53",
          id_estado: 20,
          id_cidade: 3680,
          admin: 0,
          avatar: '/img/avatar_zero.png',
          wallpaper: '/img/fundo_zero.png',
          link_perfil: "localhost:3000/perfil/estabelecimento/4",
          id_tipos_perfil: 3, 
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};
