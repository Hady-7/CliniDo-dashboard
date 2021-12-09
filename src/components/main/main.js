import "./main.css";
import hello from "../../assets/avatar-svgrepo-com.svg";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";
import firebase from "../../fbconifq/fbAuth";

const Main = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [name, setName] = useState("");
  const history = useNavigate();
  const fetchUserName = async () => {
    try {
      const query = await firebase.firestore()
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <main>
      <div className="main__container">
     
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {name} in clinido</h1>
            <p>Welcome to your admin dashboard</p>
            <p>your email {user?.email}</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i
              className="fas fa-user fa-2x text-lightblue fs-4"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Doctors</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red fs-4" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of booking</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fas fa-user fa-2x text-yellow fs-4"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of users</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green fs-4"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Reviews</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
       
      </div>
    </main>
  );
};

export default Main;