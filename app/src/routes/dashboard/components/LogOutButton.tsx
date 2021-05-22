import React from "react";

import i18n from "src/producers/languages/i18n";
import { SecondaryButton } from "src/routes/generalComponents";
import { SVGs } from "src/assets";

export const LogOutButton: view = ({ triggerLogout = update.session.triggers.logout }) => {
  return (
    <SecondaryButton onClick={() => triggerLogout.set(Date.now())}>
      <SVGs.LockIcon key="2.1" />
      <span key="2.2" className="ml-3">
        {i18n.t("log-out")}
      </span>
    </SecondaryButton>
  );
};
