export enum ContractEventType {
  VERSION_CREATED = "VersionCreated",
  MOVED_TO_SIGNING = "MovedToSigning",
  CREATED = "Created",
  NEGOTIATION_STARTED = "NegotiationStarted",
  ATTACHMENT_ADDED = "AttachmentAdded",
  COMMENT_ADDED = "CommentAdded"
}

export interface ContractEvent {
  createdAt: number;
  type: ContractEventType;
  user: any;
}