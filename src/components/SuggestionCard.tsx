'use client';
import { updateStatus } from '@/lib/actions/mutations';
import { statuses } from '@/lib/formFields';

import { capitalizeWord, formatDate, formatLabel } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';

const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
  const suggestionColourMap: Record<string, string> = {
    overdue: 'bg-red-100 outline-red-300',
    in_progress: 'bg-blue-100 outline-blue-300',
    pending: 'bg-yellow-50 outline-yellow-300',
    completed: 'bg-green-50 outline-green-300',
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          key={suggestion.id}
          className="w-full border border-slate-200 px-6 py-4 rounded-md shadow bg-slate-100 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            {suggestion.description && (
              <div className="font-bold">{suggestion.description}</div>
            )}

            {suggestion.notes && <div>{suggestion.notes}</div>}
          </div>

          <div className="flex flex-row w-full justify-between items-start gap-8">
            <div>
              <p>
                <span className="font-semibold">Reported: </span>
                {formatDate(suggestion.dateCreated)}
              </p>
              <p>
                <span className="font-semibold">Last Update: </span>
                {formatDate(suggestion.dateUpdated)}
              </p>
              <div>
                <span className="font-semibold">Completed: </span>
                {suggestion.dateCompleted ? (
                  <div>{formatDate(suggestion.dateCompleted)}</div>
                ) : (
                  'N/A'
                )}
              </div>
              <p>{suggestion.createdBy}</p>
            </div>

            <div className="text-regular text-right">
              <p>
                <span className="font-semibold">Priority: </span>
                {suggestion.priority.toUpperCase()}
              </p>
              <p>
                <span className="font-semibold">Source: </span>
                {suggestion.source.toUpperCase()}
              </p>
              <p>
                <span className="font-semibold">Type: </span>
                {capitalizeWord(suggestion.type)}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 w-full justify-between">
            <p className="">
              <span className="font-semibold">Assigned to:</span>{' '}
              {suggestion.employeeName}
            </p>

            <select
              className={`block w-fit rounded-md p-1.5 text-base text-gray-900 outline-2 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 cursor-pointer
              ${suggestionColourMap[suggestion.status]}
              `}
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
      </div>
    </>
  );
};

export default SuggestionCard;
