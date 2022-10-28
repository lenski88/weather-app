export function formatDateTime(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}.${month}`;
}

export const cityNameFormat = (name: string): string => {
  return name
    ?.split(" ")
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(" ");
};
