import EmployeesList from '@/components/EmployeesList';
import SuggestionsList from '@/components/SuggestionsList';

export default function Home() {
  return (
    <div className="p-16 mx-auto max-w-1280px flex flex-col gap-12">
      <h1 className="text-xl font-bold">Sample Data</h1>
      <EmployeesList />
      <SuggestionsList />
    </div>
  );
}
