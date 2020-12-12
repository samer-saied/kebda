module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'data_base.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
