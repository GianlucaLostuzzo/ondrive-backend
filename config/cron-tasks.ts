export default {
  keepWarm: {
    task: async ({ strapi }) => {
      try {
        // micro-roundtrip al DB per scaldare connessione/ORM
        await strapi.db.connection.raw("select 1");
      } catch (e) {
        strapi.log.warn(`keepWarm failed: ${e instanceof Error ? e.message : e}`);
      }
    },
    options: {
      // ogni 10' dalle 07:00 alle 23:59 (TZ Roma)
      rule: "*/10 7-23 * * *",
      tz: "Europe/Rome",
    },
  },
};
