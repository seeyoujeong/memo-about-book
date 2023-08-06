export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
  return keys.map((key) => container[key]);
}

// solution
// export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
// 	const result: T[K][] = [];

// 	for (const key of keys) {
// 		result.push(container[key]);
// 	}

// 	return result;
// }
