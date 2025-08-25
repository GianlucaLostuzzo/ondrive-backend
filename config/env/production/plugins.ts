// ./config/env/production/plugins.ts
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // base Url only if CloudFront or other tools are used
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          // endpoint: env('AWS_S3_ENDPOINT'),
          // forcePathStyle: env.bool('AWS_S3_FORCE_PATH_STYLE', false),
          params: {
            Bucket: env('AWS_BUCKET'),
            // ACL: env('AWS_ACL', 'public-read'),
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
});
