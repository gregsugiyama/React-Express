import * as React from "react";
import * as R from "ramda";
import * as H from "../utils/helpers";
import { useReduxState } from "../state/context";

const headerStyle = "w-100 pa3 ph5-ns bg-white bb b--black-10 box-shadow";
const navButtonStyle =
  "f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib pointer";
const titleTextStyle = "dib f5 f4-ns fw6 mt0 mb1 link black-70";

const MenuButton = ({ onClick, children }) => (
  <a className={navButtonStyle} onClick={onClick}>
    {children}
  </a>
);

const TitleText = ({ onClick, children }) => (
  <a className={titleTextStyle} onClick={onClick}>
    {children}
  </a>
);

export const NavBar = ({ title, buttons }) => {
  const state = useReduxState();
  return (
    <header className={headerStyle}>
      <div className="db dt-ns mw9 center w-100">
        <div className="db dtc-ns v-mid tl w-50">
          <TitleText onClick={e => R.identity}>{title}</TitleText>
        </div>
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          {H.iMap(
            (x, i) => (
              <MenuButton key={i} onClick={e => R.identity}>
                {x}
              </MenuButton>
            ),
            buttons
          )}
        </nav>
      </div>
    </header>
  );
};
