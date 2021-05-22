import { ContractEvent } from "src/types/events/contract/base";

export interface CommentAdded extends ContractEvent {
  version: number;
  message: string;
}