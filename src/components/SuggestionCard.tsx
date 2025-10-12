'use client';
import { capitalizeWord, formatDate, formatStatus } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useState } from 'react';

const SuggestionCard = ({ suggestion }: { suggestion: Suggestion }) => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
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

          <p>{formatStatus(suggestion.status)}</p>

          {/* <input
            type="text"
            value={formatStatus(suggestion.status)}
            onChange={e => setText(e.target.value)}
          /> */}
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
