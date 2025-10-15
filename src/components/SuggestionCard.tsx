/*
  - This is a presentational component resonsible for displaying 1 single suggestion
  - We apply some dynamic styles based on the suggestions status and priority
  - Some text manipulation is done for formatting purposes, however this is only applied at the display level
  - This is a server side component, and it calls a server side action (updateStatus)
*/

import { User, Zap } from 'lucide-react';
import { statuses } from '@/lib/formFields';
import { updateStatus } from '@/lib/actions/mutations';
import { capitalizeWord, formatDate, formatLabel } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';

const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
  const suggestionSelectColourMap: Record<string, string> = {
    overdue: 'bg-red-100 outline-red-300',
    in_progress: 'bg-blue-100 outline-blue-300',
    pending: 'bg-yellow-50 outline-yellow-300',
    completed: 'bg-green-50 outline-green-300',
  };

  const priorityBorderColourMap: Record<string, string> = {
    low: 'border-t-teal-400',
    medium: 'border-t-orange-300',
    high: 'border-t-red-400',
  };

  const priorityTextColourMap: Record<string, string> = {
    low: 'text-teal-600',
    medium: 'text-orange-600',
    high: 'text-red-600',
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          key={suggestion.id}
          className={`w-full border-1 border-t-4 border-slate-200 px-6 py-4 rounded-sm shadow flex flex-col gap-4
            ${priorityBorderColourMap[suggestion.priority]}`}
        >
          <div className="flex flex-col gap-1">
            {suggestion.description && (
              <div className="font-bold">{suggestion.description}</div>
            )}

            {suggestion.notes && <div>{suggestion.notes}</div>}
          </div>

          <div className="flex flex-row w-full justify-between items-start gap-8">
            <div className="w-[60%]">
              <p>
                <span className="font-semibold text-slate-600">Reported: </span>
                {formatDate(suggestion.dateCreated)}
              </p>
              <p>
                <span className="font-semibold text-slate-600">
                  Last Update:{' '}
                </span>
                {formatDate(suggestion.dateUpdated)}
              </p>
              <div className="flex flex-nowrap flex-row gap-1">
                <span className="font-semibold text-slate-600">
                  Completed:{' '}
                </span>
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
                <span className="font-semibold text-slate-600">Priority: </span>
                <span
                  className={`font-bold ${
                    priorityTextColourMap[suggestion.priority]
                  }`}
                >
                  {suggestion.priority.toUpperCase()}
                </span>
              </p>
              <p>
                <span className="font-semibold text-slate-600">Type: </span>
                {capitalizeWord(suggestion.type)}
              </p>
              <p className="flex flex-row gap-1 items-center justify-end">
                <span className="font-semibold text-slate-600">Source: </span>
                {suggestion.source.toUpperCase()}

                {suggestion.source === 'vida' ? (
                  <Zap size={16} />
                ) : (
                  <User size={16} />
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 w-full justify-between">
            <p className="">
              <span className="font-semibold text-slate-600">Assigned to:</span>{' '}
              {suggestion.employeeName}
            </p>

            <select
              className={`block w-fit rounded-md p-1.5 text-base text-gray-900 outline-2 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 cursor-pointer
              ${suggestionSelectColourMap[suggestion.status]}
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
