import { State, RouteName } from "src/types";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const state: DeepPartial<State> = {
  config: {},
  session: {
    firebase: {
      isReady: false,
    },
  },
  dashboard: {
    // filterBy: ContractFilterOption.ALL,
  },
  contracts: {
    listById: {},
  },
  listeners: {},
  routes: {
    currentPath: "",
    ids: [RouteName.DASHBOARD, RouteName.INITIALIZATION, RouteName.LOGIN],
    list: {
      [RouteName.LOGIN]: {
        id: RouteName.LOGIN,
        isMounted: false,
        path: "/login",
      },
      [RouteName.INITIALIZATION]: {
        id: RouteName.INITIALIZATION,
        isMounted: true,
        path: "/",
      },
      [RouteName.DASHBOARD]: {
        id: RouteName.DASHBOARD,
        isMounted: false,
        path: "/dashboard",
      },
      // [RouteName.CONTRACT]: {
      //   id: RouteName.CONTRACT,
      //   isMounted: false,
      //   path: "/contract",
      //   data: {},
      // },
    },
  },
};
