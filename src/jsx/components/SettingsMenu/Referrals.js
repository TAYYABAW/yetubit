import React from "react";
import { ReactComponent as Ricon } from "./referral-link.svg";

function Referral() {
  return (
    <div className="">
      <div
        className="card  pb-1"
        style={{
          background:
            "radial-gradient(103.03% 103.03% at 0% 0%, #D080FF 0%, #6C5DD3 100%)",
        }}
      >
        <h3 className="mb-3" style={{ color: "white" }}>
          Invite your friends to Unity Exchange and Earn 15% on Friends trading
          fees
        </h3>
        <h5 style={{ color: "white" }}>Your Referral Link</h5>
        <div
          className="card flex-row px-2 pt-2"
          style={{
            background: "rgba(255,255,255,0.3)",
            borderRadius: "8px",
            height: "50px",
            alignItems: "center",
          }}
        >
          <div className="col">
            <h6 style={{ color: "white", justifySelf: "end" }}>
              https://unityexchange.design/ref?tranmautritam
            </h6>
          </div>

          <div>
            <span style={{ justifySelf: "flex-end" }}>
              <Ricon />
            </span>
          </div>
        </div>
      </div>

      <div
        className="card p-3"
        style={{
          boxShadow: "none",
          borderBottom: "1px solid lightgray",
          borderRadius: "1px",
        }}
      >
        <h5>Total Rewards</h5>
        <h1>
          <span style={{ fontWeight: "500" }}>128.654</span>{" "}
          <span
            className="p-2 px-3 "
            style={{
              background: "#3DBAA2",
              borderRadius: "24px",
              fontSize: "15px",
              color: "white",
            }}
          >
            USDT
          </span>
        </h1>
      </div>

      <div className="row p-3" style={{ borderBottom: "1px solid lightgray" }}>
        <div className="col-10">
          <h3 style={{ color: "black" }}>Inviter Rewards </h3>
        </div>
        <div className="col">
          <h5>0.00 USDT</h5>
        </div>
        <div className=" col-6">
          <p style={{}}>
            You're earning 20% of the trading fees your referrals pay.
          </p>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-11">
          <h5 style={{ color: "black" }}>Total Invited </h5>{" "}
        </div>
        <div className="col">
          <h6>
            <span style={{ justifySelf: "end" }}>64</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Referral;
