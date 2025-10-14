'use client';

import SuggestionsList from '@/components/SuggestionsList';
import {
  filterSuggestionsBySelectedItems,
  formatStatus,
  statuses,
} from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useMemo, useState } from 'react';

const SuggestionsParent = ({ suggestions }: { suggestions: Suggestion[] }) => {
  const [selected, setSelected] = useState([...statuses]);
  const allStatusesSelected = selected.length === statuses.length;

  const handleSelectedStatusChange = (status: string) => {
    if (status === 'all') {
      if (allStatusesSelected) {
        setSelected([]);
      } else {
        setSelected([...statuses]);
      }
    } else {
      setSelected(prev =>
        prev.includes(status)
          ? prev.filter(s => s !== status)
          : [...prev, status]
      );
    }
  };

  const filteredSuggestions = useMemo(
    () => filterSuggestionsBySelectedItems(suggestions, selected),
    [suggestions, selected]
  );

  return (
    <>
      <div className="flex flex-row gap-6 flex-wrap">
        <label htmlFor="all">
          <input
            type="checkbox"
            name="statusCheckboxes"
            id="all"
            value="all"
            checked={allStatusesSelected}
            onChange={() => handleSelectedStatusChange('all')}
          />{' '}
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
                checked={selected.includes(status)}
                onChange={() => handleSelectedStatusChange(status)}
              />{' '}
              {formatStatus(status)}
            </label>
          );
        })}
      </div>
      <SuggestionsList suggestions={filteredSuggestions} />
    </>
  );
};

export default SuggestionsParent;
