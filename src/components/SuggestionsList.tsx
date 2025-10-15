/*
  - Server side presentational component
  - Displays the list of suggestions provided
  - Importantly doesn't do any filtering itself, just shows the list of provided items
*/

import { Suggestion } from '@/types/Suggestion';
import SuggestionCard from './SuggestionCard';
import { Lightbulb } from 'lucide-react';

const SuggestionsList = ({ suggestions }: { suggestions: Suggestion[] }) => {
  if (suggestions.length === 0) {
    return (
      <div className="h-screen md:h-[92vh] flex items-center justify-center w-full text-lg text-slate-600">
        No suggestions found, update filters for more results ...
      </div>
    );
  }

  return (
    <div className="col-start-1 col-end-2 w-full max-h-screen md:max-h-[92vh] overflow-y-auto bg-white px-2 pt-2">
      <h2 className="md-heading mb-4">
        <Lightbulb />
        Suggestions
      </h2>
      <div className="flex flex-col gap-4 mb-6">
        {suggestions.map(suggestion => {
          return <SuggestionCard suggestion={suggestion} key={suggestion.id} />;
        })}
      </div>
    </div>
  );
};

export default SuggestionsList;
