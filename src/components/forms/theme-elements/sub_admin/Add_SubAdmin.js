import React from 'react'
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField, Select, useTheme, OutlinedInput, MenuItem, InputLabel, FormControl } from '@mui/material';

import { addDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//stying for multiple selections options
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, adminRights, theme) {
    return {
        fontWeight:
            adminRights.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


//list of Subadmin rights
const rights = [
    'Users', 'Organizer', 'Addsports', 'Fess&offer', 'Notification', 'ContentManager', 'Helpdesk', 'subAdmin', 'Reporting'
];

//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Add_SubAdmin = (data) => {

    //Intiate Navigate
    let navigate = useNavigate();
    const { id } = useParams();
    //Intiate Navigate
    const theme = useTheme();

    //Form Intial Value
    const intialvalue = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "subAdmin",
        rights: "",

    }


    //UseState For store Form Data
    const [subadmin, setsubadmin] = useState(intialvalue);

    const [adminRights, setadminRights] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setadminRights(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {
        setsubadmin({ ...subadmin, 'rights': adminRights })   
    
    }, [adminRights])
    

    //For Data Insert in to Variable comming fromdata.
    const onValueChange = (e) => {
            setsubadmin({ ...subadmin, [e.target.name]: e.target.value })       
    }


    const addsubadminData = async () => {
        if (subadmin.email !== "" && subadmin.password !== "" && subadmin.role !== "" && subadmin.rights && Array.isArray(subadmin.rights) && subadmin.rights.length > 0) {
            addDataUsingApi('/admin/add-member', subadmin)
                .then((res) => {
                    console.log(res.data)
                    navigate('/subadmin');

                });
        } else {
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
                                // error={!subadmin[formitem?.name]}

                                />


                            </Item>

                        </Grid>
                    )
                })
            }

            <Grid item xs={6}>
                <Item>
                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Rights</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={adminRights}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                            name='rights'
                        >
                            {rights.map((right) => (
                                <MenuItem
                                    key={right}
                                    value={right}
                                    style={getStyles(right, adminRights, theme)}
                                >
                                    {right}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Item>
            </Grid>

            <Grid item xs={12}>
                <Item>
                    <Button variant="contained" onClick={() => addsubadminData()}>Submit</Button>
                </Item>
            </Grid>
            <ToastContainer />
        </Grid>
    )
}

export default Add_SubAdmin