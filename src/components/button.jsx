import React from "react";
import "./style.css";
export default (p) => {
  let { children, className, choose, id } = p;
  //console.log(cli);
  //console.log(p);
  let a = className === undefined ? null : className;
  const select = () => choose(id);

  return (
    <button className={a} onClick={select}>
      {children}
    </button>
  );
};
