export interface Consumed {
  evil: boolean;
  name: string;
  power: number;
}

export abstract class Horror {
  abstract readonly name: string;
  protected abstract getPowerFrom(consumed: Consumed): number;
  protected abstract isEvil(): boolean;

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
      (previous, consumed) => previous + this.getPowerFrom(consumed),
      this.#consumed.length
    );
  }
}

export class Demon extends Horror {
  readonly name = "Demon";

  getPowerFrom(consumed: Consumed) {
    return consumed.evil ? consumed.power / 2 : consumed.power * 2;
  }

  isEvil() {
    return true;
  }
}

export class Sorcerer extends Horror {
  readonly name: string;
  #evil: boolean;

  constructor(name: string, evil: boolean) {
    super();
    this.name = name;
    this.#evil = evil;
  }

  getPowerFrom(consumed: Consumed) {
    return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
  }

  isEvil() {
    return this.#evil;
  }
}
