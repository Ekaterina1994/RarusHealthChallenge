const array = ["hi", "hi2", "hi3", "hi4", "hi5"];

export const printMessage = (from: number, to: number) => {
  let current = from;

  const timerId = setInterval(function () {
    console.log(array[current]);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};