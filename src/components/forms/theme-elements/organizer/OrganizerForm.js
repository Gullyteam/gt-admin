import React from 'react'
//import Usestate
import { useState } from 'react';
import { styled, Paper, Button, Grid, TextField } from '@mui/material';

import { addDataUsingApi, editDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';




//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const OrganizerForm = (data) => {

  //Intiate Navigate
  let navigate = useNavigate();
  const { id } = useParams();

  //Form Intial Value
  const intialvalue = {
    name: "",
    contact: "",
    email: "",
    location: "",
    game_name: "",
    tournament_name: "",
    tournament_location: "",
    tournament_fees: ""
  }

  //UseState For store Form Data
  const [organizer, setorganizer] = useState(intialvalue);

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setorganizer({ ...organizer, [e.target.name]: e.target.value })
  }

  //Intiate action
  var action = " "
  if (data?.action['action'] === 'edit') {
    action = "edit"

  } else if (data?.action['action'] === 'view') {
    action = "view"

  }



  console.log(data);

  const addOrganizerData = async () => {
    addDataUsingApi('/organizer', organizer)
      .then((res) => {
        // console.log(res.data)
        navigate('/organizer');

      });
  }

  const editOrganizerData = async () => {
    editDataUsingApi(`/organizer/${id}`, organizer)
      .then((res) => {
        // console.log(res.data)
        navigate('/organizer');

      });
  }

  return (
    <Grid container spacing={2}>

      {
        data?.data?.map((formitem, key) => {
          return (
            <Grid item xs={6}>
              <Item>
                <TextField
                  key={formitem?.name}
                  required
                  fullWidth
                  id="outlined-required"
                  helperText={formitem?.helperText}
                  name={formitem?.name}
                  onChange={(e) => onValueChange(e)}
                  value={formitem?.default}
                //value= {action === 'view' || action === 'edit' ? formitem?.default : organizer[formitem?.name] ||''}

                />

              </Item>

            </Grid>
          )
        })
      }

      <Grid item xs={12}>
        <Item>
          {
            action === 'edit' ? (
              <Button variant="contained" onClick={() => editOrganizerData()}>Edit</Button>
            ) : action === 'view' ? (
              null
            ) : (
              <Button variant="contained" onClick={() => addOrganizerData()}>Submit</Button>
            )
          }


        </Item>
      </Grid>
    </Grid>
  )
}

export default OrganizerForm