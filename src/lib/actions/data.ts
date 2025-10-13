'use server';

// import { Employee } from '@/types/Employee';
import { Suggestion } from '@/types/Suggestion';
import { dbConnection } from '../db';

// export async function getData() {
//   const data = await sql`SELECT * FROM suggestions;`;

//   return data;
// }

// async function loadData(): Promise<SampleData | null> {
//   try {
//     const file = await fs.readFile(
//       process.cwd() + '/src/data/sample-data.json',
//       'utf8'
//     );

//     return JSON.parse(file) as SampleData;
//   } catch (error) {
//     console.error('Failed to load sample data with error:', error);
//     return null;
//   }
// }

export async function getSuggestions(): Promise<Suggestion[] | []> {
  try {
    // Selecting all columns in the table doesn't scale, this would be one of the first refactor areas (adding an ORM or different strategy of data fetching)
    const data =
      await dbConnection`SELECT * FROM suggestions ORDER BY "dateCreated" DESC;`;

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

// export async function getEmployees(): Promise<Employee[]> {
//   const data = await loadData();

//   if (!data || !data.employees) {
//     console.error('No employees found in the data');
//     return [];
//   }

//   return data.employees;
// }
