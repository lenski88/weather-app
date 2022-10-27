export function formatDateTime(date: Date, dictionary: string[]): string {
  const year = date.getFullYear();
  const month = dictionary.filter((_month, index) => index === date.getMonth());
  const day = date.getDate();
  return `${day} ${month} ${year}`;
}

export const cityNameFormat = (name: string): string => {
  return name
    .split(" ")
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(" ");
};
