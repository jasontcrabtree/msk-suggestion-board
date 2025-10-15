/*
  - Presentational component to render a list of provided employees
  - Importantly, the list of employees is filtered elsewhere, this list just displays the data provided
  - This makes this a pure componennt
  - If required, this component could be extended to take a generic list of items, not just employees (which would require some JSX rework)
  - By provided an optional changeHandler prop, we ensure this component remains flexible and resuable
  - This component is used twice, once on the SuggestionForm (to select the employee to assign the sugggestion against)
  and a second time on the SuggestionParent, where a changeHandler is passed that modifies the list of Suggestions being shown based on whichever employee is chosen
*/

import { formatLabel } from '@/lib/utils';
import { Employee } from '@/types/Employee';

const EmployeesSelect = ({
  employees,
  changeHandler,
}: {
  employees: Employee[];
  changeHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  if (employees.length === 0) {
    return <div>No employees found</div>;
  }

  return (
    <>
      <select
        className="input pr-4"
        name="employeeId"
        id="employeeId"
        defaultValue={''}
        onChange={e => changeHandler?.(e)}
      >
        <option value=""> </option>
        {employees.map((employee: Employee) => {
          return (
            <option key={employee.id} value={employee.id}>
              {formatLabel(employee.name)}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default EmployeesSelect;
