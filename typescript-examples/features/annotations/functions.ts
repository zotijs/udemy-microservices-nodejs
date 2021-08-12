// no inference for arguments
// works for return value but we are not using it
const add = (a: number, b: number): number => {
  return a + b;
};

// mine -> how to use args as array?
// const genericAdd = (args: number[]): number =>
//   args.reduce((res: number, val: number) => res + val, 0);

// genericAdd([1, 3, 4, 5])

// wirhout annotation function returns void without a warning
// const subtract = (a: number, b: number) => {
//   a - b;
// };

// correct
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // can return null
  // can return undefined
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorOrString = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
