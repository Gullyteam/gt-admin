import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { useState, useEffect } from 'react';
import { loginApi } from 'src/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  //Intiate Navigate
  let navigate = useNavigate();

  //Form Intial Value
  const intialvalue = {
    email: "",
   
  }

  const login = () => {
    loginApi('/admin/forgot-password', logindata)
      .then((res) => {
        console.log(res);
          //  if(res?.data['success'] == true ){
          //   navigate('/auth');
          // }else{
          //   toast.error("Something went wrong");
          // }
      });
  };

  //UseState For store Form Data
  const [logindata, setlogindata] = useState(intialvalue);

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  return (
    <PageContainer title="Forgot" description="this is Forgot Password page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>

              <Stack>
                <Box>
                  <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Email</Typography>
                  <CustomTextField id="username" name="email" variant="outlined" fullWidth onChange={(e) => onValueChange(e)} />
                </Box>
                <Box mt="25px">
                  <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Mail is send to on your email, please click on link to edit Password.</Typography>
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                  
                  
                </Stack>
              </Stack>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={() => login()}
                  type="submit"

                >
                  Submit
                </Button>
              </Box>

            </Card>
          </Grid>
        </Grid>
        <ToastContainer />
      </Box>
    </PageContainer>
  );
}

export default ForgotPassword