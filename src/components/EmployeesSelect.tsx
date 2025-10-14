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
