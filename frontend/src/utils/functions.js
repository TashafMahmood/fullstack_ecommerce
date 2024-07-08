export const getPercentage = (a,b) => {
  return Math.floor(((b - a)/ b) * 100) + "%";
};
