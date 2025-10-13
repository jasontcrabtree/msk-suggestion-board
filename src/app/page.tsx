import EmployeesList from '@/components/EmployeesList';
import SuggestionsList from '@/components/SuggestionsList';
import { getSuggestions } from '@/lib/actions/data';
import { formatStatus, statuses } from '@/lib/utils';

export default async function Home() {
  // const employeeData = await getEmployees();
  const suggestionData = await getSuggestions();

  // const test = await getSuggestions();

  // console.log('test', test);

  return (
    <div className="p-16 mx-auto max-w-1280px flex flex-col gap-12">
      <h1 className="text-xl font-bold">Sample Data, client side</h1>

      <div>
        {statuses.map((status: string) => {
          return (
            <label key={status} htmlFor={status}>
              <input
                type="radio"
                name="statusFilters"
                id={status}
                value={status}
                defaultChecked={status === 'pending'}
              />
              {formatStatus(status)}
            </label>
          );
        })}
      </div>

      <SuggestionsList suggestions={suggestionData} />
      {/* <EmployeesList employees={employeeData} /> */}
    </div>
  );
}
