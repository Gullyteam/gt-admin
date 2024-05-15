import * as React from 'react';
import { Typography, Modal, Button, Box, Stack, InputLabel, styled, Paper, MenuItem, Select } from '@mui/material';
import { addDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';

//import Usestate
import { useState } from 'react';

//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModal = (data) => {

    let backgroundColor, textColor, borderRadius;

  if (data.status === 'ban') {
    backgroundColor = '#d41717';
  } else if (data.status === 'active') {
    backgroundColor = '#59ce59';
  } else if (data.status === 'inactive') {
    backgroundColor = '#ff661a';
  }

  const buttonStyle = {
    color: 'white',
    borderRadius:'10px',
    backgroundColor,
  };

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [action, setAction] = React.useState('');
    const [duration, setDuration] = React.useState('');

    const handleChange = (event) => {
        setAction(event.target.value);
    };
    const handleChange2 = (event) => {
        setDuration(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const userAction={
            action: action,
            duration: duration
        }
        actionUser(userAction);
        
    };

    const sendDataToParent = () => {
        const Data = 'Data from CustomModel';
        data.onData(Data); // Calling the callback function to send data to parent
      };

 
    const actionUser = async (userAction) => {
        console.log(userAction)
        addDataUsingApi(`/admin/editUserStatus/${data.id}`, userAction)
                .then((res) => {
                    console.log("hello:::",res.data)
                    setOpen(false)
                    
                });
                navigate('/users');
    }



    return (
        <div>
            <Button onClick={handleOpen} style={buttonStyle}>{data.status}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Action
                        </Typography>
                        <Item >
                            <InputLabel id="demo-simple-select-label" fullWidth>Action</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={action}
                                label="action"
                                name="action"
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={'ban'}>Banned</MenuItem>
                                <MenuItem value={'inactive'}>Inactive</MenuItem>
                                <MenuItem value={'active'}>Active</MenuItem>
                            </Select>
                        </Item>
                        {
                            action === 'ban' ? (
                                <Item >
                                    <InputLabel id="demo-simple-select-label" fullWidth>Duration</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={duration}
                                        label="Age"
                                        name="duration"
                                        onChange={handleChange2}
                                        fullWidth
                                    >
                                        <MenuItem value={'24hr'}>24hr</MenuItem>
                                        <MenuItem value={'7day'}>7day</MenuItem>
                                        <MenuItem value={'1month'}>1month</MenuItem>
                                    </Select>
                                </Item>
                            ) : (
                                ""
                            )
                        }
                          <Item ><Button variant="contained" type="submit">Submit</Button></Item>
                         
                          {/* <button onClick={sendDataToParent}>Send Data to Users</button> */}
                    </Box>
                </form>
            </Modal>
        </div>
    );
}

export default CustomModal