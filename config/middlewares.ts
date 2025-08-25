export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "market-assets.strapi.io",
            "ondrive-backend.s3.eu-central-1.amazonaws.com",
            "s3.eu-central-1.amazonaws.com",
          ],
          "media-src":[
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "market-assets.strapi.io",
            "ondrive-backend.s3.eu-central-1.amazonaws.com",
            "s3.eu-central-1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
