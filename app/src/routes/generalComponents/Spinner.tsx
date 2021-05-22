import React from "react";

import "./Spinner.css";

export const Spinner: view = ({ pink, extraClasses, size }) => {
  return (
    <div className={`sk-chase ${extraClasses && extraClasses}`} style={{ width: size && size, height: size && size }}>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
      <div className={pink ? "sk-chase-dot-pink sk-chase-dot" : "sk-chase-dot"}></div>
    </div>
  );
};
