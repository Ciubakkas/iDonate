import React from "react";
import { ContractFilterOption, ContractStatus, UserType } from "src/types";
import i18n from "src/producers/languages/i18n";
import { SVGs } from "src/assets";
import { ContractMenu } from "./ContractMenu";

export const ExistingContractCard: view = ({
  contract,
  setCurrentPath = update.routes.currentPath,
  userRole = get.user.data.role,
}) => {
  if (!contract) {
    return null;
  }
  const isManager = userRole.value() === UserType.MANAGER;

  function handleClick() {
    setCurrentPath.set("/contract/" + contract.id);
  }

  function renderStatus() {
    let statusIcon;
    let statusText;

    if (contract.status === ContractStatus.DRAFT) {
      statusIcon = <SVGs.DraftIcon />;
      statusText = i18n.t("contract_navbar_draft");
    }
    if (contract.status === ContractStatus.NEGOTIATION) {
      statusIcon = <SVGs.NegociationIcon />;
      statusText = isManager ? i18n.t("contract_navbar_negociation") : i18n.t("dashboard_card_tenant_negotiations");
    }
    if (contract.status === ContractStatus.SIGNING) {
      statusIcon = <SVGs.FinalizedIcon />;
      statusText = isManager ? i18n.t("contract_navbar_sign") : i18n.t("dashboard_card_tenant_finalized");
    }
    if (contract.status === ContractStatus.SIGNED) {
      statusText = `SIGNED`;
    }
    if (contract.filterTag === ContractFilterOption.ARCHIVED) {
      statusText = i18n.t("dashboard_archived");
    }
    if (contract.filterTag === ContractFilterOption.INBIN) {
      statusText = i18n.t("dashboard_bin");
    }
    if (contract.filterTag === ContractFilterOption.LOST) {
      statusText = i18n.t("dashboard_lost");
    }

    return (
      <div className="flex justify-between items-end ">
        <div className="uppercase">{statusText}</div>
        {statusIcon && statusIcon}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="w-56 h-64 rounded border klp-border1 bg-white p-4 m-3 flex flex-col  cursor-pointer"
        onClick={handleClick}>
        <div className="font-bold text-lg mb-4 flex">
          <div className="w-11/12">{contract?.dashboardInfo?.shoppingMall || contract.name}</div>
          {/* TODO add rules for the users to not be able to do this anyway */}
          {isManager && (
            <div>
              <ContractMenu contractId={contract.id} contractFilterFlag={contract.filterTag} />
            </div>
          )}
        </div>
        <div className="flex-grow text-gray-600">
          {/* <div className="mb-1">{contract?.dashboardInfo?.shoppingMall || ""}</div> */}
          <div className="mb-1">{contract?.dashboardInfo?.tenantName || ""}</div>
          <div className="mb-1">
            {contract?.dashboardInfo?.rentalStart &&
              contract?.dashboardInfo?.rentalEnd &&
              `${contract.dashboardInfo.rentalStart} - ${contract.dashboardInfo.rentalEnd}`}
          </div>
          <div className="mb-1">{contract?.dashboardInfo?.propertyLocalNo || ""}</div>
        </div>

        {renderStatus()}
      </div>
    </div>
  );
};
