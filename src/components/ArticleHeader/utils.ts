export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));
