interface Route {
  isMounted: boolean;
  path: string;
  data: {
    [k: string]: any;
  };
}
export enum RouteName {
  DASHBOARD = "DASHBOARD",
  CONTRACT = "CONTRACT",
  INITIALIZATION = "INITIALIZATION",
  LOGIN = "LOGIN",
}

interface Dashboard extends Route {
  id: RouteName.DASHBOARD;
}
interface ContractPage extends Route {
  id: RouteName.CONTRACT;
}
interface Initialization extends Route {
  id: RouteName.INITIALIZATION;
}
interface Login extends Route {
  id: RouteName.LOGIN;
}

export interface Routes {
  list: {
    [RouteName.DASHBOARD]: Dashboard;
    [RouteName.CONTRACT]: ContractPage;
    [RouteName.INITIALIZATION]: Initialization;
    [RouteName.LOGIN]: Login;
  };
  ids: RouteName[];
  triggers: {
    changeRoute: number;
  };
  currentPath: string;
  currentQuery: string;
  queryParams: {
    googleAuth: string;
    hiddenNavbar: string;
    autologin: string;
    tenantNumber: string;
  };
}
