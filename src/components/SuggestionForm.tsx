'use client';

import { createSuggestion } from '@/lib/actions/mutations';

const SuggestionForm = () => {
  return (
    <form action={createSuggestion} className="flex flex-col gap-4">
      {/* <input type="hidden" name="itemID" value={'1'} />
      <button type="submit">Add to Cart</button> */}

      <label>
        Type
        <select name="selectedFruit" className="border">
          <option value="apple">behavioural</option>
          <option value="banana">equipment</option>
          <option value="orange">exercise</option>
          <option value="orange">lifestyle</option>
        </select>
      </label>

      <label htmlFor="">
        Description
        <input type="text" name="" id="" className="border" />
      </label>

      <label>
        Status
        <select name="selectedFruit" className="border">
          <option value="apple">pending</option>
          <option value="banana">overdue</option>
          <option value="orange">completed</option>
          <option value="orange">in_progress</option>
        </select>
      </label>

      <label>
        Priority
        <select name="selectedFruit" className="border">
          <option value="apple">high</option>
          <option value="banana">medium</option>
          <option value="orange">low</option>
        </select>
      </label>

      <label htmlFor="">
        Completed
        <input type="date" name="" id="" className="border" />
      </label>

      <label htmlFor="">
        Notes
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="border"
        ></textarea>
      </label>

      <label htmlFor="">
        Created by
        <input type="email" name="" id="" className="border" />
      </label>
    </form>
  );
};

export default SuggestionForm;
