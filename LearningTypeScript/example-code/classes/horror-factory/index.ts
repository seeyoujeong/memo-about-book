export interface Consumed {
  evil: boolean;
  name: string;
  power: number;
}

export interface HorrorSetting {
  name: string;
  getPowerFrom: (consumed: Consumed) => number;
  isEvil: () => boolean;
}

export class Horror {
  readonly name: string;
  readonly #getPowerFrom: (consumed: Consumed) => number;
  readonly isEvil: () => boolean;

  constructor({ name, getPowerFrom, isEvil }: HorrorSetting) {
    this.name = name;
    this.#getPowerFrom = getPowerFrom;
    this.isEvil = isEvil;
  }

  #consumed: Consumed[] = [];

  #consume(horror: Horror) {
    this.#consumed.push({
      evil: horror.isEvil(),
      name: horror.name,
      power: horror.getPower(),
    });
  }

  doBattle(horror: Horror) {
    if (this.getPower() >= horror.getPower()) {
      this.#consume(horror);
    }
  }

  getPower() {
    return this.#consumed.reduce(
      (previous, consumed) => previous + this.#getPowerFrom(consumed),
      this.#consumed.length
    );
  }
}

export function createDemon() {
  return new Horror({
    name: "Demon",
    getPowerFrom: (consumed: Consumed) =>
      consumed.evil ? consumed.power / 2 : consumed.power * 2,
    isEvil: () => true,
  });
}

export function createSorcerer(name: string, evil: boolean) {
  return new Horror({
    name,
    getPowerFrom: (consumed: Consumed) =>
      consumed.evil === evil ? consumed.power * 2 : consumed.power,
    isEvil: () => evil,
  });
}
