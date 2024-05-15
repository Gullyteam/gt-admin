import React, { useState } from 'react';
import { styled, Paper, Button, Grid, TextField, Input } from '@mui/material';
import { addDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2), // Increased padding for better aesthetics
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Add_Banner = ({ data }) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    title: '',
    link: '',
    image: null,
  };

  const [banner, setBanner] = useState(initialValues);

  const onValueChange = (e) => {
    setBanner({ ...banner, [e.target.name]: e.target.value });
  };

  const onImageChange = async(e) => {
    //setbanner({ ...banner, image: e.target.files[0] });
    try {
      const file = e.target.files[0];
  
      if (file) {
        const base64String = await convertImageToBase64(file);
        setBanner({ ...banner, image: base64String });
      }
    } catch (error) {
      console.error('Error converting image to base64:', error);
      // Handle the error as needed
    }
  };

  const addBannerData = async () => {
    if (banner.title.trim() !== '' && banner.link.trim() !== '') {

      try {
        console.log("notify",banner)
        const res = await addDataUsingApi('/admin/addbanner', banner);
        console.log(res.data);
        navigate('/banner');
      } catch (error) {
        toast.error('Failed to add banner. Please try again.');
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

  return (
    <Grid container spacing={2}>
      {data?.map((formitem, key) => (
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
                required
                fullWidth
                id="outlined-required"
                type={formitem.type}
                label={formitem.name}
                helperText={formitem.helperText}
                name={formitem.name}
                onChange={onValueChange}
              />
            )}
          </Item>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Item>
          <Button variant="contained" onClick={addBannerData}>
            Submit
          </Button>
        </Item>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

const buttonStyle = {
  padding: '5px 10px',
  textDecoration: 'none',
};

export default Add_Banner;
