export const getDate = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleString();
  return currentTime;
};
