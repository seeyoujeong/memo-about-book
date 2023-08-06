import { MammalsSettings, getMammals } from "./fauna/mammals";
import { ReptilesSettings, getReptiles } from "./fauna/reptiles";

export interface FaunaSettings {
  mammals?: MammalsSettings;
  reptiles?: ReptilesSettings;
}

export function getFauna(settings?: FaunaSettings) {
  return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
