import React from "react";
import "./ContractMenu.css";
import { Menu, Dropdown } from "antd";
import i18n from "src/producers/languages/i18n";
import { ContractFilterOption } from "src/types";
import { SVGs } from "src/assets";

export const ContractMenu: view = ({
  contractId,
  contractFilterFlag,
  setFilterFlag = update.contract.triggers.setFilterFlag,
  removeFilterTag = update.contract.triggers.removeFilterTag,
  shareContractModal = update.modal.shareContract,
  tasksModal = update.modal.tasks.contractId,
  taskFeature = observe.featureFlags.tasks.displayOnDashboard,
}) => {
  const menu = (
    <Menu>
      {contractFilterFlag === ContractFilterOption.ARCHIVED ? (
        <Menu.Item
          key="2"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            removeFilterTag.set({ contractId });
          }}>
          {i18n.t("dashboard_unarchive")}
        </Menu.Item>
      ) : (
        <Menu.Item
          key="1"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            setFilterFlag.set({ contractId, tag: ContractFilterOption.ARCHIVED });
          }}>
          {i18n.t("dashboard_archive")}
        </Menu.Item>
      )}
      {contractFilterFlag === ContractFilterOption.LOST ? (
        <Menu.Item
          key="3"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            removeFilterTag.set({ contractId });
          }}>
          {i18n.t("dashboard_unlost")}
        </Menu.Item>
      ) : (
        <Menu.Item
          key="4"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            setFilterFlag.set({ contractId, tag: ContractFilterOption.LOST });
          }}>
          {i18n.t("dashboard_lost")}
        </Menu.Item>
      )}
      {contractFilterFlag === ContractFilterOption.INBIN ? (
        <Menu.Item
          key="5"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            removeFilterTag.set({ contractId });
          }}>
          {i18n.t("dashboard_unbin")}
        </Menu.Item>
      ) : (
        <Menu.Item
          key="6"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            setFilterFlag.set({ contractId, tag: ContractFilterOption.INBIN });
          }}>
          {i18n.t("dashboard_bin")}
        </Menu.Item>
      )}
      {taskFeature && (
        <Menu.Item
          key="7"
          onClick={(param) => {
            param.domEvent.stopPropagation();
            tasksModal.set(contractId);
          }}>
          {i18n.t("dashboard_tasks")}
        </Menu.Item>
      )}
      <Menu.Item
        key="8"
        onClick={(param) => {
          param.domEvent.stopPropagation();
          shareContractModal.set(contractId);
        }}>
        {i18n.t("dashboard_modal_shareContract_title")}
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
      <SVGs.ThreeDots className={`contract-menu`} onClick={(e: any) => e.stopPropagation()} />
    </Dropdown>
  );
};
