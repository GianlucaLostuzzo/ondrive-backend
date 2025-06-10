export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff2fec547c64d6c95e3cdb38050188b686b2539da42ee7317c35e2dc4fa9f62a'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
