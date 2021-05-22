import React from "react";

import { Modal, PrimaryButton } from "src/routes/generalComponents";
import i18n from "src/producers/languages/i18n";
import copy from "copy-to-clipboard";

export const ShareContractModal: view = ({ contractId = observe.modal.shareContract, host = observe.config.host }) => {
  if (!contractId) return null;
  return (
    <Modal title={i18n.t("dashboard_modal_shareContract_title")}>
      <div className="">
        <PrimaryButton onClick={() => copy(host + "kontrakt/contract/" + contractId)}>
          {i18n.t("dashboard_modal_shareContract_copy_link")}
        </PrimaryButton>
      </div>
    </Modal>
  );
};
``;
