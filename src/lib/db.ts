import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// singleton connection
export const dbConnection = neon(process.env.DATABASE_URL);
