import { getEmployees, getSuggestions } from '@/lib/actions/data';
import SuggestionFormModal from '@/components/SuggestionFormModal';
import SuggestionsParent from '@/components/SuggestionsParent';

export default async function Home() {
  const suggestionData = await getSuggestions();
  const employees = await getEmployees();

  console.log('employees', employees);

  return (
    <div className="p-16 mx-auto max-w-[1280px] flex flex-col gap-2">
      <div className="flex flex-row w-full items-center justify-between gap-2">
        <h1 className="text-xl font-bold">MSK Management</h1>
        <SuggestionFormModal employees={employees} />
      </div>
      <SuggestionsParent suggestions={suggestionData} employees={employees} />
    </div>
  );
}
