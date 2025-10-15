/*
  - Client side form that collects data for new suggestions
  - Uses a server side mutation createSuggestion to actually submit the results
  - Takes in a callback prop called onFormSuccess which enables actions after the form is finished
  - Uses HTML form field validation where applicable
  - Could be enhanced with better form field validation in future
*/
'use client';

import { createSuggestion } from '@/lib/actions/mutations';
import {
  suggestionTypeOptions,
  statuses,
  priotityOptions,
} from '@/lib/formFields';

import { formatLabel } from '@/lib/utils';
import { Employee } from '@/types/Employee';
import EmployeesSelect from './EmployeesSelect';

const SuggestionForm = ({
  onFormSuccess,
  employees,
}: {
  onFormSuccess: () => void;
  employees: Employee[];
}) => {
  return (
    <form
      action={async (formData: FormData) => {
        await createSuggestion(formData);
        onFormSuccess();
      }}
      className="flex flex-col gap-4 p-6 justify-center shadow"
    >
      <h2 className="text-xl font-semibold text-indigo-600">
        Add New Suggestion
      </h2>

      <label htmlFor="employeeId">
        <span className="label">
          Assign to<span className="text-red-300">*</span>
        </span>
        <EmployeesSelect employees={employees} />
      </label>

      <div className="">
        <span className="label">
          Status<span className="text-red-300">*</span>
        </span>
        <div className="flex gap-4 flex-col md:flex-row items-start md:items-center">
          {statuses.map((status: string) => {
            return (
              <label
                key={status}
                htmlFor={status}
                className="flex flex-row gap-1 items-center"
              >
                <input
                  className=""
                  type="radio"
                  name={'status'}
                  id={status}
                  value={status}
                  defaultChecked={status === 'pending'}
                />
                {formatLabel(status)}
              </label>
            );
          })}
        </div>
      </div>
      <label htmlFor="description" className="flex flex-col gap-2">
        <span className="label">
          Description<span className="text-red-300">*</span>
        </span>
        <textarea
          name="description"
          id=""
          cols={12}
          rows={2}
          className="input"
          required
        ></textarea>
      </label>
      <div>
        <span className="label">
          Type<span className="text-red-300">*</span>
        </span>
        <div className="flex gap-4 flex-col md:flex-row items-start md:items-center">
          {suggestionTypeOptions.map((type: string) => {
            return (
              <label
                key={type}
                htmlFor={type}
                className="flex flex-row gap-1 items-center"
              >
                <input
                  type="radio"
                  name={'type'}
                  id={type}
                  value={type}
                  defaultChecked={type === 'behavioural'}
                />
                {formatLabel(type)}
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <span className="label">
          Priority<span className="text-red-300">*</span>
        </span>
        <div className="flex gap-4 flex-row items-start md:items-center">
          {priotityOptions.map((priority: string) => {
            const colourCodedOptions: Record<string, string> = {
              low: 'bg-yellow-100 border-yellow-300',
              medium: 'bg-blue-50 border-blue-200',
              high: 'bg-red-50 border-red-300',
            };
            return (
              <label
                key={priority}
                htmlFor={priority}
                className={`flex flex-row gap-1 items-center  border  rounded-sm px-2 py-1 ${colourCodedOptions[priority]}`}
              >
                <input
                  type="radio"
                  name={'priority'}
                  id={priority}
                  value={priority}
                  defaultChecked={priority === 'low'}
                />
                {formatLabel(priority)}
              </label>
            );
          })}
        </div>
      </div>
      <label htmlFor="notes" className="flex flex-col gap-2">
        <span className="label">Notes</span>
        <textarea
          name="notes"
          id=""
          cols={12}
          rows={3}
          className="input"
        ></textarea>
      </label>
      <label htmlFor="createdBy" className="flex flex-col gap-2">
        <span className="label">Created by</span>
        <input type="email" name="" id="" className="input" />
      </label>
      <label htmlFor="completedDate" className="flex flex-col gap-2">
        <span className="label">Completed</span>
        <input
          type="date"
          name="completedDate"
          id="completedDate"
          className="input"
        />
      </label>

      <button className="primary-button" type="submit">
        Submit Suggestion
      </button>
    </form>
  );
};

export default SuggestionForm;
