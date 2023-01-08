export const getDateFromTimeString = (time: string) => {
  return Date.parse(`1970/01/01 ${time}`);
};
