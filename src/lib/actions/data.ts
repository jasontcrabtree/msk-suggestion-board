/*
  - Server actions for fetching data. These will always run on the server (either local or vercel)
  - Makes use of dbConnection singleton connection to the neon db
  - Uses string literals for sql per neon recommendations. This scales at this level but past a certain level an ORM or tool like Zod or Zustand for schema validation could be considered
  - Makes use of a postgre join to fetch the names of the employees associated with each suggestion
*/
'use server';

import { Suggestion } from '@/types/Suggestion';
import { dbConnection } from '../db';
import { Employee } from '@/types/Employee';

export async function getSuggestions(): Promise<Suggestion[] | []> {
  try {
    // Selecting all columns in the table doesn't scale, this would be one of the first refactor areas (adding an ORM or different strategy of data fetching)
    const data = await dbConnection`
        SELECT s.*, e.name AS "employeeName"
        FROM suggestions s
        JOIN employees e ON s."employeeId" = e.id
        ORDER BY s."dateCreated" DESC;
        `;
    if (!data) {
      return [];
    }

    // In other circumstances I might use soomething like zod or prisma for tighter schemer validation, but this gives type errors during dev at least
    return data as Suggestion[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getEmployees(): Promise<Employee[] | []> {
  try {
    const data = await dbConnection`
        SELECT * FROM employees
        ORDER BY name ASC;
      `;

    if (!data) {
      return [];
    }

    return data as Employee[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
