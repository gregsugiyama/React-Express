import * as React from "react";
import { MBtn } from "../utils/BaseComponents";
import { useReduxState, useReduxDispatch } from "../state/context";

export const Counter = () => {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  const inc = React.useCallback(() => dispatch({ type: "count/inc" }), []);
  const dec = React.useCallback(() => dispatch({ type: "count/dec" }), []);
  return (
    <React.Fragment>
      <div className="pa2 fl w-100 ">
        <h2 className="f4 f1-ns fw6 mb2">{state.countReducer.count}</h2>
      </div>
      <div className="w-10 flex justify-center pointer">
        <MBtn onClick={inc}>inc</MBtn>
        <MBtn onClick={dec}>dec</MBtn>
      </div>
    </React.Fragment>
  );
};
