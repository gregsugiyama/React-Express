import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../public/app.scss";
import { StoreProvider } from "../state/context";
import { store } from "../state/store";
import { App } from "./App";

export const Index = () => {
  return (
    <StoreProvider store={store}>
      <App
        title="Greg Sugiyama"
        navButtons={["button 1", "button 2", "button 3"]}
      />
    </StoreProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
