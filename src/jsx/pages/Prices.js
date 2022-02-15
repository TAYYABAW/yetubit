import React from "react";
import { Container, Card, Col, Tab, Nav } from "react-bootstrap";

import { ReactComponent as Rcicon } from "../../icons/prices-icons/recently-added.svg";
import { ReactComponent as Top } from "../../icons/prices-icons/top-gainers.svg";
import { ReactComponent as Lossers } from "../../icons/prices-icons/top-lossers.svg";
import { ReactComponent as Stable } from "../../icons/prices-icons/stable-coins.svg";
import { ReactComponent as Pot } from "../../icons/prices-icons/potential-coins.svg";
import Candlestick from "../components/charts/candlestick";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";

const tabData = [
  {
    name: "Profile",
    icon: <Rcicon />,
    content: (
      <CryptoCurrencyMarket
        colorTheme="light"
        width="100%"
        height={600}
      ></CryptoCurrencyMarket>
    ),
  },
  {
    name: "Referrals",
    icon: <Rcicon />,
    content: "<Referrals />",
  },
  {
    name: "Password",
    icon: <Rcicon />,
    content: "<Password />",
  },
  {
    name: "2FA",
    icon: <Rcicon />,
    content: "<FA />",
  },
  {
    name: "Sessions & Login History",
    icon: <Rcicon />,
    content: "<Sessions />",
  },
  {
    name: "extra",
    icon: <Rcicon />,
  },
];

function Prices() {
  return (
    <div className="m-5">
      <div className="">
        <div
          className="card p-5"
          style={{
            color: "white",
            width: "100%",
            height: "316px",
            background:
              "radial-gradient(103.03% 103.03% at 0% 0%, #FFD600 0%, #000000 100%)", 
          }}
        >
          <h1 style={{ color: "white" }} className="col-6">
            Search by token name, symbol, or address{" "}
          </h1>
          <p>Find the best prices across exchange networks</p>
          <div className="input-group search-area " style={{ width: "40%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Find something here.."
              style={{
                borderRadius: "5px",
                borderBottomRightRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            />
            <span
              className="input-group-text"
              style={{
                borderRadius: "5px",
                background: "white",
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "0px",
              }}
            >
              <Link to={"#"}>
                <i className="flaticon-381-search-2"></i>
              </Link>
            </span>
          </div>
        </div>
        <Container className="">
          <Col lg="12">
            <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
              <Nav fill as="ul" className="nav-pills mb-5 light">
                {tabData.map(
                  (data, i) =>
                    i !== tabData.length - 1 && (
                      <Nav.Item icon={data.icon} as="li" key={i} className="" style={{ }}>
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                            {i === 0 ? (
                              <div >
                                  <Rcicon className="mt-2" />
                                <p className="mt-3">Recently Added</p>
                              </div>
                            ) : i === 1 ? (
                              <div >
                                <Top className="mt-2"/>
                                <p className="mt-3">Top Gainers</p>
                              </div>
                            ) : i === 2 ? (
                              <div >
                                <Lossers className="mt-2"/>
                                <p className="mt-3">Top Lossers</p>
                              </div>
                            ) : i === 3 ? (
                              <div>
                                <Stable className="mt-2"/>
                                <p className="mt-3">Stable Coins</p>
                              </div>
                            ) : i === 4 ? (
                              <div>
                                <Pot className="mt-2"/>
                                <p className="mt-3">Potential Coins</p>
                              </div>
                            ) : i === 5 ? (
                              "a"
                            ) : (
                              "b"
                            )}
                        </Nav.Link>
                      </Nav.Item>
                    )
                )}
              </Nav>
              <Tab.Content className="">
                {tabData.map(
                  (data, i) =>
                    i !== tabData.length - 1 && (
                      <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                        <p>{data.content}</p>
                      </Tab.Pane>
                    )
                )}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Container>
      </div>

      {/* <div className="row">
        <div className="col " >
          <div
            className="card"
            style={{
              border: "1px solid lightgray",
              height: "200px",
              width: "175px",
            }}
          >
            <div
              className="card-body d-flex "
              style={{ borderColor: "lightgrey" }}
            >
              <div className="icon me-3">
                <Rcicon />

                <h5 className="mt-3" style={{ fontSize: "16px" }}>
                  Recently Added
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
            className="card"
            style={{
              border: "1px solid lightgray",
              height: "200px",
              width: "175px",
            }}
          >
            <div
              className="card-body d-flex "
              style={{ borderColor: "lightgrey" }}
            >
              <div className="icon me-3">
                <Top />

                <h5 className="mt-3" style={{ fontSize: "16px" }}>
                  Recently Added
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              border: "1px solid lightgray",
              height: "200px",
              width: "175px",
            }}
          >
            <div
              className="card-body d-flex "
              style={{ borderColor: "lightgrey" }}
            >
              <div className="icon me-3">
                <Lossers />

                <h5 className="mt-3" style={{ fontSize: "16px" }}>
                  Recently Added
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col  ">
          <div
            className="card"
            style={{
              border: "1px solid lightgray",
              height: "200px",
              width: "175px",
            }}
          >
            <div
              className="card-body d-flex "
              style={{ borderColor: "lightgrey" }}
            >
              <div className="icon me-3">
                <Stable />

                <h5 className="mt-3" style={{ fontSize: "16px" }}>
                  Recently Added
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
            className="card"
            style={{
              border: "1px solid lightgray",
              height: "200px",
              width: "175px",
            }}
          >
            <div
              className="card-body d-flex "
              style={{ borderColor: "lightgrey" }}
            >
              <div className="icon me-3">
                <Pot />

                <h5 className="mt-3" style={{ fontSize: "16px" }}>
                  Recently Added
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Prices;
