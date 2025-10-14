'use client';
import { updateStatus } from '@/lib/actions/mutations';
import { statuses } from '@/lib/formFields';

import { capitalizeWord, formatDate, formatLabel } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';

const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div key={suggestion.id} className="border border-black p-2 rounded-xl">
          {suggestion.employeeName && <p>{suggestion.employeeName}</p>}
          <p>Created: {formatDate(suggestion.dateCreated)}</p>
          <p>Updated: {formatDate(suggestion.dateUpdated)}</p>
          <div>
            {suggestion.dateCompleted && (
              <div>Completed: {formatDate(suggestion.dateCompleted)}</div>
            )}
          </div>
          {suggestion.description && (
            <div className="font-bold">{suggestion.description}</div>
          )}
          {suggestion.notes && <div>{suggestion.notes}</div>}

          <div className="flex flex-row gap-4 w-full justify-between">
            <p>{suggestion.priority.toUpperCase()}</p>
            <p>{suggestion.source.toUpperCase()}</p>

            <p>{capitalizeWord(suggestion.type)}</p>
          </div>

          <p>Created by {suggestion.createdBy}</p>

          <select
            className="border rounded-full px-2 bg-indigo-100 font-semibold py-1"
            name={suggestion.id + suggestion.status}
            id={suggestion.id}
            defaultValue={suggestion.status}
            onChange={e => {
              updateStatus({
                id: suggestion.id,
                suggestionStatus: e.target.value,
              });
            }}
          >
            {statuses.map((status: string) => {
              return (
                <option key={status} value={status}>
                  {formatLabel(status)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
