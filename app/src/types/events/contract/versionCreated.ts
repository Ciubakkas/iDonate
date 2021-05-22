import { ContractEvent } from "src/types/events/contract/base";

export interface VersionCreatedEvent extends ContractEvent {
  version: number;
  values: any;
}