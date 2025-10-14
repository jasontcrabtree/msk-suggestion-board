'use client';

import SuggestionsList from '@/components/SuggestionsList';
import { statuses } from '@/lib/formFields';

import { filterSuggestionsBySelectedItems } from '@/lib/utils';
import { Suggestion } from '@/types/Suggestion';
import { useMemo, useState } from 'react';
import SuggestionFilters from './SuggestionFilters';
import EmployeesSelect from './EmployeesSelect';
import { Employee } from '@/types/Employee';

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
    <div className="flex flex-row gap-8 items-start">
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="md-heading">Filter by Employee</h3>
          <EmployeesSelect
            employees={employees}
            changeHandler={e => {
              setSelectedEmployee(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="md-heading">Filter by Status</h3>
          <SuggestionFilters
            selectedFilters={checkedStatuses}
            stateHandler={setCheckedStatuses}
          />
        </div>
      </div>

      <SuggestionsList suggestions={filteredSuggestions} />
    </div>
  );
};

export default SuggestionsParent;
