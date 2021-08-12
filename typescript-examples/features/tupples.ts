const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Tupple annotation
// const pepsi: [string, boolean, number] = ["brown", true, 40];
// pepsi[0] = 40;

// Alias
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
// pepsi[0] = 40;

const sprite: Drink = ["clear", true, 30];

// Why we don't usually use tupples
const carSpecs: [number, number] = [400, 3354];

// objects increase readability
const carStats = {
  horsepower: 400,
  weight: 3354,
};
