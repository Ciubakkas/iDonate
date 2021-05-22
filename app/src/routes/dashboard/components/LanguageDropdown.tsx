import React from "react";

import { Language } from "src/types";
import { SVGs } from "src/assets";
import { Menu, Dropdown } from "antd";

export const LanguageDropdown: view = ({
  currentLanguage = observe.user.data.language,
  triggerChange = update.languages.triggers.change,
}) => {
  if (!currentLanguage) return null;
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => triggerChange.set(Language.ENGLISH)}>
        English
      </Menu.Item>
      <Menu.Item key="2" onClick={() => triggerChange.set(Language.NORWEGIAN)}>
        Norsk
      </Menu.Item>
    </Menu>
  );
  const currentLanguageDisplayed = currentLanguage === Language.ENGLISH ? "English" : "Norsk";
  return (
    <div className="flex items-center relative">
      <Dropdown overlay={menu} trigger={["click"]}>
        <button className="mr-6 flex">
          <SVGs.GlobeIcon />
          <span className="ml-2">{currentLanguageDisplayed}</span>
        </button>
      </Dropdown>
    </div>
  );
};
