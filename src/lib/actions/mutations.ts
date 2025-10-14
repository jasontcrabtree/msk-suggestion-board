'use server';

import { revalidatePath } from 'next/cache';
import { dbConnection } from '../db';

export async function updateStatus({
  id,
  suggestionStatus,
}: {
  id: string;
  suggestionStatus: string;
}) {
  try {
    await dbConnection`
        UPDATE suggestions
        SET status = ${suggestionStatus}
        WHERE id = ${id};
    `;

    // Refetch page
    revalidatePath('/');
  } catch (error) {
    console.error(error);
  }
}

export async function createSuggestion(formData: FormData) {
  const title = formData.get('itemID');
  const content = formData.get('content');

  const data = {
    ...Object.fromEntries(formData.entries()),
  };

  console.log('data', data);
  console.log('data', data.itemID);

  try {
    await dbConnection`
    INSERT INTO suggestions
    (
        type,
        description,
        status,
        priority,
        source,
        "dateCompleted",
        notes,
        "createdBy"
    )
    VALUES
    (
        'type test via app',
        'desc',
        'status',
        'prior',
        'source',
        NULL,
        'notes',
        'jason'
    )`;
  } catch (error) {
    console.log(error);
  }

  revalidatePath('/');
}
