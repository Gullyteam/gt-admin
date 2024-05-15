import React from 'react';
//import Usestate
import { useState } from 'react';

import {
  styled,
  Paper,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
  Box,
} from '@mui/material';

import { addDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddEntryfees = (data) => {
  //Intiate Navigate
  let navigate = useNavigate();
  const { id } = useParams();

  //Form Intial Value
  const intialvalue = {
    initialteamLimit: "",
    endteamLimit: '',
    fees: ''
  };

 // const [statusvalue, setStatus] = React.useState('Percentage');

  //UseState For store Form Data
  const [entryfees, setentryfees] = useState(intialvalue);

  //const [startDate, setStartDate] = useState('');
  //const [endDate, setEndDate] = useState('');

  //const handleStartDateChange = (event) => {
    //setStartDate(event.target.value);
    //setentryfees({ ...entryfees, [event.target.name]: event.target.value });
  
//};

  //const handleEndDateChange = (event) => {
    //setEndDate(event.target.value);
    //setentryfees({ ...entryfees, [event.target.name]: event.target.value });
 // };

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setentryfees({ ...entryfees, [e.target.name]: e.target.value });
  };

  //const handleChange = (event) => {
    //setStatus(event.target.value);
   // setentryfees({ ...entryfees, discountType: statusvalue });
 // };

  const addentryfeesData = async () => {
    if (entryfees.fess !== '' && entryfees.fees !== '') {
      addDataUsingApi('/admin/addEntryFees', entryfees).then((res) => {
        // console.log(res.data)
        navigate('/entryfees');
      });
    } else {
      toast.error('Please fill data correctly');
    } 
  };

  return (
    <Grid container spacing={2}>
      {data?.data?.map((formitem, key) => {
        return (
          <Grid item xs={6}>
            <Item>
              <TextField
                key={formitem?.name}
                required
                fullWidth
                id="outlined-required"
                type={formitem?.type}
                label={formitem?.name}
                helperText={formitem?.helperText}
                name={formitem?.name}
                onChange={(e) => onValueChange(e)}
                // error={!organizer[formitem?.name]}
              />
            </Item>
          </Grid>
        );
      })}





      
     

      <Grid item xs={12}>
        <Item>
          <Button variant="contained" onClick={() => addentryfeesData()}>
            Submit
          </Button>
        </Item>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default AddEntryfees;
