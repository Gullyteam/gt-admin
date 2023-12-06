import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Add_SubAdmin from 'src/components/forms/theme-elements/sub_admin/Add_SubAdmin';

//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import {  FormGroup, FormControl, Grid } from '@mui/material';

const AddSubAdmin = (action) => {

    const { id } = useParams();
//   const { data, loading } = useFetchAnother(`/organizer`);


  const Formdata = [
    { helperText: "Please Add Email Here", name: "email",type:"email" },
    { helperText: "Please Add Password Here", name: "password",type:"password" },
    { helperText: "Please Add FirstName Here", name: "firstname",type:"text" },
    { helperText: "Please Add LastName Here", name: "lastname",type:"text" },
    { helperText: "Please Add Contact Number Here", name:"phone" },
   
    
  ]

  return (
    <PageContainer title="SubAdmin ADD" description="this is Sample page">

      <DashboardCard title="SubAdmin ADD" >

        <FormGroup>
          <FormControl>
            <Add_SubAdmin data={Formdata} action={action} />
          </FormControl>
        </FormGroup>

      </DashboardCard>
    </PageContainer>
  )
}

export default AddSubAdmin