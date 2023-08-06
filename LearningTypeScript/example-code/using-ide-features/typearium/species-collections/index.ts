import { FaunaSettings, getFauna } from "./fauna";
import { FloraSettings, getFlora } from "./flora";
import { onlyTruthy } from "./utils/onlyTruthy";

export interface EverythingSettings {
  fauna?: FaunaSettings;
  flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
  return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
