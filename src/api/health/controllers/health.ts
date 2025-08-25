export default {
  async index(ctx) {
    try {
      await strapi.db.connection.raw('select 1'); // opzionale ma utile per scaldare DB
      ctx.body = { ok: true, ts: Date.now() };
    } catch {
      ctx.status = 500; ctx.body = { ok: false };
    }
  },
};