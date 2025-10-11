import { getSuggestions } from '@/lib/actions/data';

const SuggestionsList = async () => {
  const suggestions = await getSuggestions();

  return (
    <>
      <div className="flex flex-col gap-4">
        {suggestions.map(suggestion => {
          return (
            <div
              key={suggestion.id}
              className="border border-white p-2 rounded"
            >
              <div>{suggestion.notes}</div>
              <div>{suggestion.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SuggestionsList;
