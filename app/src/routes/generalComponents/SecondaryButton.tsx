import React from "react";

export const SecondaryButton: view = ({ onClick, children, disabled }) => {
  return (
    <button
      className={`appearance-none py-3 border-gray-800 px-4 font-medium rounded-lg ${
        disabled ? "bg-gray-200 text-gray-600" : "bg-transparent text-gray-800 border"
      }`}
      onClick={disabled ? undefined : onClick}>
      <div style={{ letterSpacing: "0.02em" }} className={`flex flex-1 uppercase `}>
        {children}
      </div>
    </button>
  );
};
