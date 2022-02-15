import React from "react";
// import Wallet from "../../../pages/index"

import LogoutPage from "./Logout";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/pic1.jpg";
import { Dropdown } from "react-bootstrap";

const Header = ({ onNote }) => {
  return (
    <div className="header" style={{ borderBottom: "1px solid lightgray" }}>
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <li className="nav-item">
                <div className="input-group search-area">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find something here.."
                  />
                  <span className="input-group-text">
                    <Link to={"#"}>
                      <i className="flaticon-381-search-2"></i>
                    </Link>
                  </span>
                </div>
              </li>
            </div>


            <PerfectScrollbar className="widget-media dz-scroll p-3 height380">
              <ul className="navbar-nav header-right main-notification">
                <Dropdown as="li" className="nav-item dropdown header-profile ">
                  <Dropdown.Toggle
                    variant=""
                    as="a"
                    className="nav-link i-false c-pointer "
                    // href="#"
                    role="button m-2"
                    data-toggle="dropdown"
                  >
                    <div className="media me-1">
								<img alt="images" width={50} src={profile} />
							</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    align="right"
                    className="mt-2 dropdown-menu dropdown-menu-end"
                  >
                    <Link to="/app-profile" className="dropdown-item ai-icon">
                      <svg
                        id="icon-user1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="ms-2">Profile </span>
                    </Link>
                    <Link to="/email-inbox" className="dropdown-item ai-icon">
                      <svg
                        id="icon-inbox"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-success"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="ms-2">Inbox </span>
                    </Link>
                    <LogoutPage />
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </PerfectScrollbar>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
