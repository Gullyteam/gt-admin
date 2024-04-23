import React from 'react';
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField, Input } from '@mui/material';
import { addDataUsingApi, deleteDataUsingApi } from 'src/utils/api';
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

const EditNotification = (data) => {
  //Intiate Navigate
  let navigate = useNavigate();
  const { id } = useParams();

  //Form Intial Value
  const intialvalue = {
    title: '',
    message: '',
    image: null,
  };

  //UseState For store Form Data
  const [notification, setNotification] = useState(intialvalue);

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };

  const onImageChange = async (e) => {
    //setNotification({ ...notification, image: e.target.files[0] });
    try {
      const file = e.target.files[0];

      if (file) {
        const base64String = await convertImageToBase64(file);
        setNotification({ ...notification, image: base64String });
      }
    } catch (error) {
      console.error('Error converting image to base64:', error);
      // Handle the error as needed
    }
  };

  // Use useEffect to set notification data when data becomes available
  useEffect(() => {
    if (data?.data?.data) {
      setNotification(data.data.data);
    }
  }, [data]);

  const editNotificationData = async () => {
    if (notification.title.trim() !== '' && notification.message.trim() !== '') {
      try {
        console.log('notify', notification);
        const res = await addDataUsingApi(`/admin/updateNotification/${id}`, notification);
        console.log(res.data);
        navigate('/notification');
      } catch (error) {
        toast.error('Failed to add notification. Please try again.');
      }
    } else {
      toast.error('Please fill data correctly');
    }
  };

  //convert Image to base64 string
  function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1]; // Extract the base64 string (omit the data URL prefix)
        const mimeType = file.type;
        resolve(`data:${mimeType};base64,${base64String}`);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    });
  }

  const deleteNotificationData = async () => {
    deleteDataUsingApi(`/notification/${id}`, notification).then((res) => {
      navigate('/notification');
    });
  };

  return (
    <Grid container spacing={2}>
      {data?.Formdata?.map((formitem, key) => {
        return (
          // <Grid item xs={6}>
          //     <Item>
          //         <TextField
          //             key={formitem?.name}
          //             required
          //             fullWidth
          //             id="outlined-required"
          //             helperText={formitem?.helperText}
          //             name={formitem?.name}
          //             value={notification[formitem.name]}
          //             onChange={(e) => onValueChange(e)}
          //         />

          //     </Item>

          // </Grid>

          <Grid item xs={6} key={key}>
            <Item>
              {formitem.type === 'file' ? (
                <Input
                  required
                  fullWidth
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                  style={{ ...buttonStyle, ...{ marginTop: '10px' } }}
                />
              ) : (
                <TextField
                  key={formitem?.name}
                  required
                  fullWidth
                  id="outlined-required"
                  helperText={formitem?.helperText}
                  name={formitem?.name}
                  value={notification[formitem.name]}
                  onChange={(e) => onValueChange(e)}
                />
              )}
            </Item>
          </Grid>
        );
      })}

      <Grid item xs={12}>
        <Item>
          {data?.action.action === 'edit' ? (
            <Button variant="contained" onClick={() => editNotificationData()}>
              Edit Data
            </Button>
          ) : data?.action.action === 'delete' ? (
            <Button variant="contained" onClick={() => deleteNotificationData()}>
              Delete Organizer
            </Button>
          ) : (
            ''
          )}
        </Item>
      </Grid>
    </Grid>
  );
};

const buttonStyle = {
  padding: '5px 10px',
  textDecoration: 'none',
};

export default EditNotification;