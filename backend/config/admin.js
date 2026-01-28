// Конфигурация админ-панели Strapi

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dev_admin_jwt_secret_123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dev_token_salt_123'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'dev_transfer_token_salt_123'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
