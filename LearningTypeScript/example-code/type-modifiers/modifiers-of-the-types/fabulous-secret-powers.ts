import { characters } from "./characters";

export interface Character {
  name: string;
  powers: string[];
  side: "good" | "evil";
}

export function announceCharacter(text: string) {
  const character = JSON.parse(text) as Character;

  console.log(`I am ${character.name}.`);
  console.log(`My powers are: ${character.powers.join(", ")}.`);
  console.log(`I am ${character.side}.`);

  return character;
}
