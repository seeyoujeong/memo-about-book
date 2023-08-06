import { FlowersSettings, getFlowers } from "./flora/flowers";
import { TreesSettings, getTrees } from "./flora/trees";

export interface FloraSettings {
  flowers?: FlowersSettings;
  trees?: TreesSettings;
}

export function getFlora(settings?: FloraSettings) {
  return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
