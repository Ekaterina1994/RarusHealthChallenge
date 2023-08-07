export const getRandomNumber = (min: number, max: number) => {
  const randomNumber = min + (Math.random() * (max + 1 - min));
  return Math.floor(randomNumber);
};