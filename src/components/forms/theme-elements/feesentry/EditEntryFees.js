import React, { useState, useEffect } from 'react';
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
import { addDataUsingApi, deleteDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EditEntryFees = (data) => {
  let navigate = useNavigate();
  const { id } = useParams();

  //const [loading, setLoading] = useState(false);

  const initialValue = {
    initialteamLimit: '',
    endteamLimit: '',
    fees: ''
    
  };

  const [entryfees, setentryfees] = useState(initialValue);

  useEffect(() => {
    if (data?.data?.data) {
      setentryfees(data.data.data);
      console.log(entryfees)
    }
  }, [data]);

  const onValueChange = (e) => {
    setentryfees({ ...entryfees, [e.target.name]: e.target.value });
  };

  const editentryfeesData = async () => {
    addDataUsingApi(`/admin/updateEntryFees/${id}`, entryfees).then((res) => {
      navigate('/entryfees');
    });
  };

  const deleteentryfeesData = async () => {
    deleteDataUsingApi(`/admin/entryfees/${id}`, entryfees).then((res) => {
      navigate('/entryfees');
    });
   // const isReadOnlyCondition = (fieldName) => {
      // Your logic to determine when the field should be read-only
     // if(fieldName==="response"){
        //  return false;
     // }else{
       //   return true;
    //  }
  //};
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>
          <TextField
            key="Initial Team Limit"
            required
            fullWidth
            id="outlined-required"
            type="Number"
            value={entryfees.initialteamLimit}
            label="Initial Team Limit"
            helperText="Initial Team Limit"
            name="intitialteamlimit"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="End Team Limit"
            required
            fullWidth
            id="outlined-required"
            type="Number"
            value={entryfees.endteamLimit}
            label="End Team Limit"
            helperText="End Team Limit"
            name="endteamlimit"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="Fees"
            required
            fullWidth
            id="outlined-required"
            type="Number"
            value={entryfees.fees}
            label="Fees"
            helperText="Fees"
            name="fees"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      


     
      <Grid item xs={12}>
        <Item>
          {data?.action.action === 'edit' ? (
            <Button variant="contained" onClick={editentryfeesData}>
              Save Changes
            </Button>
          ) : data?.action.action === 'delete' ? (
            <Button variant="contained" onClick={deleteentryfeesData}>
              Delete entryfees
            </Button>
          ) : (
            ''
          )}
        </Item>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default EditEntryFees;
