import React from "react";

function Password() {
  return (
    <div>
      <div className="" style={{ height: "100%" }}>
        <div>
          <div className="p-3 ">
            <div className="">
              <div className="">
                <div className="row">
                  <div className=" mb-3 col-md-6">
                    <h5 style={{ color: "black" }}>Change Password</h5>
                  </div>
                </div>
                <div>
                  <div className=" mb-3 ">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="form-control"
                      style={{
                        backgroundColor: "#f1f1f1",
                        height: "50px",
                        width: "100%",
                      }}
                    />
                  </div>

                  <div className=" mb-3  ">
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form-control"
                      style={{
                        backgroundColor: "#f1f1f1",
                        height: "50px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className=" mb-3  ">
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="form-control"
                      style={{
                        backgroundColor: "#f1f1f1",
                        height: "50px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="  " >
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
                      <strong style={{ fontSize: "20px" }}>Change Password</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Password;
