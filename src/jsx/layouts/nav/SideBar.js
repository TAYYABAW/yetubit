/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
/// Image
import { ReactComponent as IconHome } from "../../../icons/sidebar-icons/Homesvg.svg";
import { ReactComponent as IconExchange } from "../../../icons/sidebar-icons/ExchangeSvg.svg";
import { ReactComponent as IconPrice } from "../../../icons/sidebar-icons/PricesSvg.svg";
import { ReactComponent as IconWallet } from "../../../icons/sidebar-icons/WalletSvg.svg";
import { ReactComponent as IconPromotion } from "../../../icons/sidebar-icons/PromotionSvg.svg";
import { ReactComponent as IconActivity } from "../../../icons/sidebar-icons/ActivitiesSvg.svg";
import { ReactComponent as IconNotification } from "../../../icons/sidebar-icons/NotificationSvg.svg";
import { ReactComponent as IconSetting } from "../../../icons/sidebar-icons/SettingSvg.svg";
import {
  Row,
  Card,
  Col,
  Button,
  Modal,
  Container,
  Tab,
  Nav,
} from "react-bootstrap";
import Profile from "../../components/SettingsMenu/Profile";
import Referrals from "../../components/SettingsMenu/Referrals";
import Password from "../../components/SettingsMenu/Password";
import FA from "../../components/SettingsMenu/2FA";
import Sessions from "../../components/SettingsMenu/Sessions";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const [gridInsideModal, setGridInsideModal] = useState(false);

  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let home = ["", "/"],
    exchange = ["coin-details"],
    price = ["prices"],
    wallet = ["my-wallet"],
    promotion = ["promotion"],
    activity = ["task"],
    notification = ["notification"],
    setting = ["coin-details"];

  const tabData = [
    {
      name: "Profile",
      content: <Profile />,
    },
    {
      name: "Referrals",
      content: <Referrals />,
    },
    {
      name: "Password",
      content: <Password />,
    },
    {
      name: "2FA",
      content: <FA />,
    },
    {
      name: "Sessions & Login History",
      content: <Sessions />,
    },
    {
      name: "extra",
    },
  ];

  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
      style={{
        borderRight: "1px solid lightgray",
     
      }}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${home.includes(path) ? "mm-active" : ""}`}>
            <Link to="">
              <IconHome />
              <span className="nav-text">Home</span>
            </Link>
          </li>

          <li className={`${exchange.includes(path) ? "mm-active" : ""}`}>
            <Link to="/coin-details">
              <IconExchange />
              <span className="nav-text">Exchange</span>
            </Link>
          </li>

          <li className={`${price.includes(path) ? "mm-active" : ""}`}>
            <Link to="/prices">
              <IconPrice />
              <span className="nav-text">Prices</span>
            </Link>
          </li>

          <li className={`${wallet.includes(path) ? "mm-active" : ""}`}>
            <Link to="/my-wallet">
              <IconWallet />
              <span className="nav-text">Wallets</span>
            </Link>
          </li>

          <li className={`${promotion.includes(path) ? "mm-active" : ""}`}>
            <Link to="/promotion">
              <IconPromotion />
              <span className="nav-text">Promotions</span>
            </Link>
          </li>

          <li className={`${activity.includes(path) ? "mm-active" : ""}`}>
            <Link to="/task">
              <IconActivity />
              <span className="nav-text">Activities</span>
            </Link>
          </li>

          <li className={`${notification.includes(path) ? "mm-active" : ""}`}>
            <Link to="/notification">
              <IconNotification />
              <span className="nav-text">Notifications</span>
            </Link>
          </li>

          <li >
            <Link>
              <IconSetting />
              <span onClick={() => setGridInsideModal(true)}>Setting</span>
              {/* <!-- Modal --> */}
              <Modal
                className="fade d-flex"
                show={gridInsideModal}
                style={{}}
                size="lg"
              >
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
                        <Nav as="ul" className="nav-pills mb-4 light">
                          {tabData.map(
                            (data, i) =>
                              i !== tabData.length - 1 && (
                                <Nav.Item as="li" key={i}>
                                  <Nav.Link eventKey={data.name.toLowerCase()}>
                                    {i === 0
                                      ? "Profile"
                                      : i === 1
                                      ? "Referrals"
                                      : i === 2
                                      ? "Password"
                                      : i === 3
                                      ? "2FA"
                                      : i === 4
                                      ? "Sessions & Login History"
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
                                <Tab.Pane
                                  eventKey={data.name.toLowerCase()}
                                  key={i}
                                >
                                  <p>{data.content}</p>
                                </Tab.Pane>
                              )
                          )}
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                  </Container>
                </Modal.Body>
              </Modal>
            </Link>
          </li>
        </MM>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
