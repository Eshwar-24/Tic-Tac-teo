import React from "react";
import Button from "./button";
export default ({ values }) => (
  <div className="main-container">
    <div className="row">
      <Button>{values[0]}</Button>
      <Button>{values[1]}</Button>
      <Button className="last-column">{values[2]}</Button>
    </div>
    <div className="row">
      <Button>{values[3]}</Button>
      <Button>{values[4]}</Button>
      <Button className="last-column">{values[5]}</Button>
    </div>
    <div className="row">
      <Button className="last-row">{values[6]}</Button>
      <Button className="last-row">{values[7]}</Button>
      <Button className="last-row last-column">{values[8]}</Button>
    </div>
  </div>
);
