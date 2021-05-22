export interface Session {
  createdAt: number;
  versionId: string;
  // createdBy: string; // userId
  changes: {
    [j: string]: {
      //varName
      value: string;
      createdAt: string;
      antecedent: string;
      createdBy?: string;
    };
  };
}
