module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.peoplereunite.id',  
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '899ab18082857be54845830ca65046d8'),
    },
  }
});
