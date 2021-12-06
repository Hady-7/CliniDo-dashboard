import "./doctor.css";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { Link } from "react-router-dom";
import AddDoctor from "./add-doctor/addDoctor";
import DoctorList from "./doctor-list/doctorList";


const Doctor = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className="m-auto">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Doctor List" to='/doctor-list' component={Link}></Tab>
        <Tab label="Add Doctor" to='/add-doctor'  component={Link} ></Tab>
      </Tabs>
    </Box>
  );
};

export default Doctor;