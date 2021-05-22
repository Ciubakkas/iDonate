export interface Section {
  id: string;
  type: string;
  clauseIds: string[];
  clauses: ClauseOrder;
}

interface ClauseOrder {
  id: string;
  order: number;
}
