import "./doctorList.css";
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
    <div style={{marginBottom:"10px"}}>Doctor List</div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Names</StyledTableCell>
          <StyledTableCell >category</StyledTableCell>
          <StyledTableCell >city</StyledTableCell>
          <StyledTableCell >area</StyledTableCell>
          <StyledTableCell >phone</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {doctor.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.firstName}
            </StyledTableCell>
            <StyledTableCell >{row.drCategory}</StyledTableCell>
            <StyledTableCell>{row.drCity}</StyledTableCell>
            <StyledTableCell >{row.drArea}</StyledTableCell>
            <StyledTableCell >{row.mobile}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </main>
  );
};

export default DoctorList;
