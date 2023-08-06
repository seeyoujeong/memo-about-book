export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

interface Catacomb<T> {
  inside: Buried<T>;
  type: "catacomb";
}

interface TunnelSystem<T> {
  entrances: Buried<T>[];
  type: "tunnels";
}

interface Treasure<T> {
  content: T;
  type: "treasure";
}

export function collectTreasure<
  Content,
  Fake extends Content,
  Real extends Content
>(
  buried: Buried<Content>,
  isFake: (datum: Content) => datum is Fake,
  isReal: (datum: Content) => datum is Real
) {
  const fake: Fake[] = [];
  const real: Real[] = [];
  const scrap: Content[] = [];

  const sift = (data: Buried<Content>) => {
    const collected = collectTreasure(data, isFake, isReal);

    fake.push(...collected.fake);
    real.push(...collected.real);
    scrap.push(...collected.scrap);
  };

  if (buried instanceof Array) {
    for (const data of buried) {
      sift(data);
    }
  } else {
    switch (buried.type) {
      case "catacomb":
        sift(buried.inside);
        break;
      case "tunnels":
        for (const entrance of buried.entrances) {
          sift(entrance);
        }
        break;
      case "treasure":
        if (isFake(buried.content)) {
          fake.push(buried.content);
        } else if (isReal(buried.content)) {
          real.push(buried.content);
        } else {
          scrap.push(buried.content);
        }
    }
  }

  return { fake, real, scrap };
}
