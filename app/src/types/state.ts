import { Routes, Config, SessionFromState, Contract, ContractFilterOption } from "./";
import { ContractStatus } from "./contract";
import { ApplicationError } from "./error";
import { UserType } from "./user/user";

export interface State {
  config: Config;
  routes: Routes;
  session: SessionFromState;
  user: {
    uid: string;
    isReady: boolean;
    isAuth: boolean;
    data: {
      language: string;
      email: string;
      displayName: string;
      role: UserType;
    };
    onboarded: boolean;
  };
  listeners?: any;
  global?: any;
  buildings?: any;
  languages: {
    current: string;
    isReady: boolean;
    triggers: {
      change: number;
    };
  };
  contracts: {
    ids: string[];
    listById?: {
      [k: string]: Contract;
    };
    triggers?: any;
  };
  dashboard: {
    filterBy: ContractFilterOption;
    triggers: any;
  };
  contract: {
    id: string;
    values: any;
    currentSession: any;
    triggers: {
      saveAppendix: any;
      resetIntro: any;
      saveVersion: any;
      submitComment: any;
      syncFeed: any;
      setAntecedents: any;
      triggerVersion: any;
      resetDefault: any;
      populateTenant: any;
      populateContactPerson: any;
      populateShoppingMall: any;
      sendContract: any;
      getAllAppendicesPDF: any;
      getMainContractPDF: any;
      generatePDF: any;
      goBackToNegociation: any;
      linkTenant: any;
      dismissWelcomeCard: any;
      clearSessions: any;
      deleteAppendix: any;
      generateContract: any;
      processData: any;
      saveChangesToDB: any;
      deleteAllChanges: any;
      deleteSessionFromDB: any;
      sendEmail: any;
      setFilterFlag: any;
      removeFilterTag: any;
    };
    template: any;
    isReadOnlyContract: boolean;
    original: {
      status: ContractStatus;
      appendices: any;
      tenantId: string;
      versions: any;
      latestVersion: number;
      comments: any;
      defaultValues: any;
      displayedVersion: number;
      sessions: any;
      createdAt: number;
      lastSeenByTenant: any;
    };
    displayedVersion: number;
    custom: any;
    fields: any;
    rerendersAllFields: number;
    flags: {
      loadingpdf: number;
      loadingTenant: number;
    };
    updatesFeed: any;
    syncQueue: any;
    pdf: {
      main: any;
      appendices: any;
    };
    temp: any;
    tenant: any;
    invalidFields: any;
    shoppingMalls: any;
    termsUrl: string;
  };
  modal: {
    addAppendixModal: any;
    deleteAppendixModal: any;
    generateContract: any;
    resetContract: any;
    sendContract: any;
    shareContract: any;
    tasks: any;
  };
  featureFlags: { [k: string]: any };
  tenants: any;
  comment: any;
  tenant: any;
  users: any;
  actions: {
    createAccount: any;
    addUser: any;
  };
  errors: { [k: string]: ApplicationError };
}

interface Value {
  value: string;
  // createdBy?: string;
  createdAt: number;
  versionId: string;
  type: string;
}
