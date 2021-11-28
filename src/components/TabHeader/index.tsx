import React from "react";

import classnames from "classnames";
import sentenceCase from "sentence-case";
import { Nav, NavItem, NavLink } from "reactstrap";

type Props = {
  keys: Array<string>;
  setTab: (k: string) => void;
  tab: string;
};

const TabHeader = ({ keys, setTab, tab }: Props) => {
  if (keys.length === 0) return null;
  return (
    <div className={"mt-3"}>
      <Nav tabs>
        {keys.map((k) => (
          <NavItem key={k}>
            <NavLink
              className={classnames({ active: tab === k })}
              onClick={() => setTab(k)}
            >
              {sentenceCase(k)}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default TabHeader;
