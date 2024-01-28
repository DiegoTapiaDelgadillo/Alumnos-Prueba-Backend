require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dBHost: process.env.DB_HOST,
  dBName: process.env.DB_NAME,
  dBPort: process.env.DB_PORT,
};

module.exports = { config };
