import React from 'react'
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField } from '@mui/material';
import { editDataUsingApiputmethod,deleteDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';

//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const EditFessOffer = (data) => {
  //Intiate Navigate
  let navigate = useNavigate();
  const { id } = useParams();

  //Form Intial Value
  const intialvalue = {
    fees: "",
    offer: "",
    
  }


  //UseState For store Form Data
  const [fessoffer, setfessoffer] = useState(intialvalue);

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
      setfessoffer({ ...fessoffer, [e.target.name]: e.target.value })
  }



  // Use useEffect to set fessoffer data when data becomes available
  useEffect(() => {
      if (data?.data?.data) {
          setfessoffer(data.data.data);
      }
  }, [data]);


  const editfessofferData = async () => {
    editDataUsingApiputmethod(`/admin/fessoffer/${id}`, fessoffer)
          .then((res) => {
              navigate('/fessoffer');
          });
  }

  const deletefessofferData = async () => {
      deleteDataUsingApi(`/admin/fessoffer/${id}`, fessoffer)
          .then((res) => {
              navigate('/fessoffer');
          });
  }


  return (
      <Grid container spacing={2}>

          {
              data?.Formdata?.map((formitem, key) => {
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
                                  value={fessoffer[formitem.name]}
                                  onChange={(e) => onValueChange(e)}
                              />

                          </Item>

                      </Grid>
                  )
              })
          }

          <Grid item xs={12}>
              <Item>
                
                  {data?.action.action === 'edit' ? (
                      <Button variant="contained" onClick={() => editfessofferData()}>Edit Data</Button>
                  ) : data?.action.action === 'delete' ? (
                      <Button variant="contained" onClick={() => deletefessofferData()}>Delete fessoffer</Button>
                  ): (
                          ""
                      )}

              </Item>
          </Grid>
      </Grid>
  )
}

export default EditFessOffer