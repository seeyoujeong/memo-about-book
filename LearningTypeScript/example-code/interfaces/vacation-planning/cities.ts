export interface City {
  catchphrase?: string;
  coordinates: Coordinates;
  name: string;
}

export interface Coordinates {
  north: Coordinate;
  west: Coordinate;
}

export type Coordinate = [number, number, number];

function describeUnit(coordinate: Coordinate) {
  return coordinate.map((num) => num.toString().padStart(2, "0"));
}

export function describeCity(city: City) {
  const [n1, n2, n3] = describeUnit(city.coordinates.north);
  const [w1, w2, w3] = describeUnit(city.coordinates.west);

  if (!city.catchphrase) {
    return `${city.name}, New York
* Located at ${n1}°${n2}'${n3}"N ${w1}°${w2}'${w3}"W`;
  }

  return `${city.name}, New York
* "${city.catchphrase}"
* Located at ${n1}°${n2}'${n3}"N ${w1}°${w2}'${w3}"W`;
}

// function describeUnit(unit: number) {
// 	return unit.toString().padStart(2, "0");
// }

// function describeCoordinate(coordinate: Coordinate) {
// 	return [
// 		`${describeUnit(coordinate[0])}°`,
// 		`${describeUnit(coordinate[1])}'`,
// 		`${describeUnit(coordinate[2])}"`,
// 	].join("");
// }

// export function describeCity(city: City) {
// 	const lines = [`${city.name}, New York`];

// 	if (city.catchphrase) {
// 		lines.push(`* "${city.catchphrase}"`);
// 	}

// 	lines.push(
// 		[
// 			`* Located at`,
// 			`${describeCoordinate(city.coordinates.north)}N`,
// 			`${describeCoordinate(city.coordinates.west)}W`,
// 		].join(" ")
// 	);

// 	return lines.join("\n");
// }
