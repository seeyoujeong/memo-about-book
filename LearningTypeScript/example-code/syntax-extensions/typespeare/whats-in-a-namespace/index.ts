// namespace TheBard {
// 	export function verifyProse(prose: string[]) {
// 		return Poetry.schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
// 	}
// }

import { schemesInOrder } from "./poetry";

export function verifyProse(prose: string[]) {
  return schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
}
