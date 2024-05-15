import React from 'react'
//import Material MUI Component
import { Box, Button, styled, Grid, Paper, Typography, Stack, InputLabel, FormGroup, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

//import Component
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import CustomTable from 'src/components/table/CustomTable';

//Api
import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';

//import Usestate
import { useState,useEffect } from 'react';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddSport = () => {

  const intialvalue = {
    sportname: '',
    sporticon: ''
  }

  const [sport, setaddsport] = useState(intialvalue)

  const tableTitle =[{title:"Sport Name"},{title:"Image"}]

  const tableBody =[{field:"sportname"},{field:"sporticon"}]

  const { data,loading }= useFetchAnother(`/sports`);




  const onValueChange = (e) => {
    
    setaddsport({...sport,[e.target.name]:e.target.value})
  }

  const addSportData = async() => {
    addDataUsingApi('/sports',sport)
   .then((res) => {
    // console.log(res.data)
  });
  }


  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Add Sport">
        <Grid container spacing={2} direction="column" style={{ width: "600px", marginRight: "10px" }} >

          <FormGroup>
            <FormControl>
              <Item>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Required"
                  helperText="Please Add Sport Name Here"
                  name='sportname'
                  onChange={(e) => onValueChange(e)}
                />
              </Item>

              <Item>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6} style={{ margin: "10px 0px" }} >
                  <Typography>Add Sports Icon</Typography>
                  <Button component="label" variant="contained" >
                    Upload file
                    <VisuallyHiddenInput name='sporticon' type="file" onChange={(e) => onValueChange(e)} />
                  </Button>
                </Stack>
              </Item>

              <Item>
              <Button variant="contained" onClick={()=>addSportData()}>Submit</Button>
              </Item>

            </FormControl>
          </FormGroup>
        </Grid>
      </DashboardCard>
      <DashboardCard>
        {/* Loading Sports list */}
        <CustomTable data={data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} />
      </DashboardCard>
    </PageContainer >
  )
}

export default AddSport