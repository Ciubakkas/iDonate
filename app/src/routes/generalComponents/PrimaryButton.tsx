import React from "react";

export const PrimaryButton: view = ({ onClick, children, disabled, green }) => {
  const enabledStateColor = green ? "bg-green-600" : "bg-pink-600";
  return (
    <button
      className={`primary-button appearance-none py-3 px-4 font-medium rounded-lg ${
        disabled ? "bg-gray-200 text-gray-600 " : `${enabledStateColor} text-white`
      }`}
      onClick={disabled ? undefined : onClick}>
      <div style={{ letterSpacing: "0.02em" }} className={`flex flex-1 uppercase items-center`}>
        {children}
      </div>
    </button>
  );
};
