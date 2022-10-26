export function formatDateTime(date: Date, dictionary: string[]): string {
  const year = date.getFullYear();
  const month = dictionary.filter((_month, index) => index === date.getMonth());
  const day = date.getDate();
  return `${day} ${month} ${year}`;
}
