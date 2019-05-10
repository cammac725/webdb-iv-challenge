module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/mydata.db3', // the folder will be created when we run the migrations
    },
    migrations: {
      // we can change the location of the migrations
      directory: './data/migrations',
    },
    seeds: {
      // we can change the location of the seeds
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
};