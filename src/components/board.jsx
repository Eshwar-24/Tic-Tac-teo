import React from "react";
import Button from "./button";
export default ({ values, square }) => {
  let block = (i) => square(i);
  return (
    <div>
      <div className="row">
        <Button id={0} choose={block}>
          {values[0]}
        </Button>
        <Button id={1} choose={block}>
          {values[1]}
        </Button>
        <Button id={2} choose={block} className="last-column">
          {values[2]}
        </Button>
      </div>
      <div className="row">
        <Button id={3} choose={block}>
          {values[3]}
        </Button>
        <Button id={4} choose={block}>
          {values[4]}
        </Button>
        <Button id={5} choose={block} className="last-column">
          {values[5]}
        </Button>
      </div>
      <div className="row">
        <Button id={6} choose={block} className="last-row">
          {values[6]}
        </Button>
        <Button id={7} choose={block} className="last-row">
          {values[7]}
        </Button>
        <Button id={8} choose={block} className="last-row last-column">
          {values[8]}
        </Button>
      </div>
    </div>
  );
};
