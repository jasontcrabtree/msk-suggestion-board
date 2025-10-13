'use client';
import { updateStatus } from '@/lib/actions/mutations';
import { statuses } from '@/lib/utils';
import { capitalizeWord, formatDate, formatStatus } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useEffect, useState } from 'react';

const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  function handleClick() {
    setCount(count + 1);
  }

  // function hardcodedStatusUpdate() {
  //   updateStatus({
  //     id: '550e8400-e29b-41d4-a716-446655440001',
  //     suggestionStatus: 'in_progress',
  //   });
  // }

  // const [suggestionStatus, setSuggestionStatus] = useState('');

  // useEffect(() => {
  //   updateStatus({
  //     id: suggestion.id,
  //     suggestionStatus: 'pending',
  //   });
  // }, [suggestionStatus]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>{text}</h1>
        <div key={suggestion.id} className="border border-black p-2 rounded-xl">
          {/* <p>Counqt is: {count}</p>
          <button onClick={handleClick}>Increment count</button> */}

          <p>Created: {formatDate(suggestion.dateCreated)}</p>
          <p>Updated: {formatDate(suggestion.dateUpdated)}</p>
          <p>
            {suggestion.dateCompleted && (
              <div>Completed: {formatDate(suggestion.dateCompleted)}</div>
            )}
          </p>
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
            className="border rounded-full px-2 bg-blue-100 font-semibold py-1"
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
                  {formatStatus(status)}
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
