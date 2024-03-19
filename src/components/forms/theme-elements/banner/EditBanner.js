import React from 'react';
//import Usestate
import { useState, useEffect } from 'react';
import { styled, Paper, Button, Grid, TextField, Input, Select, MenuItem, InputLabel,FormControl } from '@mui/material';
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

const EditBanner = (data) => {
  //Intiate Navigate
  let navigate = useNavigate();
  const { id } = useParams();

  //Form Intial Value
  const intialvalue = {
    title: '',
    message: '',
    image: null,
    isActive: true,
  };

  //UseState For store Form Data
  const [banner, setBanner] = useState(intialvalue);

  const [statusvalue, setStatus] = React.useState(true);

  const handleChange = (event) => {
      setStatus(event.target.value);
  };

  console.log("statusvalue",statusvalue)

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setBanner({ ...banner, [e.target.name]: e.target.value });
  };

  const onImageChange = async (e) => {
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

  // Use useEffect to set banner data when data becomes available
  useEffect(() => {
    if (data?.data?.data) {
      setBanner(data.data.data);
    }
  }, [data]);

  useEffect(() => {
    setBanner({ ...banner, 'isActive': statusvalue })   
}, [statusvalue])

  const editBannerData = async () => {
    if (banner.title.trim() !== '' && banner.link.trim() !== '') {
      try {
        console.log('notify', banner);
        const res = await addDataUsingApi(`/admin/updateBanner/${id}`, banner);
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

  const deleteBannerData = async () => {
    deleteDataUsingApi(`/banner/${id}`, banner).then((res) => {
      navigate('/banner');
    });
  };

  return (
    <Grid container spacing={2}>
      {data?.Formdata?.map((formitem, key) => {
        return (
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
                  value={banner[formitem.name]}
                  onChange={(e) => onValueChange(e)}
                />
              )}
            </Item>
          </Grid>
        );
      })}

      <Grid item xs={6}>
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={statusvalue}
            name="isActive"
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>DeActivate</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Item>
          {data?.action.action === 'edit' ? (
            <Button variant="contained" onClick={() => editBannerData()}>
              Edit Data
            </Button>
          ) : data?.action.action === 'delete' ? (
            <Button variant="contained" onClick={() => deleteBannerData()}>
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

export default EditBanner;
