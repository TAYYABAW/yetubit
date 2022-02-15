import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";

//Import
import { ThemeContext } from "../../../context/ThemeContext";
import Donut from "../Boltz/MyWallet/Donut";
import WalletTab from "../Boltz/MyWallet/WalletTab";
import SwiperSlider2 from "../Boltz/MyWallet/SwiperSlider2";
import QuickTransfer from "../Boltz/Home/QuickTransfer";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";


const CoinChart = loadable(() =>
  pMinDelay(import("../Boltz/MyWallet/CoinChart"), 1000)
);

const progressBarData = [
  { variant: "danger", value: "60" },
  { variant: "info", value: "40" },
];

const MyWallet = () => {
  return (
    <Fragment>
      <div className="p-3 ">
        <div
          className=" row card  "
          style={{ width: "100%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
        >
          <div className=" col p-3 ">
            <span style={{ color: "black" }} className="fw-bold">
              Total Balance
            </span>
            <h1>
              0.45345345 <span className="btn btn-warning px-2 py-0">BTC</span>
            </h1>
            <span>3,700.00 USD</span>
          </div>

          <div className="d-flex  p-3">
            <div
              className="  card border mx-2"
              style={{ width: "35%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
            >
              <div className=" col p-3 ">
                <span style={{ color: "black" }} className="fw-bold">
                  Exchange Balance
                </span>
                <h1>
                  0.45345345{" "}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>3,700.00 USD</span>
              </div>
            </div>

            <div
              className="  card border  mx-2"
              style={{ width: "35%", boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
            >
              <div className="  p-3 ">
                <span style={{ color: "black" }} className="fw-bold">
                  Assets Balance
                </span>
                <h1>
                  0.45345345{" "}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>3,700.00 USD</span>
              </div>
            </div>

            <div className="col-xl-4 px-2">
              <Card style={{ boxShadow: "none" }}>
                  <div>
                    <span>Exchange Balance</span>
                    <ProgressBar now={60} variant="" className="mt-3" />
                  </div>
                  <div>
                    <span>Assets Balances</span>
                    <ProgressBar now={30} variant="" className="mt-3" />
                  </div>{" "}
              </Card>
            </div>
          </div>
        </div>
      </div>

	  <div className="p-3 m-3 rounded" style={{boxShadow: "0 0 30px rgba(0, 0, 0, .15)"}}> 
		  <h3>Assets Balance</h3>
		   <CryptoCurrencyMarket
          colorTheme="light"
          width="100%"
          height={600}
        ></CryptoCurrencyMarket></div>
    </Fragment>
  );
};
export default MyWallet;
