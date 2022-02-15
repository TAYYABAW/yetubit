import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Table, Dropdown } from "react-bootstrap";
/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";

const PostPage = () => {
  const chackbox = document.querySelectorAll(".bs_exam_topper input");
  const motherChackBox = document.querySelector(".bs_exam_topper_all input");
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };

  return (
    <>
      <div className="m-4  flex-row">
        <div className="d-flex justify-content-start">
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
            <strong>Withdrawals</strong>
          </button>

          <button
            className="btn mx-1"
            type="button"
            style={{
              color: "#808191",
              // backgroundColor: "#FFD600",
            }}
          >
            <strong>Deposit</strong>
          </button>

          <button
            className="btn mx-1"
            type="button"
            style={{
              color: "#808191",
              // backgroundColor: "#FFD600",
            }}
          >
            <strong>Bank Withdraws</strong>
          </button>
        </div>

        {/* <div className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              variant=""
              size="sm"
              id="whiteSpace"
              className="mt-1 mb-2"
              style={{ border: "2px solid blue" }}
            >
              <i className="ti-calendar m-r-5 mx-2" />
              All Time
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" className="dropdown-item active">
                All Time
              </Dropdown.Item>
              <Dropdown.Item href="#">This past week</Dropdown.Item>
              <Dropdown.Item href="#">This past Month</Dropdown.Item>
              <Dropdown.Item href="#">This past Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>History</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table responsive hover>
              <thead style={{ backgroundColor: "#E4E4E4" }}>
                <tr>
                  <th className="width50 ">
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper_all">
                      <label
                        className="form-check-label"
                        htmlFor="checkAll"
                      ></label>
                    </div>
                  </th>
                  <th>TYPE</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>ADDRESS / TRANSACTION ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.99">
                          <circle cx="30" cy="30.0001" r="30" fill="white" />
                          <path
                            d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                            fill="#FF6600"
                          />
                        </g>
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                          d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                          fill="#F7931A"
                        />
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.99">
                          <circle cx="30" cy="30.0001" r="30" fill="white" />
                          <path
                            d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                            fill="#FF6600"
                          />
                        </g>
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                          d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                          fill="#F7931A"
                        />
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.99">
                          <circle cx="30" cy="30.0001" r="30" fill="white" />
                          <path
                            d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                            fill="#FF6600"
                          />
                        </g>
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                          d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                          fill="#F7931A"
                        />
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.99">
                          <circle cx="30" cy="30.0001" r="30" fill="white" />
                          <path
                            d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                            fill="#FF6600"
                          />
                        </g>
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                          d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                          fill="#F7931A"
                        />
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.99">
                          <circle cx="30" cy="30.0001" r="30" fill="white" />
                          <path
                            d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                            fill="#FF6600"
                          />
                          <path
                            d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                            fill="#FF6600"
                          />
                        </g>
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckBox2"
                        required=""
                        onClick={() => chackboxFun()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      ></label>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="40"
                        height="40"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                          d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                          fill="#F7931A"
                        />
                      </svg>
                      <strong>
                        {" "}
                        <span className="w-space-no">Withdraw BTC</span>
                      </strong>
                    </div>
                  </td>

                  <td>January 17 2020 10:56:41</td>

                  <td>
                    <strong>0.12340000 USTD</strong>
                  </td>

                  <td>
                    <strong>Zja7BQo782QanKv4so</strong>
                    <p>JHAEIF6374NXY34B474B8949</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PostPage;
