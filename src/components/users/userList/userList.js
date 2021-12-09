import "./userList.css";
import firebase from "../../../fbconifq/fbAuth";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const UserList = () => {
  const db = firebase.firestore()
  const [user, setuser] = useState([]);
  useEffect(() => 
    onSnapshot(collection(db, "users"), (snapshot) => {
      setuser(snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      }))
    })
  ,[]);
console.log(user);
  return <div>user list</div>;
};

export default UserList;
