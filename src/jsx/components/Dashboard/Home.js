import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Col, Container, Tab, Nav } from "react-bootstrap";
import HomeImg from "../../../images/Home.png";

//Import
import PreviousTab from "../Boltz/Home/PreviousTab";
import HomeCards from "./HomeCards";

const CurrentRadialApex = loadable(() =>
  pMinDelay(import("../Boltz/Home/CurrentRadialApex"), 1000)
);


const Home = () => {
  const tabData = [
    {
      name: "Profile",
      content: <HomeCards />,
    },
    {
      name: "Referrals",
      content: "<Referrals />",
    },
    {
      name: "Password",
      content: "<Password />",
    },
    {
      name: "2FA",
      content: "<FA />",
    },
    {
      name: "Sessions & Login History",
      content: "<Sessions />",
    },
    {
      name: "extra",
    },
  ];
  return (
    <>
      <div className="row  ">
        <div className="col w-25 p-1">
          {/* Image */}
          <div className=" col-xl-8 col-xxl-8 col-sm-6 mb-4 mx-3" >
            <div className="card">
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
          </div>

          <div
            className="rounded p-2 m-3"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
          >
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
                                ? "Core Assets"
                                : i === 1
                                ? "Top Gainers"
                                : i === 2
                                ? "Top Losers"
                                : i === 3
                                ? "New"
                                : i === 4
                                ? "Market Cap"
                                : i === 5
                                ? "a"
                                : "b"}
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
          <div
            className="card"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
          >
            <div className="card-header border-0 pb-0 mb-0">
              <CurrentRadialApex />
            </div>
            <div className="card-body">
              <div id="currentChart ">
                <h4 className="fs-20 mb-0 ">Total Balance</h4>
              </div>
              <div className="chart-content">
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#EB8153" />
                    </svg>
                    <span className="fs-14">Income (66%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$167,884.21</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#4441DE" />
                    </svg>
                    <span className="fs-14">Spends (50%))</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$56,411.33</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#60C695" />
                    </svg>
                    <span className="fs-14">Installment (11%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$81,981.22</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <div>
                    <svg
                      className="me-2"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="15" height="15" rx="7.5" fill="#F34F80" />
                    </svg>
                    <span className="fs-14">Invest (23%)</span>
                  </div>
                  <div>
                    <h5 className="mb-0">$12,432.51</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div
            className="w-100 card p-0  "
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, .15)" }}
          >
            <PreviousTab />
          </div>
        </div>
        {/* Current Statistics ends here */}
      </div>
    </>
  );
};
export default Home;
