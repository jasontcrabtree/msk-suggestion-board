import { getEmployees } from '@/lib/actions/data';

const EmployeesList = async () => {
  const employees = await getEmployees();

  return (
    <>
      <div className="flex flex-col gap-4">
        {employees.map(employee => {
          return (
            <div key={employee.id} className="border border-white p-2 rounded">
              <div>{employee.name}</div>
              <div>{employee.department}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EmployeesList;
