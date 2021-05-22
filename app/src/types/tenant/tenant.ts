export interface Tenant {
  id: string;
  companyName: string;
  address: string;
  contacts: {
    id: string;
    name: string;
    email: string;
    principal: boolean;
  };
  offerMade: boolean;
}
