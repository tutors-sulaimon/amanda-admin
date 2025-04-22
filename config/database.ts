    // // strapi-api/config/database.js
    // export default ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: env('DATABASE_HOST'),
    //       port: env.int('DATABASE_PORT'),
    //       database: env('DATABASE_NAME'),
    //       user: env('DATABASE_USERNAME'),
    //       password: env('DATABASE_PASSWORD'),
    //       schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //       ssl: {
    //         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed SSL certificates
    //       },
    //     },
    //     debug: false,
    //   },
    // });


export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST'),
      port: env.int('PGPORT'),
      database: env('PGDATABASE'),
      user: env('PGUSER'),
      password: env('PGPASSWORD'),
      schema: env('DATABASE_SCHEMA', 'public'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
    pool: {
      min: 5,
      max: 20,
    },
    acquireConnectionTimeout: 30000, 
  },
});

// export default ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST', 'localhost'),
//       port: env.int('PGPORT', 5432),
//       database: env('PGDATABASE', 'postgres'),
//       user: env('PGUSER', 'postgres'),
//       password: env('PGPASSWORD', ''),
//       schema: env('DATABASE_SCHEMA', 'public'),
//       ssl: env.bool('DATABASE_SSL', true)
//         ? {
//             rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//           }
//         : false,
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     acquireConnectionTimeout: 20000,
//     debug: false,
//   },
// });




