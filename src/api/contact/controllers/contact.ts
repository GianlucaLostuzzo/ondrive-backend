export default {
  async send(ctx) {
    const { nome, email, messaggio } = ctx.request.body;

    console.log('📥 Richiesta ricevuta:', { nome, email, messaggio });

    if (!nome || !email || !messaggio) {
      return ctx.badRequest('Tutti i campi sono obbligatori.');
    }

    try {
      console.log('📤 Tentativo invio email...');
      
      await strapi.plugin('email').service('email').send({
        to: 'gianluca.lostuzzo@gmail.com',
        from: 'no-reply@ondrive.it',
        subject: `Nuovo messaggio da ${nome}`,
        text: `
Hai ricevuto un nuovo messaggio dal sito ONDRIVE:

📧 Email: ${email}

💬 Messaggio:
${messaggio}
        `,
      });

      console.log('✅ Email inviata correttamente');

      return ctx.send({ ok: true });
    } catch (error) {
      console.error('❌ Errore invio email:', error);
      return ctx.internalServerError('Errore durante l’invio');
    }
  },
};
