import React from "react";

import { Images } from "src/assets";
import i18n from "src/producers/languages/i18n";
import { UserType } from "src/types";
import { LanguageDropdown, LogOutButton } from "./";

const VerticalLine: view = () => {
  return (
    <div
      className="bg-gray-500"
      style={{
        width: "1.5px",
        height: "48px",
        marginRight: "30px",
        marginLeft: "30px",
      }}></div>
  );
};

export const DashboardNavbar: view = ({
  userRole = get.user.data.role,
  displayName = observe.user.data.displayName,
  email = observe.user.data.email,
  hiddenNavbar = observe.routes.queryParams.hiddenNavbar,
}) => {
  if (hiddenNavbar) return null;
  const isManager = userRole.value() === UserType.MANAGER;
  const accountType = isManager ? i18n.t("dashboard_navbar_title_manager") : i18n.t("dashboard_navbar_title_tenant");
  return (
    <nav className="bg-white border-b-2 font-medium fixed w-full z-30 top-0 flex flex-wrap items-center justify-between p-6 px-12">
      <div key="left" className="flex">
        <img key="0" src={Images.logo} alt="Logo" className="h-10" />
        <p key="1" className="text-lg text-pink-600 ml-8 w-48 leading-6 invisible xl:visible">
          {accountType} - v.0.8.0
        </p>
      </div>

      <div key="right" className="flex">
        <div key="name+email" className="invisible xl:visible">
          <p key="0.1" className="font-bold text-right">
            {displayName}
          </p>
          <p key="0.2">{email}</p>
        </div>
        <VerticalLine key="1" />
        <LanguageDropdown />
        <LogOutButton />
      </div>
    </nav>
  );
};
