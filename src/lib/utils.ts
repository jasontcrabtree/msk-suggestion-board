/**
 * Takes ISO-Z date and formats to human readable string
 * @param inputDate
 * @returns Formatted date as text string
 */
export const formatDate = (inputDate: Date): String => {
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
 *  Formats the API status result in a readable way. Additional formatting steps can be added in the futrue
 * @param status API output string
 * @returns Human formatted string
 */
export function formatStatus(status: string): string {
  if (!status) {
    return '';
  }

  const splitWords = status.split('_');
  const capitalizeWords = splitWords.map(word => capitalizeWord(word));
  return capitalizeWords.join(' ');
}
