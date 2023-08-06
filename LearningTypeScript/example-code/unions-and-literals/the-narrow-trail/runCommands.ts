export function runCommands() {
  let availableResource: "Food" | "Water" | undefined;
  let food = 5;
  let water = 5;

  for (let day = 1; day <= 7; day += 1) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber === 1) {
      availableResource = "Food";
    } else if (randomNumber === 2) {
      availableResource = "Water";
    } else if (!availableResource) {
      if (randomNumber % 2 === 0) {
        availableResource = "Food";
      } else {
        availableResource = "Water";
      }
    } else {
      if (availableResource === "Food") {
        food += randomNumber;
      } else {
        water += randomNumber;
      }

      availableResource = undefined;
    }

    food--;
    water--;

    if (food === 0 || water === 0) {
      return false;
    }
  }

  return true;
}
