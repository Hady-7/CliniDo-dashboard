import "./userList.css";
import firebase from "../../../fbconifq/fbAuth";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})); 
  return (
    <main>
    <div className="main__container">
    <div style={{marginBottom:"10px"}}>User List</div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Email</StyledTableCell>
          <StyledTableCell >uuid</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.email}
            </StyledTableCell>
            <StyledTableCell icon={DeleteIcon}>{row.uid}</StyledTableCell>
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
