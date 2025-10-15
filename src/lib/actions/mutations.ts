/*
  - Server action to update suggestions by id, create new suggestions via formData
  - Makes use of revaldiatePath function from nextjs to ensure new data causes a rerender
  - Same comment about sql as data.ts applies - in bigger cirumcstances might consider additional tools for db access but suitable in some cases
*/
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
    if (suggestionStatus === 'completed') {
      await dbConnection`
        UPDATE suggestions
        SET status = ${suggestionStatus},
            "dateCompleted" = NOW()
        WHERE id = ${id};
    `;

      // Refetch page
      revalidatePath('/');

      return;
    }

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
  type suggestionFormData = {
    employeeId: string;
    type: string;
    description: string;
    status: string;
    priority: string;
    source: string;
    dateCompleted?: string;
    notes?: string;
    createdBy?: string;
  };

  const data = {
    ...Object.fromEntries(formData.entries()),
  } as suggestionFormData;

  // Suggestions created via the form are admin generated, remainder are VIDA
  const suggestionSource = 'admin';

  try {
    await dbConnection`
    INSERT INTO suggestions
    (
        "employeeId", type, description, status, priority, source, "dateCompleted", notes,"createdBy"
    )
    VALUES
    (
        ${data.employeeId}, ${data.type}, ${data.description}, ${data.status}, ${data.priority}, ${suggestionSource}, ${data.dateCompleted}, ${data.notes}, ${data.createdBy}
    );`;
  } catch (error) {
    console.log(error);
  }

  revalidatePath('/');
}
