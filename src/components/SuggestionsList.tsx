'use client';

import { Suggestion } from '@/types/Suggestion';
import SuggestionCard from './SuggestionCard';

const SuggestionsList = ({ suggestions }: { suggestions: Suggestion[] }) => {
  if (suggestions.length === 0) {
    return <div>No suggestions found </div>;
  }

  return (
    <div className="col-start-1 col-end-2 w-full max-h-[92vh] overflow-y-auto bg-white px-2 pt-2">
      <h2 className="md-heading mb-4">Suggestions</h2>
      <div className="flex flex-col gap-4">
        {suggestions.map(suggestion => {
          return <SuggestionCard suggestion={suggestion} key={suggestion.id} />;
        })}
      </div>
    </div>
  );
};

export default SuggestionsList;
