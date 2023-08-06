const favoriteAnimals = [
  "parakeet",
  "macaw",
  "cat",
  "monkey",
  "elephant",
  "alpaca",
  "fox",
];

export function checkIsAnyAnimalFavorite(...animals: string[]) {
  const favoriteAnimalsUnique = new Set(favoriteAnimals);

  return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
  return favoriteAnimals.slice(0, max);
}

export function logFavoriteAnimals() {
  favoriteAnimals.forEach((animal, i) => {
    console.log(`I like ${animal} number ${i}!`);
  });
}
