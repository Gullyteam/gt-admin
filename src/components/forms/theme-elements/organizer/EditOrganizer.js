import React from 'react'
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField } from '@mui/material';
import { editDataUsingApi,deleteDataUsingApi } from 'src/utils/api';
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



    // Use useEffect to set organizer data when data becomes available
    useEffect(() => {
        if (data?.data?.data) {
            setorganizer(data.data.data);
        }
    }, [data]);


    const editOrganizerData = async () => {
        editDataUsingApi(`/organizer/${id}`, organizer)
            .then((res) => {
                navigate('/organizer');
            });
    }

    const deleteOrganizerData = async () => {
        deleteDataUsingApi(`/organizer/${id}`, organizer)
            .then((res) => {
                navigate('/organizer');
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
                                    value={organizer[formitem.name]}
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
                        <Button variant="contained" onClick={() => editOrganizerData()}>Edit Data</Button>
                    ) : data?.action.action === 'delete' ? (
                        <Button variant="contained" onClick={() => deleteOrganizerData()}>Delete Organizer</Button>
                    ): (
                            ""
                        )}

                </Item>
            </Grid>
        </Grid>
    )
}

export default OrganizerForm