module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  host: 'localhost', // only used along with `strapi develop --watch-admin` command
  port: 8000, // only used along with `strapi develop --watch-admin` command  
});
