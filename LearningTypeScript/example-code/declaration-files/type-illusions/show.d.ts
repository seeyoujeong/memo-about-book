export interface Trick {
  gimmick: string;
}

export interface Illusion {
  introduction(): string;
  flair(): string;
  payoff(): string;
}

export interface VolunteerIllusion extends Illusion {
  duration: number;
  title: string;
}

export type Section = Trick | Illusion;

export interface AudienceMember {
  name: string;
}

export interface Act {
  performer: string;
  name: string;
  sections: Section[];
}

export interface GetAudienceMember {
  duration: number;
  title: string;
}

export declare function getAudienceMemberFor(
  getAudienceMember: GetAudienceMember
): Promise<AudienceMember>;

export function isTrick(section: Section): section is Trick;

export declare function isVolunteerIllusion(
  illusion: Illusion
): illusion is VolunteerIllusion;
