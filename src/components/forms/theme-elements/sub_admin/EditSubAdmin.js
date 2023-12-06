import React from 'react'
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField, Select, useTheme, OutlinedInput, MenuItem, InputLabel, FormControl } from '@mui/material';
import { addDataUsingApi, deleteDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';

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




const EditSubAdmin = (data) => {

    //Intiate Navigate
    const theme = useTheme();

    let navigate = useNavigate();
    const { id } = useParams();

    function getStyles(name, adminRights, theme) {
        return {
            fontWeight:
                adminRights.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    //Form Intial Value
    const intialvalue = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "sub-admin",
        rights: "",

    }

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

 
    
    //UseState For store Form Data
    const [subadmin, setsubadmin] = useState(intialvalue);


    //For Data Insert in to Variable comming fromdata.
    const onValueChange = (e) => {

        // If the field is 'rights', split the input value into an array
        const value = e.target.name === 'rights' ? e.target.value.split(',').map(item => item.trim()) : e.target.value;

        if (e.target.name === 'rights') {
            setsubadmin({ ...subadmin, [e.target.name]: [e.target.value] })
        } else {
            setsubadmin({ ...subadmin, [e.target.name]: e.target.value })
        }

    }



    // Use useEffect to set subadmin data when data becomes available
    useEffect(() => {
        if (data?.data?.data) {
            setsubadmin(data.data.data);
            setadminRights(data?.data?.data?.rights);   
        }
    }, [data]);

    useEffect(() => {
        setsubadmin({ ...subadmin, 'rights': adminRights })   
    
    }, [adminRights])

    console.log(subadmin)

    const editSubAdminData = async () => {
        addDataUsingApi('/admin/add-member', subadmin)
                .then((res) => {
                    console.log(res.data)
                    //navigate('/subadmin');

                });
    }

    const deleteSubAdminData = async () => {
        deleteDataUsingApi(`/admin/remove-rights/${id}`, subadmin)
            .then((res) => {
                navigate('/subadmin');
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
                                    value={subadmin[formitem.name]}
                                    onChange={(e) => onValueChange(e)}
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

                            {data?.action.action === 'edit' ? (
                                <Button variant="contained" onClick={() => editSubAdminData()}>Edit Data</Button>
                            ) : data?.action.action === 'delete' ? (
                                <Button variant="contained" onClick={() => deleteSubAdminData()}>Delete subadmin</Button>
                            ) : (
                                ""
                            )}

                        </Item>
                    </Grid>
            </Grid>
            )
}

            export default EditSubAdmin