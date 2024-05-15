import React from 'react'
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField, Select, MenuItem, InputLabel,FormControl } from '@mui/material';
import { addDataUsingApi, deleteDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';

//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const EditHelpDesk = (data) => {
    //Intiate Navigate
    let navigate = useNavigate();
    const { id } = useParams();


    //Form Intial Value
    const intialvalue = {
        fullName: "",
        phoneNumber: "",
        email: "",
        issue: "",
        date: "",
        response: "",
        status: "Open",
        
    }

    const [statusvalue, setStatus] = React.useState('Open');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
// console.log(statusvalue)
    //UseState For store Form Data
    const [helpdesk, sethelpdesk] = useState(intialvalue);

    //For Data Insert in to Variable comming fromdata.
    const onValueChange = (e) => {
        sethelpdesk({ ...helpdesk, [e.target.name]: e.target.value })
    }



    // Use useEffect to set organizer data when data becomes available
    useEffect(() => {
        if (data?.data?.data) {
            sethelpdesk(data.data.data);
        }
    }, [data]);

    useEffect(() => {
        sethelpdesk({ ...helpdesk, 'status': statusvalue })   
    
    }, [statusvalue])


    const editHelpdeskData = async () => {
       //console.log(helpdesk)
       addDataUsingApi(`/admin/updateHelpdesk/${id}`, helpdesk)
            .then((res) => {
                navigate('/helpdesk');
            });
    }

    const deleteHelpdeskData = async () => {
        deleteDataUsingApi(`/helpdesk/${id}`, helpdesk)
            .then((res) => {
                navigate('/helpdesk');
            });
    }

    const isReadOnlyCondition = (fieldName) => {
        // Your logic to determine when the field should be read-only
        if(fieldName==="response"){
            return false;
        }else{
            return true;
        }
    };


    return (
        <Grid container spacing={2}>

            {
                data?.Formdata?.map((formitem, key) => {
                    const isReadOnly = key < 5;
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
                                    value={helpdesk[formitem.name]}
                                    onChange={(e) => onValueChange(e)}
                                    InputProps={{
                                        readOnly: isReadOnlyCondition(formitem?.name),
                                    }}
                                />
                            </Item>
                        </Grid>

                    )
                })
            }

            <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: 500 }}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={statusvalue}
                        name="status"
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Open'}>Open</MenuItem>
                        <MenuItem value={'Closed'}>Closed</MenuItem>
                        <MenuItem value={'InProgress'}>InProgress</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Item>

                    {data?.action.action === 'edit' ? (
                        <Button variant="contained" onClick={() => editHelpdeskData()}>Edit Data</Button>
                    ) : data?.action.action === 'delete' ? (
                        <Button variant="contained" onClick={() => deleteHelpdeskData()}>Delete Organizer</Button>
                    ) : (
                        ""
                    )}

                </Item>
            </Grid>
        </Grid>
    )
}


export default EditHelpDesk