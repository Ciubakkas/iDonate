import React from "react";

import { Tooltip } from "antd";

export const TooltipWrapper: view = ({ children, disabled, text, placement = "bottom" }) => {
  if (disabled) return <>{children}</>;
  return (
    <Tooltip placement={placement} title={text}>
      <div>{children}</div>
    </Tooltip>
  );
};
