import React from "react";

import { Button } from "src/routes/generalComponents";
import i18n from "src/producers/languages/i18n";
import { SVGs } from "src/assets";

export const NewContractCard: view = ({ createEmptyContract = update.dashboard.triggers.createEmptyContract }) => {
  function handleClick() {
    createEmptyContract.set({
      templateId: "template1",
    });
  }

  return (
    <div className="w-56 h-64 rounded border klp-border1 bg-white p-4 m-3 flex flex-col justify-center items-center cursor-pointer">
      <SVGs.NewDocumentIcon className="mb-5" />
      <Button customClasses="bg-transparent text-gray-700 border border-gray-700 hover:font-bold" onClick={handleClick}>
        {i18n.t("dashboard_newContract")}
      </Button>
    </div>
  );
};
