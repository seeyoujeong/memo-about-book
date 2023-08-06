export interface LandmarkBase {
  name: string;
}

export interface Fort extends LandmarkBase {
  type: "fort";
}

export interface Lake extends LandmarkBase {
  miles: number;
  type: "lake";
}

export interface Lighthouse extends LandmarkBase {
  lit: number;
  height: number;
  type: "lighthouse";
}

export interface Mountain extends LandmarkBase {
  height: number;
  type: "mountain";
}

export interface Park extends LandmarkBase {
  acres: number;
  type: "park";
}

export interface River extends LandmarkBase {
  length: number;
  depth: number;
  type: "river";
}

export interface Waterfall extends LandmarkBase {
  height: number;
  type: "waterfall";
}

export type Landmark =
  | Fort
  | Lake
  | Lighthouse
  | Mountain
  | Park
  | River
  | Waterfall;

export function describeLandmark(landmark: Landmark) {
  const description: string[] = [
    `${landmark.name} is a ${landmark.type} in Upstate New York.`,
  ];

  switch (landmark.type) {
    case "fort":
      break;
    case "lake":
      description.push(`It covers ${landmark.miles} square miles of water.`);
      break;
    case "lighthouse":
      description.push(
        `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
      );
      break;
    case "mountain":
      description.push(`Its peak is ${landmark.height} feet high.`);
      break;
    case "park":
      description.push(`It covers ${landmark.acres} square acres.`);
      break;
    case "river":
      description.push(
        `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
      );
      break;
    case "waterfall":
      description.push(`It is ${landmark.height} feet high.`);
      break;
  }

  return description.join("\n");
}
