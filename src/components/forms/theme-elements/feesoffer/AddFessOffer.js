import React from 'react'
//import Usestate
import { useState } from 'react';
import { styled, Paper, Button, Grid, TextField} from '@mui/material';

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

const AddFessOffer = (data) => {

      //Intiate Navigate
      let navigate = useNavigate();
      const { id } = useParams();
  
      //Form Intial Value
      const intialvalue = {
        fess: "",
        offer: "",
        
      }

          //UseState For store Form Data
    const [fessoffer, setfessoffer] = useState(intialvalue);

    //For Data Insert in to Variable comming fromdata.
    const onValueChange = (e) => {
        setfessoffer({ ...fessoffer, [e.target.name]: e.target.value })
    }


    const addfessofferData = async () => {
        if(fessoffer.fess !== "" && fessoffer.offer !== ""  ) {
            
                addDataUsingApi('/admin/fessoffer', fessoffer)
            .then((res) => {
                // console.log(res.data)
                navigate('/fessoffer');

            });
        }else{
            toast.error("Please fill data correctly");
        }
    
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
                                    type={formitem?.type}
                                    label={formitem?.name}
                                    helperText={formitem?.helperText}
                                    name={formitem?.name}
                                    onChange={(e) => onValueChange(e)}
                                    // error={!organizer[formitem?.name]}

                                />
                            </Item>
                        </Grid>
                    )
                })
            }

            <Grid item xs={12}>
                <Item>
                    <Button variant="contained"  onClick={() => addfessofferData()}>Submit</Button>
                </Item>
            </Grid>
            <ToastContainer />
        </Grid>
  )
}

export default AddFessOffer