import React, { Fragment, useContext, useState } from "react";
import { Card, ProgressBar, Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
import avatar from "../../../images/avatar/1.jpg";
import HomeCards from "./HomeCards";

//Import

const Notification = () => {
  return (
    <Fragment>
      <div className="">
        <div className="m-4">
          <h4>Unity Exchange</h4>
          <h1>Promotions</h1>
        </div>

        <div className="row  ">
          <div className="col w-25 ">
            <div className="p-3 ">
              <div className=" row   " style={{ width: "100%" }}>
                <div className="d-flex justify-content-start m-2 mb-2">
                  <button
                    className="btn mx-1 "
                    type="button"
                    style={{
                      color: "#FFD600",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    }}
                  >
                    <strong>All</strong>
                  </button>

                  <button
                    className="btn mx-1"
                    type="button"
                    style={{
                      color: "#808191",
                      // backgroundColor: "#FFD600",
                    }}
                  >
                    <strong>Exchange</strong>
                  </button>

                  <button
                    className="btn mx-1"
                    type="button"
                    style={{
                      color: "#808191",
                      // backgroundColor: "#FFD600",
                    }}
                  >
                    <strong>Promotions</strong>
                  </button>
                </div>
              </div>
            </div>

            <div className="card   px-5 ">
              <PerfectScrollbar className="widget-media dz-scroll p-3 ">
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h6 className="mb-1">Resport created successfully</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>{" "}
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>{" "}
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>{" "}
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>{" "}
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="" width={50} src={avatar} />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-danger">KG</div>
                      <div className="media-body">
                        <h6 className="mb-1">Resport created successfully</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2020 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                  />
                </div>
                <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 0 }}
                  />
                </div>
              </PerfectScrollbar>
            </div>
          </div>

          <div
            className="h-25 col-xl-3 col-xxl-4  p-3 pt-0 mt-5"
            style={{ borderLeft: "1px solid lightgray" }}
          >
            <div
              className="card"
              style={{ boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
            >
              <div className="card-body">
                <div id="currentChart ">
                  <h4 className="fs-20 mb-3 ">Filter</h4>
                </div>
                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Prices
                  </label>
                </div>

                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Withdrawals
                  </label>
                </div>

                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Deposit
                  </label>
                </div>

                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Promotion
                  </label>
                </div>

                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Settings
                  </label>
                </div>

                <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheckBox2"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="customCheckBox2">
                    Support
                  </label>
                </div>
                <div className="mt-3 mx-1 ">
                  <button
                    className="btn mx-2 "
                    type="button"
                    style={{
                      color: "white",
                      backgroundColor: "#FFD600",
                      borderRadius: "10px",
                    }}
                  >
                    <strong>Unselect All</strong>
                  </button>

                  <button
                    className="btn mx-2"
                    type="button"
                    style={{
                      color: "black",
                      // backgroundColor: "#FFD600",
                      borderRadius: "10px",

                      // backgroundColor: "#FFD600",
                    }}
                  >
                    <strong>Select All</strong>
                  </button>
                </div>
              </div>
              <div
                className="card-footer "
                style={{ borderTop: "1px solid lightgray" }}
              >
                <button
                  className="btn mx-2"
                  type="button"
                  style={{
                    // backgroundColor: "#FFD600",
                    borderRadius: "10px",

                    // backgroundColor: "#FFD600",
                  }}
                >
                  <strong>Reset all filters</strong>
                </button>
              </div>
            </div>
            <div
              className="card p-2"
              style={{
                height: "50px",
                boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
              }}
            >
              <h5 className="mt-2">Top Gainers</h5>
            </div>
            <div>
              <HomeCards />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Notification;
