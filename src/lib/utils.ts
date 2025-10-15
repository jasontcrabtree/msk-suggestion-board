/*
  Utility functions to format text, modify dates, filter lists
*/
import { Suggestion } from '@/types/Suggestion';

/**
 * Takes ISO-Z date and formats to human readable string
 * @param inputDate
 * @returns Formatted date as text string
 */
export const formatDate = (inputDate: Date): string => {
  if (!inputDate) {
    return '';
  }
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formattedDate;
};

/**
 * Capitalizes the first letter of the passed input string
 * @param inputStr
 * @returns capitalized word
 */
export function capitalizeWord(inputStr: string): string {
  if (!inputStr) {
    return '';
  }
  return inputStr.charAt(0).toUpperCase() + inputStr.substring(1);
}

/**
 *  Formats the API label result in a readable way. Additional formatting steps can be added in the futrue
 * @param str API output string
 * @returns Human formatted string
 */
export function formatLabel(str: string): string {
  if (!str) {
    return '';
  }

  const splitWords = str.split('_');
  const capitalizeWords = splitWords.map(word => capitalizeWord(word));
  return capitalizeWords.join(' ');
}

export function filterSuggestionsBySelectedItems(
  allItems: Suggestion[],
  filters: string[]
) {
  const filtered = allItems.filter((s: { status: string }) =>
    filters.includes(s.status)
  );

  return filtered;
}
