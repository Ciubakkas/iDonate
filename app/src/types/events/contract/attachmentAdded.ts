import { ContractEvent } from "src/types/events/contract/base";

export interface AttachmentAdded extends ContractEvent {
  fileName: string,
  type: string
}