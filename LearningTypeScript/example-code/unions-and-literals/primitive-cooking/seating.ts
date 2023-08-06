// const headOfTable = "Me!";
// let adjacentLeft;
// let adjacentRight;
// let furtherLeft;
// let furtherRight;

const headOfTable = "Me!";
let adjacentLeft: "Susie" | "Tommy";
let adjacentRight: "Susie" | "Tommy";
let furtherLeft: "Angelica" | "Chuckie" | undefined;
let furtherRight: "Chuckie" | "Kimi" | "Timmy" | undefined;

if (Math.random() > 0.5) {
	adjacentLeft = "Susie";
	adjacentRight = "Tommy";
} else {
	adjacentLeft = "Tommy";
	adjacentRight = "Susie";
}

if (Math.random() > 0.5) {
	furtherLeft = "Angelica";
}

if (Math.random() > 0.5) {
	if (furtherLeft) {
		furtherRight = "Chuckie";
	} else {
		furtherLeft = "Chuckie";
	}
}

if (furtherLeft === "Angelica" && furtherRight !== "Chuckie") {
	furtherRight = "Kimi";
}

if (furtherLeft === "Chuckie") {
	furtherRight = "Timmy";
}

console.log(`At the head of the table is... ${headOfTable}`);

console.log(`Adjacent to the left is: ${adjacentLeft}`);
console.log(`Adjacent to the right is: ${adjacentRight}`);

console.log(`Further down on the left is: ${adjacentLeft ?? "nobody"}`);
console.log(`Further down on the right is: ${adjacentRight ?? "nobody"}`);

export {};
