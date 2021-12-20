import "./main.css";
import hello from "../../assets/avatar-svgrepo-com.svg";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import firebase from "../../fbconifq/fbAuth";

const Main = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [name, setName] = useState("");
  const [Doctorsize, setDoctorSize] = useState(0);
  const [BookingSize, setBooking] = useState(0);
  const [userSize, setUserSize] = useState(0);
  const history = useNavigate();
  const fetchUserName = async () => {
    try {
      const query = await firebase.firestore()
        .collection("Admin")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.displayName);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history("/");
    fetchUserName();
    firebase.firestore().collection("Doctor").get().then(res => {
      setDoctorSize(res.size)
    })
    firebase.firestore().collection("Booking").get().then(res => {
      setBooking(res.size)
    })
    firebase.firestore().collection("users").get().then(res => {
      setUserSize(res.size)
    })
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
              <span className="font-bold text-title">{Doctorsize}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red fs-4" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of booking</p>
              <span className="font-bold text-title">{BookingSize}</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fas fa-user fa-2x text-yellow fs-4"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of users</p>
              <span className="font-bold text-title">{userSize}</span>
            </div>
          </div>

        
        </div>
     
       
      </div>
    </main>
  );
};

export default Main;



