export function formatDate(date: string): string {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('en-US').format(newDate);
}