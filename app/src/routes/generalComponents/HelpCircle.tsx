import React from "react";
import { SVGs } from "src/assets";
import { Tooltip } from "antd";

export const HelpCircle: view = ({ text ,   tooltipsFeature = observe.featureFlags.tooltipsFeature.main,
}) => {
  if(!tooltipsFeature) return null;
  return (
    <Tooltip title={text} placement={"bottom"}>
      <SVGs.Help className="mr-2 mt-1" />
    </Tooltip>
  );
};
