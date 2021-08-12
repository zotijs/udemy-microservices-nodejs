const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corola"], ["camaro"]];

// Help with inferene when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(3)

// Help with map
carMakers.map((car: string) => {
  // car. autocomplete with String methods
  return car;
});

// Flexible types
// const importantDates = [new Date(), "2030-10-10"];
const importantDates: (Date | string)[] = [new Date()];

importantDates.push(new Date());
importantDates.push("2021-10-10");
// importantDates.push(4);
