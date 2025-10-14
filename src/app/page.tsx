import SuggestionForm from '@/components/SuggestionForm';
import SuggestionsParent from '@/components/SuggestionsParent';
// import EmployeesList from '@/components/EmployeesList';

import { getSuggestions } from '@/lib/actions/data';

export default async function Home() {
  // const employeeData = await getEmployees();
  const suggestionData = await getSuggestions();

  return (
    <div className="p-16 mx-auto max-w-1280px flex flex-col gap-12">
      <h1 className="text-xl font-bold">Sample Data, client side</h1>

      <SuggestionForm />

      <SuggestionsParent suggestions={suggestionData} />
      {/* <EmployeesList employees={employeeData} /> */}
    </div>
  );
}
