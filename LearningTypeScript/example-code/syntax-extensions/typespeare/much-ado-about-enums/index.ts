// import { Colors } from "./colors";
// import { rhymes } from "./rhymes";

// export function makeRhyme(color: keyof typeof Colors) {
// 	const value = Colors[color];
// 	const [third, fourth] = rhymes[value];

// 	console.log(`Roses are red,`);
// 	console.log(`\tviolets are ${value}.`);
// 	console.log(`${third},`);
// 	console.log(`\t${fourth}.`);
// 	console.log("");
// }

// makeRhyme("Blue");
// makeRhyme("Red");
// makeRhyme("Yellow");

import { Color } from "./colors";
import { rhymes } from "./rhymes";

export function makeRhyme(color: Color) {
  const [third, fourth] = rhymes[color];

  console.log(`Roses are red,`);
  console.log(`\tviolets are ${color}.`);
  console.log(`${third},`);
  console.log(`\t${fourth}.`);
  console.log("");
}

makeRhyme(Color.Blue);
makeRhyme(Color.Red);
makeRhyme(Color.Yellow);
