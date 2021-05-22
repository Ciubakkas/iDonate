import React from "react";

export const Button: view = ({ onClick, children, uppercase, customClasses }) => {
  return (
    <button
      className={
        customClasses
          ? `appearance-none py-3 px-4 ${customClasses}`
          : "appearance-none py-3 px-4 bg-pink-600 text-white hover:font-bold "
      }
      onClick={onClick}>
      <div className={`flex flex-1 ${uppercase && "uppercase"}`}>{children}</div>
    </button>
  );
};
