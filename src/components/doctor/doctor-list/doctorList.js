import "./doctorList.css";
import firebase from "../../../fbconifq/fbAuth";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const DoctorList = () => {
  const db = firebase.firestore()
  const [doctor, setDoctor] = useState([]);
  useEffect(() => 
    onSnapshot(collection(db, "Doctor"), (snapshot) => {
      setDoctor(snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      }))
    })
  ,[]);
console.log(doctor);
  return <div>doctor list</div>;
};

export default DoctorList;
