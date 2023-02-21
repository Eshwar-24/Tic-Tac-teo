import React from "react";
import "./style.css";
export default ({ children, className }) => {
  var a = className === undefined ? null : className;
  return <button className={a}>{children} 1</button>;
};
