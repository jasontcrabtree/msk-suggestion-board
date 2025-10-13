'use client';

import { Suggestion } from '@/types/Suggestion';
import SuggestionCard from './SuggestionCard';

const SuggestionsList = ({ suggestions }: { suggestions: Suggestion[] }) => {
  if (suggestions.length === 0) {
    return <div>No suggestions found </div>;
  }

  console.log(suggestions);

  return (
    <>
      <div className="flex flex-col gap-4">
        {suggestions.map(suggestion => {
          return <SuggestionCard suggestion={suggestion} key={suggestion.id} />;
        })}
      </div>
    </>
  );
};

export default SuggestionsList;
