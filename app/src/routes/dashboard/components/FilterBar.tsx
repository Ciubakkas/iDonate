import React from "react";

import i18n from "src/producers/languages/i18n";
import { ContractFilterOption, UserType } from "src/types";

export const FilterBar: view = ({ userRole = get.user.data.role, tenantName = observe.tenant.name }) => {
  const isManager = userRole.value() === UserType.MANAGER;

  return (
    <div className="flex items-baseline justify-between flex-1">
      <div className="text-3xl">
        {tenantName ? `${i18n.t("dashboard_your_contracts_for")} ${tenantName}` : i18n.t("dashboard_your_contracts")}
      </div>
      <div className="flex">
        <FilterOption option={ContractFilterOption.ALL}>{i18n.t("dashboard_all_contracts")}</FilterOption>
        {isManager && <FilterOption option={ContractFilterOption.DRAFTS}>{i18n.t("dashboard_drafts")}</FilterOption>}
        <FilterOption option={ContractFilterOption.NEGOTIATIONS}>{i18n.t("dashboard_negotiations")}</FilterOption>
        <FilterOption option={ContractFilterOption.FINALIZED}>{i18n.t("dashboard_finalized")}</FilterOption>
        <FilterOption option={ContractFilterOption.ARCHIVED}>{i18n.t("dashboard_archived")}</FilterOption>
        {isManager && <FilterOption option={ContractFilterOption.LOST}>{i18n.t("dashboard_lost")}</FilterOption>}
        {isManager && <FilterOption option={ContractFilterOption.INBIN}>{i18n.t("dashboard_bin")}</FilterOption>}
      </div>
    </div>
  );
};

const FilterOption: view = ({
  children,
  option,
  selectedFilter = observe.dashboard.filterBy,
  setFilter = update.dashboard.filterBy,
}) => {
  const isSelected = option === selectedFilter;
  return (
    <div
      className={`cursor-pointer text-lg relative mx-2 ${isSelected ? "" : "text-gray-500"}`}
      onClick={() => setFilter.set(option)}>
      <div>{children}</div>
      {isSelected && <HorizontalLine />}
    </div>
  );
};
const HorizontalLine: view = () => {
  return (
    <div
      className="bg-pink-600"
      style={{
        bottom: "-2px",
        width: "100%",
        position: "absolute",
        height: 2,
      }}></div>
  );
};
