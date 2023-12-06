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


    const addOrganizerData = async () => {
        if(organizer.name !== "" && organizer.contact !== ""  &&  organizer.email !== "" &&  organizer.location !== "" &&  organizer.game_name !== "" &&  organizer.tournament_name !== "" &&  organizer.tournament_location !== "" &&  organizer.tournament_fees !== "") {
            
                addDataUsingApi('/organizer', organizer)
            .then((res) => {
                // console.log(res.data)
                navigate('/organizer');

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
                    <Button variant="contained"  onClick={() => addOrganizerData()}>Submit</Button>
                </Item>
            </Grid>
            <ToastContainer />
        </Grid>
    )
}

export default OrganizerForm