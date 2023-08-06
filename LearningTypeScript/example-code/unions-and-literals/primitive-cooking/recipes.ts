// let difficulty: number;
// let group: string;
// let title: string;

let difficulty: 1 | 2 | 3;
let group: "appetizer" | "entree" | "dessert";
let title: string;

difficulty = 1;
group = "appetizer";
title = "Raspberry Vinaigrette Salad";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

difficulty = 2;
group = "entree";
title = "Cauliflower Steaks";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

difficulty = 3;
group = "dessert";
title = "Coconut Chocolate Ganache";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

difficulty = 1;
group = "dessert";
title = "Biscuits and Coffee";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

export {};
