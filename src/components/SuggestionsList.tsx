'use client';

import { Suggestion } from '@/types/Suggestion';
import SuggestionCard from './SuggestionCard';

const SuggestionsList = ({ suggestions }: { suggestions: Suggestion[] }) => {
  if (suggestions.length === 0) {
    return <div>No suggestions found </div>;
  }

  return (
    <div className="flex-4">
      <h2 className="md-heading mb-1">Suggestions</h2>
      <div className="flex flex-col gap-4">
        {suggestions.map(suggestion => {
          return <SuggestionCard suggestion={suggestion} key={suggestion.id} />;
        })}
      </div>
    </div>
  );
};

export default SuggestionsList;
