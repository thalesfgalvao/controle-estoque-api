require('dotenv').config({ path: __dirname + '/../../../.env' });

module.exports = {
  development: {
    username: 'root',
    password: '973128',
    database: 'controle_estoque',
    host: '172.17.0.2',
    dialect: 'mysql',
    logging: false,
    define: {
      timestamp: true,
    },
    timezone: '-03:00',
  },
};
