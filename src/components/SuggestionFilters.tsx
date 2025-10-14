import { statuses } from '@/lib/formFields';
import { formatLabel } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';

const SuggestionFilters = ({
  selectedFilters,
  stateHandler,
}: {
  selectedFilters: string[];
  stateHandler: Dispatch<SetStateAction<string[]>>;
}) => {
  const allStatusesSelected = selectedFilters.length === statuses.length;

  const handleSelectedStatusChange = (status: string) => {
    if (status === 'all') {
      if (allStatusesSelected) {
        stateHandler([]);
      } else {
        stateHandler([...statuses]);
      }
    } else {
      stateHandler((prev: string[]) =>
        prev.includes(status)
          ? prev.filter(s => s !== status)
          : [...prev, status]
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="all"
        className="flex flex-row items-center gap-2 flex-nowrap"
      >
        <input
          type="checkbox"
          name="statusCheckboxes"
          id="all"
          value="all"
          checked={allStatusesSelected}
          onChange={() => handleSelectedStatusChange('all')}
        />
        Show All
      </label>
      {statuses.map((status: string) => {
        return (
          <label
            htmlFor={status}
            key={status}
            className="flex flex-row items-center gap-2 flex-nowrap"
          >
            <input
              type="checkbox"
              name="statusCheckboxes"
              id={status}
              value={status}
              checked={selectedFilters.includes(status)}
              onChange={() => handleSelectedStatusChange(status)}
            />
            {formatLabel(status)}
          </label>
        );
      })}
    </div>
  );
};
export default SuggestionFilters;
