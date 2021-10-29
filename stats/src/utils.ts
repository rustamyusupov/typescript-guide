export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map(Number);

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
