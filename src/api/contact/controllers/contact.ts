export default {
  async send(ctx) {
    const { nome, email, messaggio } = ctx.request.body;

    console.log('📥 Richiesta ricevuta:', { nome, email, messaggio });

    if (!nome || !email || !messaggio) {
      return ctx.badRequest('Tutti i campi sono obbligatori.');
    }

    try {
      await strapi.plugin('email').service('email').send({
        to: 'info@ondrive.it', // 📥 Destinatario finale
        from: 'no-reply@ondrive.it', // ⚠️ Deve corrispondere alla casella Aruba
        subject: `Nuovo messaggio da ${nome}`,
        text: `
          Hai ricevuto un nuovo messaggio dal sito ONDRIVE:

          Nome: ${nome}
          Email: ${email}

          Messaggio:
          ${messaggio}
        `,
      });

      return ctx.send({ ok: true, message: 'Messaggio inviato correttamente' });
    } catch (error) {
      console.error('Errore invio email:', error);
      return ctx.internalServerError('Errore durante l’invio del messaggio');
    }
  },
};
