export type Stock = {
  breads: number;
  fruits: number;
  sauces: number;
  vegetables: number;
};

export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;

export type Recipe = (stock: Stock) =>
  | {
      succeeded: false;
    }
  | {
      succeeded: true;
      newStock: Stock;
    };

export type Kitchen = {
  announce: () => string;
  clean: (time?: number) => void;
  purchase: (expense: number) => boolean;
  prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
  budget: number,
  cleaner: Cleaner,
  supplier: Supplier
): Kitchen {
  let dirt = 0;
  let stock: Stock = {
    breads: 0,
    fruits: 0,
    sauces: 0,
    vegetables: 0,
  };

  const announce = () => {
    return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
  };

  const clean = (time?: number) => {
    dirt = cleaner(dirt, time);
  };

  const purchase = (expense: number) => {
    if (expense > budget) {
      return false;
    }

    const result = supplier(expense);

    stock.breads += result.breads;
    stock.fruits += result.fruits;
    stock.sauces += result.sauces;
    stock.vegetables += result.vegetables;

    budget -= expense;

    return true;
  };

  const prepare = (recipe: Recipe) => {
    if (dirt >= 100) {
      return false;
    }

    const result = recipe(stock);
    dirt++;

    if (result.succeeded) {
      stock = result.newStock;
    }

    return result.succeeded;
  };

  return {
    announce,
    clean,
    purchase,
    prepare,
  };
}

// solution
// export type Cleaner = (dirt: number, time?: number) => number;

// export type Ingredients = {
// 	breads: number;
// 	fruits: number;
// 	sauces: number;
// 	vegetables: number;
// };

// export type RecipeResultFailed = {
// 	succeeded: false;
// };

// export type RecipeResultSucceeded = {
// 	newStock: Ingredients;
// 	succeeded: true;
// };

// export type RecipeResult = RecipeResultFailed | RecipeResultSucceeded;

// export type Supplier = (expense: number) => Ingredients;

// export type Recipe = (ingredients: Ingredients) => RecipeResult;

// export type Kitchen = {
// 	announce(): string;
// 	clean(time?: number): void;
// 	purchase(expense: number): boolean;
// 	prepare(recipe: Recipe): boolean;
// };

// export function createKitchen(
// 	budget: number,
// 	cleaner: Cleaner,
// 	supplier: Supplier
// ): Kitchen {
// 	let dirt = 0;
// 	let stock = {
// 		breads: 0,
// 		fruits: 0,
// 		sauces: 0,
// 		vegetables: 0,
// 	};

// 	return {
// 		announce() {
// 			return [
// 				`I have ${dirt} much dirt`,
// 				`${budget} budget`,
// 				`${stock.breads} bread(s)`,
// 				`${stock.fruits} fruit(s)`,
// 				`${stock.sauces} sauce(s)`,
// 				`and ${stock.vegetables} vegetable(s).`,
// 			].join(", ");
// 		},
// 		clean(time?: number) {
// 			dirt = cleaner(dirt, time);
// 		},
// 		purchase(expense: number) {
// 			if (budget < expense) {
// 				return false;
// 			}

// 			const ingredients = supplier(expense);

// 			stock.breads += ingredients.breads;
// 			stock.fruits += ingredients.fruits;
// 			stock.sauces += ingredients.sauces;
// 			stock.vegetables += ingredients.vegetables;

// 			budget -= expense;

// 			return true;
// 		},
// 		prepare(recipe: Recipe) {
// 			if (dirt >= 100) {
// 				return false;
// 			}

// 			const result = recipe(stock);
// 			dirt += 1;

// 			if (result.succeeded) {
// 				stock = result.newStock;
// 			}

// 			return result.succeeded;
// 		},
// 	};
// }
