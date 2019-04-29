import * as React from "react";

export const MBtn = ({ onClick, children }) => (
  <a
    onClick={onClick}
    className="hover-blue f6 link dim ba ph3 pv2 mb2 mr2 dib black"
  >
    {children}
  </a>
);
