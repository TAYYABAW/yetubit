import React from "react";
import { ReactComponent as QR } from "../../../images/qr.svg";

function FA() {
  return (
    <div>
      <div className=" ">
        <div className="">
          <h3 style={{ color: "black" }}>Scan Code </h3>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-6">
          <h3 style={{ color: "black" }}>
            <QR />{" "}
          </h3>
        </div>
        <div className="col">
          <p style={{}}>
            If you want to turn on 2FA , use{" "}
            <span style={{ color: "#FFD600" }}>Google Authenticator App</span>{" "}
            to scan the QR code, then enter the six-digit code provided by the
            app to the form below.{" "}
          </p>{" "}
        </div>
      </div>

      <div className="row p-3">
        <div className="col-12">
          <h3 style={{ color: "black" }}>Enter six-digit code</h3>
        </div>
        <div className="row">

          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>
          
          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>

          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>

          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>

          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>

          <div className="col-2 p-3 ">
            <input
            maxlength="1"
              type="text"
              placeholder="0"
              style={{
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                fontSize: '30px',
                border: "3px solid #4FBF67",
                textAlign: "center",
                color: "black",
                borderRadius: "20px"
            }}
            />
          </div>



        </div>
      </div>
    </div>
  );
}

export default FA;
