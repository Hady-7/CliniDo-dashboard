import "./userList.css";
import firebase from "../../../fbconifq/fbAuth";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, loading, error] = useAuthState(firebase.auth());
  const history = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!users) return history("/");
  }, [users, loading]);
  const db = firebase.firestore();
  const [user, setuser] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) => {
        setuser(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      }),
    []
  );
  console.log(user);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const handlDelete = (id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfully deleted! ");
      })
      .catch((error) => {
        console.log("Error removing document:", error);
      });
  };
  return (
    <main>
      <div className="main__container">
        <div style={{ marginBottom: "10px" }}>User List</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>uuid</StyledTableCell>
                <StyledTableCell>Edit or Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.uid} 
                  </StyledTableCell>
                  <StyledTableCell>
                    <i className="fas fa-trash-alt" onClick={() => handlDelete(row.id)}></i>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};

export default UserList;
