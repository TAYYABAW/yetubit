import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
  Modal,
  Button,
  Container,
  Tab,
  Nav,
} from "react-bootstrap";
//Import
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import Coinpayments from "coinpayments";

const client = new Coinpayments({
  key: "eb9c4c42626c58f13ca6e70b4812c46f36e269f7c1ef5f0b184c2c936dff8a15",
  secret: "BfF48F19A4513ec6fF76cd4854CC4947ab29485c32ef2339C7A0400cEf86E355",
});

const MyWallet = () => {
  const [gridInsideModal, setGridInsideModal] = useState(false);
  const tabData = [
    {
      name: "Home",
      content: "<Profile />",
    },
    {
      name: "Withdraw",
      content: "<Referrals />",
    },
    {
      name: "Deposit",
      content:" <Password />",
    },
    {
      name: "extra",
    },
  ];
  // BALANCE
  const [BTC_balance, setBTC_balance] = useState("");
  const [BCH_balance, setBCH_balance] = useState("");
  const [LTC_balance, setLTC_balance] = useState("");
  const [VLX_balance, setVLX_balance] = useState("");
  const ADA = "ADA.BEP2";
  const [ADA_balance, setADA_balance] = useState("");
  const [BNB_balance, setBNB_balance] = useState("");
  const [DAI_balance, setDAI_balance] = useState("");
  const [DASH_balance, setDASH_balance] = useState("");
  const [DGB_balance, setDGB_balance] = useState("");
  const [DIVI_balance, setDIVI_balance] = useState("");
  const [DOGE_balance, setDOGE_balance] = useState("");
  const [ETH_balance, setETH_balance] = useState("");
  const Ethereum = "ETH.BEP2";
  const [Ethereum_balance, setEthereum_balance] = useState("");
  const [SHIB_balance, setSHIB_balance] = useState("");
  const [SMART_balance, setSMART_balance] = useState("");
  const [SOL_balance, setSOL_balance] = useState("");
  const [TRX_balance, setTRX_balance] = useState("");
  const [USDC_balance, setUSDC_balance] = useState("");
  const USDT = "USDT.BEP2";
  const [USDT_balance, setUSDT_balance] = useState("");
  const [XMR_balance, setXMR_balance] = useState("");
  const XR = "XRP.BEP2";
  const [XRP_balance, setXRP_balance] = useState("");
  const [ZEC_balance, setZEC_balance] = useState("");

  // RATE
  const [BTC_rate, setBTC_rate] = useState("");
  const [BCH_rate, setBCH_rate] = useState("");
  const [LTC_rate, setLTC_rate] = useState("");
  const [VLX_rate, setVLX_rate] = useState("");
  const [ADA_rate, setADA_rate] = useState("");
  const [BNB_rate, setBNB_rate] = useState("");
  const [DAI_rate, setDAI_rate] = useState("");
  const [DASH_rate, setDASH_rate] = useState("");
  const [DGB_rate, setDGB_rate] = useState("");
  const [DIVI_rate, setDIVI_rate] = useState("");
  const [DOGE_rate, setDOGE_rate] = useState("");
  const [ETH_rate, setETH_rate] = useState("");
  const [Ethereum_rate, setEthereum_rate] = useState("");
  const [SHIB_rate, setSHIB_rate] = useState("");
  const [SMART_rate, setSMART_rate] = useState("");
  const [SOL_rate, setSOL_rate] = useState("");
  const [TRX_rate, setTRX_rate] = useState("");
  const [USDC_rate, setUSDC_rate] = useState("");
  const [USDT_rate, setUSDT_rate] = useState("");
  const [XMR_rate, setXMR_rate] = useState("");
  const [XRP_rate, setXRP_rate] = useState("");
  const [ZEC_rate, setZEC_rate] = useState("");

  // Tax_rate
  const [BTC_tax, setBTC_tax] = useState("");
  const [BCH_tax, setBCH_tax] = useState("");
  const [LTC_tax, setLTC_tax] = useState("");
  const [VLX_tax, setVLX_tax] = useState("");
  const [ADA_tax, setADA_tax] = useState("");
  const [BNB_tax, setBNB_tax] = useState("");
  const [DAI_tax, setDAI_tax] = useState("");
  const [DASH_tax, setDASH_tax] = useState("");
  const [DGB_tax, setDGB_tax] = useState("");
  const [DIVI_tax, setDIVI_tax] = useState("");
  const [DOGE_tax, setDOGE_tax] = useState("");
  const [ETH_tax, setETH_tax] = useState("");
  const [Ethereum_tax, setEthereum_tax] = useState("");
  const [SHIB_tax, setSHIB_tax] = useState("");
  const [SMART_tax, setSMART_tax] = useState("");
  const [SOL_tax, setSOL_tax] = useState("");
  const [TRX_tax, setTRX_tax] = useState("");
  const [USDC_tax, setUSDC_tax] = useState("");
  const [USDT_tax, setUSDT_tax] = useState("");
  const [XMR_tax, setXMR_tax] = useState("");
  const [XRP_tax, setXRP_tax] = useState("");
  const [ZEC_tax, setZEC_tax] = useState("");

  // Image
  const [BTC_img, setBTC_img] = useState("");
  const [BCH_img, setBCH_img] = useState("");
  const [LTC_img, setLTC_img] = useState("");
  const [VLX_img, setVLX_img] = useState("");
  const [ADA_img, setADA_img] = useState("");
  const [BNB_img, setBNB_img] = useState("");
  const [DAI_img, setDAI_img] = useState("");
  const [DASH_img, setDASH_img] = useState("");
  const [DGB_img, setDGB_img] = useState("");
  const [DIVI_img, setDIVI_img] = useState("");
  const [DOGE_img, setDOGE_img] = useState("");
  const [ETH_img, setETH_img] = useState("");
  const [Ethereum_img, setEthereum_img] = useState("");
  const [SHIB_img, setSHIB_img] = useState("");
  const [SMART_img, setSMART_img] = useState("");
  const [SOL_img, setSOL_img] = useState("");
  const [TRX_img, setTRX_img] = useState("");
  const [USDC_img, setUSDC_img] = useState("");
  const [USDT_img, setUSDT_img] = useState("");
  const [XMR_img, setXMR_img] = useState("");
  const [XRP_img, setXRP_img] = useState("");
  const [ZEC_img, setZEC_img] = useState("");

  useEffect(() => {
    client.balances({ all: 1 }, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        // console.log(result);
        setBTC_balance(result.BTC.balancef);
        setBCH_balance(result.BCH.balancef);
        setLTC_balance(result.LTC.balancef);
        setVLX_balance(result.VLX.balancef);
        setADA_balance(result[ADA].balancef);
        setBNB_balance(result.BNB.balancef);
        setDAI_balance(result.DAI.balancef);
        setDASH_balance(result.DASH.balancef);
        setDGB_balance(result.DGB.balancef);
        setDIVI_balance(result.DIVI.balancef);
        setDOGE_balance(result.DOGE.balancef);
        setETH_balance(result.ETH.balancef);
        setEthereum_balance(result[Ethereum].balancef);
        setSHIB_balance(result.SHIB.balancef);
        setSMART_balance(result.SMART.balancef);
        setSOL_balance(result.SOL.balancef);
        setTRX_balance(result.TRX.balancef);
        setUSDC_balance(result.USDC.balancef);
        setUSDT_balance(result[USDT].balancef);
        setXMR_balance(result.XMR.balancef);
        setXRP_balance(result[XR].balancef);
        setZEC_balance(result.ZEC.balancef);
      }
    });

    client.rates({ accepted: 2 }, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);

        // Rate
        setBTC_rate(result.BTC.rate_btc);
        setBCH_rate(result.BCH.rate_btc);
        setLTC_rate(result.LTC.rate_btc);
        setVLX_rate(result.VLX.rate_btc);
        setADA_rate(result[ADA].rate_btc);
        setBNB_rate(result.BNB.rate_btc);
        setDAI_rate(result.DAI.rate_btc);
        setDASH_rate(result.DASH.rate_btc);
        setDGB_rate(result.DGB.rate_btc);
        setDIVI_rate(result.DIVI.rate_btc);
        setDOGE_rate(result.DOGE.rate_btc);
        setETH_rate(result.ETH.rate_btc);
        setEthereum_rate(result[Ethereum].rate_btc);
        setSHIB_rate(result.SHIB.rate_btc);
        setSMART_rate(result.SMART.rate_btc);
        setSOL_rate(result.SOL.rate_btc);
        setTRX_rate(result.TRX.rate_btc);
        setUSDC_rate(result.USDC.rate_btc);
        setUSDT_rate(result[USDT].rate_btc);
        setXMR_rate(result.XMR.rate_btc);
        setXRP_rate(result[XR].rate_btc);
        setZEC_rate(result.ZEC.rate_btc);
        // Tax
        setBTC_tax(result.BTC.tx_fee);
        setBCH_tax(result.BCH.tx_fee);
        setLTC_tax(result.LTC.tx_fee);
        setVLX_tax(result.VLX.tx_fee);
        setADA_tax(result[ADA].tx_fee);
        setBNB_tax(result.BNB.tx_fee);
        setDAI_tax(result.DAI.tx_fee);
        setDASH_tax(result.DASH.tx_fee);
        setDGB_tax(result.DGB.tx_fee);
        setDIVI_tax(result.DIVI.tx_fee);
        setDOGE_tax(result.DOGE.tx_fee);
        setETH_tax(result.ETH.tx_fee);
        setEthereum_tax(result[Ethereum].tx_fee);
        setSHIB_tax(result.SHIB.tx_fee);
        setSMART_tax(result.SMART.tx_fee);
        setSOL_tax(result.SOL.tx_fee);
        setTRX_tax(result.TRX.tx_fee);
        setUSDC_tax(result.USDC.tx_fee);
        setUSDT_tax(result[USDT].tx_fee);
        setXMR_tax(result.XMR.tx_fee);
        setXRP_tax(result[XR].tx_fee);
        setZEC_tax(result.ZEC.tx_fee);

        // Image
        setBTC_img(result.BTC.image);
        setBCH_img(result.BCH.image);
        setLTC_img(result.LTC.image);
        setVLX_img(result.VLX.image);
        setADA_img(result[ADA].image);
        setBNB_img(result.BNB.image);
        setDAI_img(result.DAI.image);
        setDASH_img(result.DASH.image);
        setDGB_img(result.DGB.image);
        setDIVI_img(result.DIVI.image);
        setDOGE_img(result.DOGE.image);
        setETH_img(result.ETH.image);
        setEthereum_img(result[Ethereum].image);
        setSHIB_img(result.SHIB.image);
        setSMART_img(result.SMART.image);
        setSOL_img(result.SOL.image);
        setTRX_img(result.TRX.image);
        setUSDC_img(result.USDC.image);
        setUSDT_img(result[USDT].image);
        setXMR_img(result.XMR.image);
        setXRP_img(result[XR].image);
        setZEC_img(result.ZEC.image);
      }
    });
  }, []);

  // Crypto to USD
  let BTC_USD = BTC_balance / BTC_rate;
  let BCH_USD = BCH_balance / BCH_rate;
  let LTC_USD = LTC_balance / LTC_rate;
  let VLX_USD = VLX_balance / VLX_rate;
  let ADA_USD = ADA_balance / ADA_rate;
  let BNB_USD = BNB_balance / BNB_rate;
  let DAI_USD = DAI_balance / DAI_rate;
  let DASH_USD = DASH_balance / DASH_rate;
  let DGB_USD = DGB_balance / DGB_rate;
  let DIVI_USD = DIVI_balance / DIVI_rate;
  let DOGE_USD = DOGE_balance / DOGE_rate;
  let ETH_USD = ETH_balance / ETH_rate;
  let Ethereum_USD = Ethereum_balance / Ethereum_rate;
  let SHIB_USD = SHIB_balance / SHIB_rate;
  let SMART_USD = SMART_balance / SMART_rate;
  let SOL_USD = SOL_balance / SOL_rate;
  let TRX_USD = TRX_balance / TRX_rate;
  let USDC_USD = USDC_balance / USDC_rate;
  let USDT_USD = USDT_balance / USDT_rate;
  let XMR_USD = XMR_balance / XMR_rate;
  let XRP_USD = XRP_balance / XRP_rate;
  let ZEC_USD = ZEC_balance / ZEC_rate;

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
              {BTC_balance}{" "}
              <span className="btn btn-warning px-2 py-0">BTC</span>
            </h1>
            <span>{BTC_USD} USD</span>
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
                  {BTC_balance}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>{BTC_USD} USD</span>
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
                  {BTC_balance}
                  <span className="btn btn-warning px-2 py-0">BTC</span>
                </h1>
                <span style={{ color: "green" }}>{BTC_USD}USD</span>
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

      <div
        className="p-3 m-3 rounded"
        style={{ boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
      >
        <h3>Assets Balance</h3>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Table Hover</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>ASSETS</th>
                    <th>SYMBOL</th>
                    <th>24H MARKET</th>
                    <th>AVAILABLE BALANCE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sorting_1" onClick={() => setGridInsideModal(true)}>
                      <div className="form-check custom-checkbox ">
                        <input
                          type="button"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img src={BTC_img} alt="" width={45} />{" "}
                    </td>
                    <td>
                      <strong>BTC</strong>
                    </td>
                    <td style={{ color: "red" }}>2.05</td>
                    <td className="color-primary"> <h4>{BTC_balance}</h4>
                    ${BTC_USD}
                    </td>
                 
              {/* <!-- Modal --> */}
              <Modal className="fade d-flex" show={gridInsideModal} size="lg">
                <Modal.Header>
                  <Modal.Title>Account Setting</Modal.Title>
                  <Button
                    variant=""
                    className="btn-close"
                    onClick={() => setGridInsideModal(false)}
                  ></Button>
                </Modal.Header>
                <Modal.Body>
                  <Container className="">
                    <Col lg="12">
                      <Tab.Container
                        defaultActiveKey={tabData[0].name.toLowerCase()}
                      >
                        <Tab.Content className="">
                          {tabData.map(
                            (data, i) =>
                              i !== tabData.length - 1 && (
                                <Tab.Pane
                                  eventKey={data.name.toLowerCase()}
                                  key={i}
                                >
                                  <p>{data.content}</p>
                                </Tab.Pane>
                              )
                          )}
                        </Tab.Content>
                        <Nav as="ul">
                          {tabData.map(
                            (data, i) =>
                              i !== tabData.length - 1 && (
                                <Nav.Item as="li" key={i}>
                                  <Nav.Link eventKey={data.name.toLowerCase()}>
                                    {i === 0
                                      ?   <button
                                      className="btn "
                                      type="submit"
                                    >
                                      <strong>Home</strong>
                                    </button>
                                      : i === 1
                                      ? <button
                                      className="btn "
                                      type="submit"
                                      style={{ backgroundColor: "#FFD600", color: "white", borderRadius: "10px" }}
                                    >
                                      <strong>Withdraw</strong>
                                    </button>
                                      : i === 2
                                      ? <button
                                      className="btn "
                                      type="submit"
                                      style={{ backgroundColor: "#FFD600", color: "white", borderRadius: "10px" }}
                                    >
                                      <strong>Deposit</strong>
                                    </button>
                                      : i === 3                              
                                      ? "a"
                                      : "b"}
                                  </Nav.Link>
                                </Nav.Item>
                              )
                          )}
                        </Nav>
                        
                      </Tab.Container>
                    </Col>
                  </Container>
                </Modal.Body>
              </Modal>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          {/* <!-- /# card --> */}
        </Col>
      </div>
    </Fragment>
  );
};
export default MyWallet;
