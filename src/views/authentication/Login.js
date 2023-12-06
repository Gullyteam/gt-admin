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

const Login2 = () => {

    //Intiate Navigate
    let navigate = useNavigate();

  //Form Intial Value
  const intialvalue = {
    email: "",
    password: ""
  }

  const login = () => {
    loginApi('/admin/login', logindata)
      .then((res) => {
          if(res?.data?.status == true){
            const token = res?.data?.data?.token
            //put the token in local Storage
            localStorage.setItem('authToken',token)
            localStorage.setItem('email',res?.data?.data?.email)
            localStorage.setItem('role',res?.data?.data?.role)
            navigate('/dashboard');

          }else{
            toast.error("Something went wrong");
          }
      });
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
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                  <CustomTextField id="username" name="email" variant="outlined" fullWidth onChange={(e) => onValueChange(e)} />
                </Box>
                <Box mt="25px">
                  <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                  <CustomTextField id="password" type="password" name="password" variant="outlined" fullWidth onChange={(e) => onValueChange(e)} />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remeber this Device"
                    />
                  </FormGroup>
                  <Typography
                    component={Link}
                    to="/auth/forgot"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Forgot Password ?
                  </Typography>
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
                  Sign In
                </Button>
              </Box>

            </Card>
          </Grid>
        </Grid>
        <ToastContainer />
      </Box>
    </PageContainer>
  );
};

export default Login2;
