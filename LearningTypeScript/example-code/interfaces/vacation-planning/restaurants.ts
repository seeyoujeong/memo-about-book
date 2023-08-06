export interface Restaurant {
  city: string;
  name: string;
}

export interface GroupRestaurants {
  [name: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]) {
  return restaurants.reduce((group: GroupRestaurants, { city, name }) => {
    if (!(city in group)) {
      group[city] = [name];
    } else {
      group[city].push(name);
    }

    return group;
  }, {});
}
