import React, { Fragment, useContext, useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import HomeImg from "../../images/Promotion.svg";
import { ReactComponent as Arrow } from "../../images/promotion-arrow.svg";
import { ReactComponent as Card1 } from "../../images/promotion/card-1.svg";
import { ReactComponent as Card2 } from "../../images/promotion/card-2.svg";
import { ReactComponent as Card3 } from "../../images/promotion/card-3.svg";
import { ReactComponent as Card4 } from "../../images/promotion/card-4.svg";
import { ReactComponent as Card5 } from "../../images/promotion/card-5.svg";
import { ReactComponent as Card6 } from "../../images/promotion/card-6.svg";

//Import
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const MyWallet = () => {
  return (
    <Fragment>
      <div className="">
        <div className="m-4">
          <h4>Unity Exchange</h4>
          <h1>Promotions</h1>
        </div>
        <div className=" d-flex mb-4 m-4 ">
          <div className="col card  col-sm-6">
            <img
              className=" rounded "
              style={{
                boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                background:
                  "radial-gradient(103.03% 103.03% at 0% 0%, #D080FF 0%, #6C5DD3 100%),radial-gradient(103.03% 103.03% at 0% 0%, #FFD600 0%, #6C5DD3 100%)",
              }}
              src={HomeImg}
              alt=""
            />
          </div>

          {/* <div className="d-flex  p-3">
            <div
              className="  card border mx-2"
              style={{
                width: "35%",
                boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
              }}
            >
              <div className=" col p-3 ">
                <div className="m-2 d-flex row">
                <div className="col"><Card6/></div>
                  <span
                    className="rounded p-1 px-3 col"
                  >
                     
                      
                    Oct 26th - Nov 25th
                  </span>
                  <h5 className="m-2 col">Bitcoin x TRON Net Deposit Campaign</h5>

                </div>
              </div>
            </div>

            <div
              className="  card border mx-2"
              style={{
                width: "35%",
                boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
              }}
            >
              <div className=" col p-3 ">
                <div className="m-2">
                  <span
                    className="rounded p-1 px-3 "
                  >
                    Oct 26th - Nov 25th
                  </span>
                </div>
                <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
              </div>
            </div>

            <div
              className="  card border mx-2"
              style={{
                width: "35%",
                boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
              }}
            >
              <div className=" col p-3 ">
                <div className="m-2">
                  <span
                    className="rounded p-1 px-3 "
                  >
                    Oct 26th - Nov 25th
                  </span>
                </div>
                <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
              </div>
            </div>
          </div> */}
        </div>

        <div className="p-3 ">
          <div className=" row   " style={{ width: "100%" }}>
            <div className=" col p-3 ">
              <h3>Latest Promotions</h3>
            </div>

            <div className="d-flex  p-3">
              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card1 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card2 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card3 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex  p-3">
              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card4 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card5 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="  card border mx-2"
                style={{
                  width: "35%",
                  boxShadow: "0 0 30px rgba(0, 0, 0, .15)",
                }}
              >
                <Card6 />

                <div className=" col p-3 ">
                  <div className="m-2">
                    <span
                      style={{ color: "#4FBF67", backgroundColor: "#e4f5e8" }}
                      className="rounded p-1 px-3 "
                    >
                      Oct 26th - Nov 25th
                    </span>
                  </div>
                  <h5 className="m-2">Bitcoin x TRON Net Deposit Campaign</h5>
                  <div
                    className=" m-3 col-md-6 p-0"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    <button
                      className="btn "
                      type="button"
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Arrow /> <strong>Deposit Bitcoin</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4">
        <button
          className="btn mx-1 "
          type="button"
          style={{
            color: "white",
            backgroundColor: "#FFD600",
            borderRadius: "10px",
          }}
        >
          <strong>1</strong>
        </button>

        <button
          className="btn mx-1"
          type="button"
          style={{
            color: "black",
            // backgroundColor: "#FFD600",
            borderRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <strong>2</strong>
        </button>

        <button
          className="btn mx-1"
          type="button"
          style={{
            color: "black",
            // backgroundColor: "#FFD600",
            borderRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <strong>3</strong>
        </button>
        <button
          className="btn mx-1"
          type="button"
          style={{
            color: "black",
            // backgroundColor: "#FFD600",
            borderRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <strong>4</strong>
        </button>
        <button
          className="btn mx-1"
          type="button"
          style={{
            color: "black",
            // backgroundColor: "#FFD600",
            borderRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <strong>Next</strong>
        </button>
      </div>
    </Fragment>
  );
};
export default MyWallet;
