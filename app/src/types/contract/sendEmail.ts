import { Contract } from "./contract";

export enum SendEmailTypes {
  TENANT_INVITATION = "tenant_invitation",
  NEW_VERSION = "version_new",
  TENANT_TO_SIGN = "tenant_toSign",
}

export interface SendEmail {
  type: SendEmailTypes;
  contractId: Contract["id"];
  data: any;
}

export interface EmailData {
  name: string;
  button: {
    text: string;
    url: string;
  };
  content: string;
}
