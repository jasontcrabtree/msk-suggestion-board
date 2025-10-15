/*
    - Static fields used to populate lists. This would be one of the first refactors I'd do given the chance use db tables instead of hard coded lists.
    - In this case I think it's an OK tradeoff, and they are used in multiple places
*/
export const statuses = ['pending', 'completed', 'in_progress', 'overdue'];

export const suggestionTypeOptions = [
  'behavioural',
  'equipment',
  'exercise',
  'lifestyle',
];

export const priotityOptions = ['low', 'medium', 'high'];
