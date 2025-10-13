'use server';
import { neon } from '@neondatabase/serverless';

// function neonConnection() {
//   if (!process.env.DATABASE_URL) {
//     throw new Error('DATABASE_URL environment variable is not defined');
//   }

//   // singleton connection
//   const sql = neon(process.env.DATABASE_URL);

//   return sql;
// }

// export const dbConnection = neonConnection();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// singleton connection
export const dbConnection = neon(process.env.DATABASE_URL);
