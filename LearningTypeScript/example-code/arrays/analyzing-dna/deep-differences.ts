export function deepDifferences(a: string[][], b: string[][]) {
  if (a.length !== b.length) {
    return undefined;
  }

  const Allresults: ((string | undefined)[] | undefined)[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      Allresults.push(undefined);
      continue;
    }

    const results: (string | undefined)[] = [];

    for (let j = 0; j < a[i].length; j++) {
      results.push(a[i][j] === b[i][j] ? a[i][j] : undefined);
    }

    Allresults.push(results);
  }

  return Allresults;
}
