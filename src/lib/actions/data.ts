'use server';

import { promises as fs } from 'fs';
import { Employee } from '@/types/Employee';
import { Suggestion } from '@/types/Suggestion';

type SampleData = {
  suggestions: Suggestion[];
  employees: Employee[];
};

async function loadData(): Promise<SampleData | null> {
  try {
    const file = await fs.readFile(
      process.cwd() + '/src/data/sample-data.json',
      'utf8'
    );

    return JSON.parse(file) as SampleData;
  } catch (error) {
    console.error('Failed to load sample data with error:', error);
    return null;
  }
}

export async function getSuggestions(): Promise<Suggestion[]> {
  const data = await loadData();

  if (!data || !data.suggestions) {
    console.error('No suggestions found in the data');
    return [];
  }

  return data.suggestions;
}

export async function getEmployees(): Promise<Employee[]> {
  const data = await loadData();

  if (!data || !data.employees) {
    console.error('No employees found in the data');
    return [];
  }

  return data.employees;
}
