export default () => ({
  port: parseInt(process.env.PORT!, 10) || 3000,
  database: {
    db: process.env.DB,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    sync: process.env.DB_SYNC === 'true',
  },
  jwt: {
    token: process.env.TOKEN_SECRET,
  },
});
