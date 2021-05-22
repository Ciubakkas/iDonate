import { Section } from "./section";

export interface Version {
  id: string;
  versionId: number;
  publishedBy: string;
  sectionIds: string[];
  sections: {
    [j: string]: Section;
  };
  variables: {
    [k: string]: {
      value: string;
      type: string;
      antecedent: string;
      metadata?: {
        user: string;
        createdAt: number;
        variablePath?: string;
      };
    };
  };
  name: string;
  user: string;
  createdAt: number;
}
