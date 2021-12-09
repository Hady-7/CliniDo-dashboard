import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../fbconifq/fbAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../fbconifq/fbAuth";
import "./login.css";

function Login(props) {
  const [isAuth, setIsAuth] = useState(false);
  const history = useNavigate();
  const mailreg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const pwreg = /^[0-9]{6,20}$/;
  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });
  const [userErrors, setUserErrors] = useState({
    emailAddress: null,
    password: null,
  });

  const handleInputChange = (e) => {
    if (e.target.name === "emailAddress") {
      setUser({
        ...user,
        emailAddress: e.target.value,
      });
      if (mailreg.test(user.emailAddress)) {
        setUserErrors({ ...userErrors, emailAddress: null });
      } else {
        setUserErrors({
          ...userErrors,
          emailAddress: "please enter valid Mail",
        });
      }
    } else if (e.target.name === "password") {
      setUser({
        ...user,
        password: e.target.value,
      });
      if (pwreg.test(e.target.value)) {
        setUserErrors({
          ...userErrors,
          password: null,
        });
      } else {
        setUserErrors({
          ...userErrors,
          password: "please enter 6 digits",
        });
      }
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (!userErrors.emailAddress && !userErrors.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.emailAddress, user.password)
        .then((res) => {
          localStorage.setItem("token", res.user.refreshToken);
          history("/dashboard");
        })
        .catch((err) => {
          window.alert(err.code);
        });
    }
  };

  return (
    <main>
      <div className="main__container">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4 mt-5">
                <img
                  src="https://www.clinido.com/public/images/logo-menu-light.svg"
                  className="img-responsive ms-3 mt-5"
                />
              </div>

              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                <div className="d-flex align-items-center px-5 ms-xl-4  pt-xl-0 mt-xl-n5 mt-5 ">
                  <form id="forma" onSubmit={(e) => submitLogin(e)}>
                    <h3
                      className="fw-bold mb-3 pb-3"
                      style={{
                        letterSpacing: "1px",
                        color: "#004f71",
                        textAlign: "center",
                      }}
                    >
                      Log in
                    </h3>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example18">
                        Email address OR User name
                      </label>
                      <input
                        type="email"
                        id="form2Example18"
                        className="form-control form-control-lg "
                        name="emailAddress"
                        required
                        value={user.emailAddress}
                        style={{ width: "100%" }}
                        onChange={(e) => handleInputChange(e)}
                      />
                      <small className="text-danger">
                        {userErrors.emailAddress}
                      </small>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example28">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example28"
                        className="form-control form-control-lg"
                        required
                        name="password"
                        value={user.password}
                        style={{ width: "100%" }}
                        onChange={(e) => handleInputChange(e)}
                      />
                      <small className="text-danger">
                        {userErrors.password}
                      </small>
                    </div>

                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-lg btn-block"
                        style={{ backgroundColor: "#38b9db", color: "white" }}
                        type="submit"
                        onClick={() => {
                          setIsAuth(true);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5 px-0 d-none d-md-block">
              <img
                src="https://clinido.com/public/images/img-1.svg"
                alt="Login image"
                className="w-75"
                style={{
                  objectFit: "cover",
                  objectPosition: "left",
                  marginTop: "10%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Login;
