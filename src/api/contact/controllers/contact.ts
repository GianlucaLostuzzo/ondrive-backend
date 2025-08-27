export default {
  async send(ctx) {
    const { nome, email, messaggio } = ctx.request.body;

    console.log('📥 Richiesta ricevuta:', { nome, email, messaggio });

    if (!nome || !email || !messaggio) {
      return ctx.badRequest('Tutti i campi sono obbligatori.');
    }

    try {

      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Nuovo messaggio da ONDRIVE</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #0c264b;
          color: white;
          padding: 16px;
          text-align: center;
          border-radius: 6px 6px 0 0;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #888;
          margin-top: 20px;
        }
        .label {
          font-weight: bold;
          color: #0c264b;
        }
        .value {
          margin-bottom: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>📥 Nuovo messaggio da ONDRIVE</h2>
        </div>
        <div style="padding: 20px;">
          <p class="label">Nome:</p>
          <p class="value">${nome}</p>

          <p class="label">Email:</p>
          <p class="value">${email}</p>

          <p class="label">Messaggio:</p>
          <p class="value">${messaggio.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      <div class="footer">
        Ricevuto tramite il sito <strong>ondrive.it</strong>
      </div>
    </body>
  </html>
  `;

      await strapi.plugin('email').service('email').send({
        to: 'gianluca.lostuzzo@gmail.com',
        from: 'no-reply@ondrive.it',
        subject: `Nuovo messaggio da ${nome}`,
        text: `Email: ${email}\n\nMessaggio:\n${messaggio}`,
        html
      });

      return ctx.send({ ok: true });
    } catch (error) {
      console.error('❌ Errore invio email:', error);
      return ctx.internalServerError('Errore durante l’invio');
    }
  },
};
