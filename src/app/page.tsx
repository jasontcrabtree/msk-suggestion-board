import { getEmployees, getSuggestions } from '@/lib/actions/data';
import SuggestionFormModal from '@/components/SuggestionFormModal';
import SuggestionsParent from '@/components/SuggestionsParent';
import { HeartPlus } from 'lucide-react';

export default async function Home() {
  const suggestionData = await getSuggestions();
  const employees = await getEmployees();

  console.log('employees', employees);

  return (
    <div className="flex flex-col">
      <div className="bg-slate-50 shadow-md">
        <div className="w-full mx-auto max-w-[1080px] flex flex-row gap-4 p-4 items-center justify-between h-[8vh]">
          <h1 className="text-xl font-bold text-indigo-700 flex flex-row items-center gap-2">
            <HeartPlus strokeWidth={2} size={24} />
            MSK Helpboard
          </h1>
          <SuggestionFormModal employees={employees} />
        </div>
      </div>
      <SuggestionsParent suggestions={suggestionData} employees={employees} />
    </div>
  );
}
