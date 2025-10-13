'use server';

import { dbConnection } from '../db';

// import { dbConnection } from '../db';

// import { neon } from '@neondatabase/serverless';

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL environment variable is not defined');
// }

// // singleton connection
// const sql = neon(process.env.DATABASE_URL);

export async function updateStatus({
  id,
  suggestionStatus,
}: {
  id: string;
  suggestionStatus: string;
}) {
  try {
    console.log('inside func', id, suggestionStatus);
    const res = await dbConnection`UPDATE suggestions
                                    SET status = ${suggestionStatus}
                                    WHERE id = ${id};`;
    console.log('res', res);
  } catch (error) {
    console.error(error);
  }
}

// ⨯ [Error: This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).] {
//   digest: '600749161'
// }
