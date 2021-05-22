import React from "react";

import { ExistingContractCard, NewContractCard, FilterBar } from "./";
import { ContractStatus, ContractFilterOption, UserType } from "src/types";

export const ContractsSection: view = ({
  contracts = observe.contracts.listById,
  userRole = get.user.data.role,
  selectedFilter = observe.dashboard.filterBy,
  hiddenNavbar = observe.routes.queryParams.hiddenNavbar,
}) => {
  const isTenant = userRole.value() === UserType.TENANT;
  const isManager = userRole.value() === UserType.MANAGER;

  const contractsSoteredbyDate = Object.values(contracts).sort((a: any, b: any) =>
    a?.createdAt < b?.createdAt ? 1 : -1
  );

  let contractsToDisplay = contractsSoteredbyDate;
  if (selectedFilter === ContractFilterOption.ALL) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => {
      return !!!c.filterTag;
    });
  }
  if (selectedFilter === ContractFilterOption.DRAFTS) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => !!!c.filterTag && c.status === ContractStatus.DRAFT);
  }
  if (selectedFilter === ContractFilterOption.NEGOTIATIONS) {
    contractsToDisplay = contractsToDisplay.filter(
      (c: any) => !!!c.filterTag && c.status === ContractStatus.NEGOTIATION
    );
  }
  if (selectedFilter === ContractFilterOption.FINALIZED) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => !!!c.filterTag && c.status === ContractStatus.SIGNING);
  }
  if (selectedFilter === ContractFilterOption.ARCHIVED) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => c.filterTag == ContractFilterOption.ARCHIVED);
  }
  if (selectedFilter === ContractFilterOption.LOST) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => c.filterTag == ContractFilterOption.LOST);
  }
  if (selectedFilter === ContractFilterOption.INBIN) {
    contractsToDisplay = contractsToDisplay.filter((c: any) => c.filterTag == ContractFilterOption.INBIN);
  }

  const contractsList = contractsToDisplay.map((contract: any, index) => {
    if (isTenant && contract.status === ContractStatus.DRAFT) return null;
    return <ExistingContractCard key={contract.name + index} contract={contract} />;
  });

  return (
    <main className={`container mx-auto w-full pb-20 ${hiddenNavbar ? "pt-10" : "pt-40"}`}>
      <div className="pb-3 m-3 mt-0 flex items-baseline justify-between klp-border1 border-b">
        <FilterBar key="1" />
      </div>
      <div className="flex flex-wrap">
        {isManager ? <NewContractCard /> : null}
        {contractsList}
      </div>
    </main>
  );
};

const VerticalLine: view = () => {
  return (
    <div style={{ position: "relative", marginRight: "30px", marginLeft: "20px" }}>
      <div
        className="bg-gray-500"
        style={{
          position: "absolute",
          top: -28,
          width: "1.5px",
          height: "48px",
        }}></div>
    </div>
  );
};
