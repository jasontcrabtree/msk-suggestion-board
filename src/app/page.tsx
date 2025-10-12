import EmployeesList from '@/components/EmployeesList';
import SuggestionsList from '@/components/SuggestionsList';
import { getData, getEmployees, getSuggestions } from '@/lib/actions/data';

export default async function Home() {
  const employeeData = await getEmployees();
  const suggestionData = await getSuggestions();

  const test = await getData();

  console.log('test', test);

  return (
    <div className="p-16 mx-auto max-w-1280px flex flex-col gap-12">
      <h1 className="text-xl font-bold">Sample Data, client side</h1>
      <SuggestionsList suggestions={suggestionData} />
      <EmployeesList employees={employeeData} />
    </div>
  );
}
