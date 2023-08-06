export type SmallPetFood =
  | "bugs"
  | "fruits"
  | "insects"
  | "plants"
  | "seeds"
  | "vegetables";

export abstract class SmallFurryPet {
  readonly species: string;
  protected happiness: number;

  constructor(species: string) {
    this.species = species;
    this.happiness = 0;
  }

  abstract eats(food: SmallPetFood): boolean;

  isHappy() {
    return this.happiness > 0;
  }
}

export class Gerbil extends SmallFurryPet {
  constructor() {
    super("Gerbil");
  }

  eats(food: SmallPetFood) {
    switch (food) {
      case "insects":
      case "plants":
      case "seeds":
      case "vegetables":
        return true;
      default:
        return false;
    }

    // solution
    // return ["insects", "plants", "seeds", "vegetables"].includes(food);
  }

  dig() {
    this.happiness++;
  }
}

export class Hamster extends SmallFurryPet {
  constructor() {
    super("Hamster");
  }

  eats(food: SmallPetFood) {
    return true;
  }

  run() {
    this.happiness++;
  }
}
