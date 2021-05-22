import React from "react";

import { RouteName } from "src/types";
// import { DashboardNavbar, ContractsSection, ShareContractModal, TasksModal } from "./components";
import * as producers from "./producers";

const Dashboard: view = ({ shouldMount = observe.routes.list[RouteName.DASHBOARD].isMounted }) => {
  if (!shouldMount) {
    return null;
  }

  return (
    <div className="bg-gray-200 min-h-screen font-sans">
      {/*<DashboardNavbar />*/}
      {/*<ContractsSection />*/}
      {/*<ShareContractModal />*/}
      {/*<TasksModal />*/}
    </div>
  );
};
Dashboard.producers(Object.values(producers));

export { Dashboard };
