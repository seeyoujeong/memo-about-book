type Diet = "omnivore" | "carnivore";

type Bird = {
  name: string;
  diet: Diet;
  dangerous?: boolean;
  intelligent?: boolean;
  noisy?: boolean;
};

export const birds: Bird[] = [
  {
    dangerous: true,
    diet: "omnivore",
    name: "White-Throated Magpie-Jay",
    noisy: true,
  },
  {
    diet: "omnivore",
    intelligent: true,
    name: "Eurasian Magpie",
  },
  {
    diet: "carnivore",
    name: "Yellow-Billed Blue Magpie",
    noisy: true,
  },
  {
    intelligent: true,
    diet: "omnivore",
    name: "American Crow",
  },
];
