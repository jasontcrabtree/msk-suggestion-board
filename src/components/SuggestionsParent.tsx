'use client';

import SuggestionsList from '@/components/SuggestionsList';
import { statuses } from '@/lib/formFields';

import { filterSuggestionsBySelectedItems } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useMemo, useState } from 'react';
import SuggestionFilters from './SuggestionFilters';
import EmployeesSelect from './EmployeesSelect';
import { Employee } from '@/types/Employee';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SuggestionsParent = ({
  suggestions,
  employees,
}: {
  suggestions: Suggestion[];
  employees: Employee[];
}) => {
  const [checkedStatuses, setCheckedStatuses] = useState([...statuses]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [isEmployeeListOpen, setIsEmployeeListOpen] = useState(true);
  const [isStatusFiltersOpen, setIsStatusFiltersOpen] = useState(true);

  const filteredSuggestions = useMemo(() => {
    let results = filterSuggestionsBySelectedItems(
      suggestions,
      checkedStatuses
    );
    if (selectedEmployee.length > 0) {
      results = results.filter(s => s.employeeId === selectedEmployee);
    }
    return results;
  }, [suggestions, checkedStatuses, selectedEmployee]);

  return (
    <div className="gap-2 md:gap-8 mx-auto w-full max-w-[1080px] p-2 flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr]">
      <SuggestionsList suggestions={filteredSuggestions} />

      <div className="col-start-2 col-end-auto flex flex-col gap-2 md:gap-8 w-full h-full px-4 py-2 md:p-0 md:pt-2">
        <div className="flex flex-col gap-2">
          <button
            className="text-slate-500 h-6 w-full flex flex-row items-center gap-2"
            onClick={() => {
              setIsEmployeeListOpen(!isEmployeeListOpen);
            }}
          >
            <h3 className="md-heading">
              <span className="text-nowrap">Filter by Employee</span>
            </h3>

            {isEmployeeListOpen ? (
              <ChevronDown strokeWidth={3} size={16} />
            ) : (
              <ChevronUp strokeWidth={3} size={16} />
            )}
          </button>

          {isEmployeeListOpen && (
            <EmployeesSelect
              employees={employees}
              changeHandler={e => {
                setSelectedEmployee(e.target.value);
              }}
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="text-slate-500 h-6 w-full flex flex-row items-center gap-2"
            onClick={() => {
              setIsStatusFiltersOpen(!isStatusFiltersOpen);
            }}
          >
            <h3 className="md-heading">
              <span className="text-nowrap">Filter by Status</span>
            </h3>

            {isStatusFiltersOpen ? (
              <ChevronDown strokeWidth={3} size={16} />
            ) : (
              <ChevronUp strokeWidth={3} size={16} />
            )}
          </button>

          {isStatusFiltersOpen && (
            <SuggestionFilters
              selectedFilters={checkedStatuses}
              stateHandler={setCheckedStatuses}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsParent;
