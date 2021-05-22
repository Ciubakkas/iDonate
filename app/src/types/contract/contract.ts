import { Version, Appendix, Session } from "./";

export interface Contract {
  id: string;
  versions: Version[];
  comments: Comment[];
  appendices: Appendix[];
  tenantId: string;
  tenant: any;
  triggers: any;
  templateId: string;
  latestVersion: number;
  status: ContractStatus;
  defaultValues: {
    createdAt: string;
    value: string;
  };
  sessions: {
    manager: Session;
    tenant: Session;
  };
}

export enum ContractStatus {
  DRAFT = "draft",
  NEGOTIATION = "negotiation",
  SIGNING = "signing",
  DELETED = "deleted",
  SIGNED = "signed",
}

export enum ContractFilterOption {
  ALL = "ALL",
  DRAFTS = "DRAFTS",
  NEGOTIATIONS = "NEGOTIATIONS",
  FINALIZED = "FINALIZED",
  ARCHIVED = "ARCHIVED",
  SIGNED = "SIGNED",
  LOST = "LOST",
  INBIN = "INBIN",
}
