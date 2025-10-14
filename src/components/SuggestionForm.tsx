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
      className="flex flex-col gap-4 p-8"
    >
      <EmployeesSelect employees={employees} />

      <div className="">
        <span className="font-semibold">Status*</span>
        <div className="flex flex-row gap-2 items-center">
          {statuses.map((status: string) => {
            return (
              <label
                key={status}
                htmlFor={status}
                className="flex flex-row gap-2 items-center"
              >
                <input
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
        <span className="font-semibold">Description*</span>
        <textarea
          name="description"
          id=""
          cols={12}
          rows={2}
          className="border p-2 rounded"
          required
        ></textarea>
      </label>
      <div>
        <span className="font-semibold">Type*</span>
        <div className="flex flex-row gap-2 items-center">
          {suggestionTypeOptions.map((type: string) => {
            return (
              <label
                key={type}
                htmlFor={type}
                className="flex flex-row gap-2 items-center"
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
        <span className="font-semibold">Priority*</span>
        <div className="flex flex-row gap-2 items-center">
          {priotityOptions.map((priority: string) => {
            return (
              <label
                key={priority}
                htmlFor={priority}
                className="flex flex-row gap-2 items-center border p-1"
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
        <span className="font-semibold">Notes</span>
        <textarea
          name="notes"
          id=""
          cols={12}
          rows={3}
          className="border p-2 rounded"
        ></textarea>
      </label>
      <label htmlFor="createdBy" className="flex flex-col gap-2">
        <span className="font-semibold">Created by</span>
        <input type="email" name="" id="" className="border" />
      </label>
      <label htmlFor="completedDate" className="flex flex-col gap-2">
        <span className="font-semibold">Completed</span>
        <input
          type="date"
          name="completedDate"
          id="completedDate"
          className="border w-fit p-1 rounded"
        />
      </label>
      <button
        className="border px-12 py-2 rounded bg-gray-200 semibold w-fit"
        type="submit"
      >
        Submit Suggestion
      </button>
    </form>
  );
};

export default SuggestionForm;
