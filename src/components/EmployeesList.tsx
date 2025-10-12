import { Employee } from '@/types/Employee';

const EmployeesList = ({ employees }: { employees: Employee[] }) => {
  if (employees.length !== 0) {
    return <div>No employees found</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {employees.map(employee => {
          return (
            <div key={employee.id} className="border p-2 rounded">
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
