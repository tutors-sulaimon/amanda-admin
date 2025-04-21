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


// export default ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST'),
//       port: env.int('PGPORT'),
//       database: env('PGDATABASE'),
//       user: env('PGUSER'),
//       password: env('PGPASSWORD'),
//       schema: env('DATABASE_SCHEMA', 'public'),
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       },
//     },
//     debug: false,
//   },
// });

export default ({ env }) => {
  // Check if DATABASE_URL is available (Railway provides this)
  const connectionString = env('DATABASE_URL');
  
  if (connectionString) {
    // Use the connection string if available
    return {
      connection: {
        client: 'postgres',
        connection: connectionString,
        debug: false,
        acquireConnectionTimeout: 60000,
        pool: {
          min: 0,
          max: 10,
          acquireTimeoutMillis: 60000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis: 30000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
        },
      },
    };
  } else {
    // Fallback to individual connection parameters
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('PGHOST'),
          port: env.int('PGPORT', 5432),
          database: env('PGDATABASE'),
          user: env('PGUSER'),
          password: env('PGPASSWORD'),
          ssl: env.bool('DATABASE_SSL', true) ? {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          } : false,
        },
        debug: false,
        acquireConnectionTimeout: 60000,
        pool: {
          min: 0,
          max: 10,
          acquireTimeoutMillis: 60000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis: 30000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
        },
      },
    };
  }
};
