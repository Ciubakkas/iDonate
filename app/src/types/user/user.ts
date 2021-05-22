export interface User {
  id: string;
  email: string;
  name: string;
  type: UserType;
}

export enum UserType {
  MANAGER = "manager",
  TENANT = "tenant",
}

export const authOptions = {
  "password": "email",
  "google.com": "google",
  "oidc.klp-dev": "klp",
  "oidc.klp-prod": "klp"
}