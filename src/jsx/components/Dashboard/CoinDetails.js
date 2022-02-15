
import {
  Col,
  Container,
  Tab,
  Nav,
} from "react-bootstrap";

//Import

import Candlestick from "../charts/candlestick";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";



const Home = () => {
  const tabData = [
    {
      name: "Market Trades",
      content: (
        <CryptoCurrencyMarket
          colorTheme="light"
          width="100%"
          height={600}
        ></CryptoCurrencyMarket>
      ),
    },
    {
      name: "My Trades",
      content: "<Ticker colorTheme=></Ticker>",
    },
    {
      name: "Open Orders",
      content: "<Password />",
    },
    {
      name: "Favorites",
      content: "<FA />",
    },
    {
      name: "extra",
    },
  ];

  const tabData1 = [
    {
      name: "Price Chart",
      content: <Candlestick />,
    },
    {
      name: "Deep Chart",
      content: "<Ticker colorTheme=></Ticker>",
    },
    {
      name: "extra",
    },
  ];

  return (
    <>
      <div className="row d-flex">
        <div
          className="col card justify-content-center px-3"
          style={{
            fontSize: "14px",
            height: "85px",
            borderRadius: "0px",
            borderBottomLeftRadius: "10px",
            borderTopLeftRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <span>
            <div className="p-1">
              <svg
                width="30"
                height="30"
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
              <strong className="px-3">BTC/USDT</strong>
            </div>
          </span>
          <span style={{ fontSize: "12px" }}>Bitcoin</span>
        </div>
        <div
          className="col card justify-content-center px-1"
          style={{
            fontSize: "12px",
            height: "85px",
            borderRadius: "0px",
            border: "1px solid lightgray",
          }}
        >
          <span>24h Change</span>
          <span>
            <strong>Change Here</strong>
          </span>
        </div>
        <div
          className="col card justify-content-center px-1"
          style={{
            fontSize: "12px",
            height: "85px",
            borderRadius: "0px",
            border: "1px solid lightgray",
          }}
        >
          <span>Last Price</span>
          <span>
            <strong>18372.464648 USDT</strong>
          </span>
        </div>
        <div
          className="col card justify-content-center  px-1"
          style={{
            fontSize: "12px",
            height: "85px",
            borderRadius: "0px",
            border: "1px solid lightgray",
          }}
        >
          <span>24h Low</span>
          <span>
            <strong>18122.4564 USDT</strong>
          </span>
        </div>
        <div
          className="col card  justify-content-center px-1"
          style={{
            fontSize: "12px",
            height: "85px",
            borderRadius: "0px",
            border: "1px solid lightgray",
          }}
        >
          <span>24h High</span>
          <span>
            <strong>18807.08986 USDT</strong>
          </span>
        </div>
        <div
          className="col card  justify-content-center px-1"
          style={{
            fontSize: "12px",
            height: "85px",
            borderRadius: "0px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <span>Volume</span>
          <span>
            <strong>38645464.476 USDT</strong>
          </span>
        </div>
      </div>

      <div className="row  ">
        <div className="col w-25 p-1">
          <div
            className="border rounded p-3 mb-3 "
            style={{ borderRadius: "1px" }}
          >
            <Container className="">
              <Col lg="12">
                <Tab.Container
                  defaultActiveKey={tabData1[0].name.toLowerCase()}
                >
                  <Nav as="ul" className="nav-pills mb-4 light">
                    {tabData1.map(
                      (data, i) =>
                        i !== tabData1.length - 1 && (
                          <Nav.Item as="li" key={i}>
                            <Nav.Link eventKey={data.name.toLowerCase()}>
                              {i === 0
                                ? "Price Chart"
                                : i === 1
                                ? "Deep Chart"
                                : i === 2
                                ? "khkh"
                                : ""}
                            </Nav.Link>
                          </Nav.Item>
                        )
                    )}
                  </Nav>
                  <Tab.Content className="">
                    {tabData1.map(
                      (data, i) =>
                        i !== tabData1.length - 1 && (
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
          {/* 
          <div className="card border border-primary p-3" style={{ height: "380px" }}>
           
          </div> */}

          <div className="border rounded p-3" style={{ borderRadius: "1px" }}>
            <Container className="">
              <Col lg="12">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Nav as="ul" className="nav-pills mb-4 light">
                    {tabData.map(
                      (data, i) =>
                        i !== tabData.length - 1 && (
                          <Nav.Item as="li" key={i}>
                            <Nav.Link eventKey={data.name.toLowerCase()}>
                              {i === 0
                                ? "Market Trades"
                                : i === 1
                                ? "My Trades"
                                : i === 2
                                ? "Open Orders"
                                : i === 3
                                ? "Favorites"
                                : i === 4}
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
        </div>

        {/* Current Statistics start here */}
        <div
          className="h-25 col-xl-3 col-xxl-4  p-3 pt-0 "
          style={{ borderLeft: "1px solid lightgray" }}
        >
          {/* <div className="form-head mb-sm-3 mb-3 d-flex align-items-center flex-wrap mt-3 text-head">
            <h2 className="font-w400  mb-1" style={{ fontSize: "25px" }}>
              Order Book
            </h2>
          </div>

          <div
            className="card row border border-primary"
            style={{ height: "100%", borderRadius: "0px" }}
          >
            <div
              class="progress "
              style={{ height: "40px", width: "100%", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "55%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>
            <div className="row">
              <div
                class="progress "
                style={{ height: "40px", width: "100px", borderRadius: "0px" }}
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "55%", borderRadius: "0px" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  dfsdfsdf
                </div>
              </div>
            </div>
            <div className="row">
              <div
                class="progress col "
                style={{ height: "40px", width: "100px", borderRadius: "0px" }}
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "55%", borderRadius: "0px" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  dfsdfsdf
                </div>
              </div>
            </div>
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>{" "}
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>{" "}
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>{" "}
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>{" "}
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>{" "}
            <div
              class="progress "
              style={{ height: "40px", width: "100px", borderRadius: "0px" }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "25%", borderRadius: "0px" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                dfsdfsdf
              </div>
            </div>
          </div> */}


          <div
            className="card border"
            style={{ height: "100%", border: "1px solid lightgray" }}
          >
            <div>
              <div className="p-3 ">
                <div className="">
                  <div className="">
                    <div className="row">
                      <div className=" mb-3 col-md-6">
                        <button
                          className="btn "
                          type="button"
                          style={{
                            color: "#FFD600",
                            width: "100%",
                            backgroundColor: "#f1f1f1",
                          }}
                        >
                          <strong>Buy</strong>
                        </button>
                      </div>
                      <div className=" mb-3 col-md-6 ">
                        <button
                          className="btn "
                          type="button"
                          style={{
                            backgroundColor: "",
                            color: "#E4E4E4",
                            width: "100%",
                          }}
                        >
                          <strong>Sell</strong>
                        </button>
                      </div>
                    </div>
                    <div>
                    <div className="mb-3 col-md-6">
                  <select
                    className="form-control"
                    id="inputState"
                    defaultValue="option-1"
                    style={{ backgroundColor: "#f1f1f1" , height: "50px", width: "280px"}}
                  >
                    <option value="option-1">Stop Limit</option>
                    <option value="option-2">Disabled 1,000,000 USD/Day</option>
                  </select>
                </div>

                      <div className=" mb-3 col-md-6 ">
                        <input
                          type="text"
                          placeholder="Limit Price USDT"
                          className="form-control"
                          style={{ backgroundColor: "#f1f1f1" , height: "50px", width: "280px"}}
                        />
                      </div>

                      <div className=" mb-3 col-md-6 ">
                        <input
                          type="text"
                          placeholder="Amount BTC"
                          className="form-control"
                          style={{ backgroundColor: "#f1f1f1", height: "50px", width: "280px" }}
                        />
                      </div>
                      <div className=" mb-3 col-md-6 ">
                        <input
                          type="text"
                          placeholder="Amount USDT"
                          className="form-control"
                          style={{ backgroundColor: "#f1f1f1", height: "50px" , width: "280px"}}
                        />
                      </div>

                      <button
                        className="btn "
                        type="submit"
                        style={{
                          backgroundColor: "#FFD600",
                          color: "white",
                          width: "100%",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                      >
                        <strong>BUY BTC</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Current Statistics ends here */}
      </div>
    </>
  );
};
export default Home;
