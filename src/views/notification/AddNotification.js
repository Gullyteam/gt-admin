import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Add_Notification from 'src/components/forms/theme-elements/notification/Add_Notification';

//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import {  FormGroup, FormControl, Grid } from '@mui/material';

const AddNotification = (action) => {

    const { id } = useParams();
//   const { data, loading } = useFetchAnother(`/organizer`);


  const Formdata = [
    { helperText: "Please Add Title Here", name: "title",type:"text" },
    { helperText: "Please Add Message Here", name: "message",type:"text" },
    { helperText: "Please Add Image Here", name: "imageUrl",type:"file" },
    
  ]

  return (
    <PageContainer title="Notification ADD" description="this is Sample page">

      <DashboardCard title="Notification ADD"  >

        <FormGroup>
          <FormControl>
            <Add_Notification data={Formdata} action={action} />
          </FormControl>
        </FormGroup>

      </DashboardCard>
    </PageContainer>
  )
}

export default AddNotification