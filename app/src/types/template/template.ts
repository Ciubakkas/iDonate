import { Section } from "./section";

export interface Template {
  id: string;
  sectionIds: string[];
  sections: {
    [k: string]: Section;
  };
  name: string;
  createdBy: string; // userID
  isAvailable: boolean;
  variables: {
    [j: string]: {
      [i: string]:
        | string
        | {
            [l: string]: string;
          };
    };
  };
}
