import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { useState, useEffect } from 'react';
import { loginApi } from 'src/utils/api';
//Navigation
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  //Intiate Navigate
  let navigate = useNavigate();
  const {token} = useParams();

  //Form Intial Value
  const intialvalue = {
    password: "",
    confirmpassword: ""
  }

  const login = () => {

     // Check if password and confirmPassword match
     if (logindata.password !== logindata.confirmpassword) {
        // Passwords don't match, handle accordingly (e.g., show an error message)
        toast.error("Passwords do not match");
        return;
      }else{
        loginApi(`/admin/reset-password/${token}`, logindata)
        .then((res) => {
  
           if(res?.data['success'] == true ){
            navigate('/auth');
           }
            else{
              toast.error("Something went wrong");
            }
        });
      }

    
  };

  //UseState For store Form Data
  const [logindata, setlogindata] = useState(intialvalue);

  //For Data Insert in to Variable comming fromdata.
  const onValueChange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  return (
    <PageContainer title="Login" description="this is Login page">
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
                    fontWeight={600} component="label" htmlFor='username' mb="5px">New Password</Typography>
                  <CustomTextField id="username" name="password" variant="outlined" fullWidth onChange={(e) => onValueChange(e)} />
                </Box>
                <Box mt="25px">
                  <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Confirm Password</Typography>
                  <CustomTextField id="password" type="confirmpassword" name="confirmpassword" variant="outlined" fullWidth onChange={(e) => onValueChange(e)} />
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

export default ResetPassword