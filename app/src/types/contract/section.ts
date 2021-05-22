import { Clause } from "./clause";

export interface Section {
  id: string;
  clauseIds: string[];
  clauses: {
    [k: string]: Clause;
  };
  type: SectionType;
}

enum SectionType {
  MAIN = "main",
  APPENDIX = "appendix",
}
