import React from "react";
import profile from "../../../images/profile/pic1.jpg";

function Profile() {
  return (
    <div>
      <div>
        <div className="">
          <div className="">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="">
                  <div className="p-2 mb-2">
                    <label className="form-label">Your Avatar</label>
                    <div className=" me-1">
                      <div className="col-4">
                        <img alt="images" width={60} src={profile} />
                      </div>
                      <div className=" mx-3 ">
                        <button
                          className="btn "
                          type="submit"
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            width: "100%",
                            height: "50px",
                            borderRadius: "10px",
                            border: "3px solid #FFD600",
                          }}
                        >
                          <strong>Upload New</strong>
                        </button>
                      </div>
                      <div className=" mx-3 ">
                        <button
                          className="btn "
                          type="submit"
                          style={{
                            backgroundColor: "#f1f1f1",
                            color: "gray",
                            width: "100%",
                            height: "50px",
                            borderRadius: "10px",
                          }}
                        >
                          <strong>Delete Avatar</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Your Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                </div>
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Display Name</label>
                  <input
                    type="text"
                    placeholder="Display Name"
                    className="form-control"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Email</label>
                  <input
                    type="Email"
                    placeholder="Email"
                    className="form-control"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                </div>
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="form-control"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Deposit Assests</label>
                  <select
                    className="form-control"
                    id="inputState"
                    defaultValue="option-1"
                    style={{ backgroundColor: "#f1f1f1" }}
                  >
                    <option value="option-1">Enable Deposit Assests</option>
                    <option value="option-2">Disabled Deposit Assests</option>
                  </select>
                </div>
                <div className="form-group mb-3 col-md-6 p-2">
                  <label className="form-label">Withdraw assets</label>
                  <select
                    className="form-control"
                    id="inputState"
                    defaultValue="option-1"
                    style={{ backgroundColor: "#f1f1f1" }}
                  >
                    <option value="option-1">Enabled 1,000,000 USD/Day</option>
                    <option value="option-2">Disabled 1,000,000 USD/Day</option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-3 col-md-6 p-2">
                <label className="form-label">Notifications</label>

                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Promotions
                  </label>
                </div>
                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Exchange
                  </label>
                </div>
                <div className="form-check custom-checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Withdrawals
                  </label>
                </div>
              </div>
              <button
                className="btn "
                type="submit"
                style={{ backgroundColor: "#FFD600", color: "white" }}
              >
                <strong>Update Profile</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
