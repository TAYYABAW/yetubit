import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadingToggleAction,
  loginAction,
} from "../../store/actions/AuthActions";

// image
//import logo from "../../images/logo-full-white.png";
import loginbg from "./../../images/bg6.jpg";
import chain from "./../../icons/login-icons/chain.svg";
import scan from "./../../icons/login-icons/scan-icon.svg";
import cyborg from "./../../icons/login-icons/cyborg.svg";


import Logo from "../../icons/logo/yetubit-logo.png";
import HomeImg from "../../images/Home.png";

function Login(props) {
  const [email, setEmail] = useState("demo@example.com");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, props.history));
  }

  return (
    <div className="page-wraper " style={{
		backgroundColor: "blue",
		backgroundSize: "600px 100vh"
	  
	  }}>
      <div
        className="page-content  login-style2"
		style={{
			backgroundImage: "url(" + HomeImg + ")",
			backgroundSize: "600px 100vh",
			backgroundRepeat: "no-repeat"
		  
		  }}
      >
        <div className="section-full"  >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="text-white max-w400 align-self-start">
                  <div className="logo">
                    <Link to={"#"}>
                       <h6 className="mb-2 text-white ">
					   <img src={Logo} alt="" /> <strong>Yetubit</strong>
                  </h6>
                    </Link>
                  </div>
                  <h2 className="mb-2 text-white font-w700">
                    The Cypto Assest Exchange
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login-2 submit-resume p-4 seth">
                  <div className="nav">
                    <form onSubmit={onLogin} className="col-12 p-a0 ">
                      <strong>Sign in to</strong><p></p>
                      <strong>Unity Exchange</strong>
                     
                      <div className="form-group mb-3 mt-3">
                        <div className="input-group" >
                          <input						  
                            type="email"
                            className="form-control "
                            placeholder="Type Your Email Address"
                            value={email}
							style={{backgroundColor: "#E4E4E4"}}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger fs-12">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            placeholder="Type Your Password"
							style={{backgroundColor: "#E4E4E4"}}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && (
                            <div className="text-danger fs-12">
                              {errors.password}
                            </div>
                          )}
                        </div>
						<div className="float-end mt-3 mb-3" style={{color: "#FFD600"}}>
						<img src={chain} alt="" />	Forgot Password
						</div>
                      </div>
                      <div className="text-center mb-3">
                        <button className="btn   w-100 border" style={{borderColor: "#E4E4E4"}}>
						<img src={scan} className="float-start p-0 m-0 " width={20} alt="" /> <strong style={{color: "#11142D", marginRight: "10px"}}>Click To Verify</strong><img src={cyborg} alt=""  />
                        </button>                      
                      </div>

					  <div className="text-center">
                        <button className="btn  btn-md w-100" style={{backgroundColor: "#FFD600", color: "white"}}>
                          Sign In
                        </button>
                        <Link
                          to="page-register"
                          className="btn-link forget-pass mt-3 float-end"
                        >
                          <span style={{color: "black"}}>Not a member</span> <img src={chain} alt="" /> <span style={{color: "#FFD600"}}>Sign up now</span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);
