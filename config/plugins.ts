export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
            credentials: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
            },
            region: env('AWS_REGION'),
            params: {
                ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
                Bucket: env('AWS_BUCKET'),
            },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
    email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),         // es. smtp.ondrive.it
        port: env.int('SMTP_PORT'),     // 465 (SSL) o 587 (STARTTLS)
        secure: env.bool('SMTP_SECURE'), // true per 465, false per 587
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_FROM'),         // es. no-reply@ondrive.it
        defaultReplyTo: env('SMTP_REPLY_TO'),  // es. info@ondrive.it
      },
    },
  },
});
