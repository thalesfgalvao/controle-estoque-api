require('dotenv').config({ path: __dirname + '/./../../../.env' });

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: '172.17.0.2',
    dialect: 'mysql',
    logging: false,
    define: {
      timestamp: true,
    },
    timezone: '-03:00',
  },
};
