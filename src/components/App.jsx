import * as React from "react";
import { NavBar } from "./NavBar";
import { Counter } from "./Counter";

export const App = props => {
  return (
    <div className="sans-serif">
      <NavBar title={props.title} buttons={props.navButtons} />
      <div className="mw9 center ph3-ns">
        <Counter />
      </div>
    </div>
  );
};
