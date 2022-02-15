import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import Logo from "../../../icons/logo/yetubit-logo1.png";
import { ReactComponent as LogoText } from "../../../icons/logo/logo-text.svg";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { openMenuToggle } = useContext(ThemeContext);
  return (
    <div className="nav-header"style={{ borderBottom: "1px solid lightgray" }}>
      <Link to="/dashboard" className="brand-logo">
        <Fragment>
          <img src={Logo} className="logo-abbr" alt="logo" />
          <LogoText className="brand-title" />
        </Fragment>
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
