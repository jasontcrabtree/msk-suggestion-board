'use client';

import SuggestionsList from '@/components/SuggestionsList';
import { statuses } from '@/lib/formFields';

import { filterSuggestionsBySelectedItems } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useMemo, useState } from 'react';
import SuggestionFilters from './SuggestionFilters';
import EmployeesSelect from './EmployeesSelect';
import { Employee } from '@/types/Employee';
import { Funnel, IdCardLanyard } from 'lucide-react';

const SuggestionsParent = ({
  suggestions,
  employees,
}: {
  suggestions: Suggestion[];
  employees: Employee[];
}) => {
  const [checkedStatuses, setCheckedStatuses] = useState([...statuses]);
  const [selectedEmployee, setSelectedEmployee] = useState('');

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

      <div className="col-start-2 col-end-auto flex flex-col gap-8 w-full h-full p-4 md:p-0 md:pt-2">
        <div className="flex flex-col gap-2">
          <h3 className="md-heading">
            <IdCardLanyard strokeWidth={1.5} size={24} />
            Filter by Employee
          </h3>
          <EmployeesSelect
            employees={employees}
            changeHandler={e => {
              setSelectedEmployee(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="md-heading ">
            <Funnel strokeWidth={2} size={20} />
            Filter by Status
          </h3>
          <SuggestionFilters
            selectedFilters={checkedStatuses}
            stateHandler={setCheckedStatuses}
          />
        </div>
      </div>
    </div>
  );
};

export default SuggestionsParent;
