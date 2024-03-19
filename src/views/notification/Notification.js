import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditNotification from 'src/components/forms/theme-elements/notification/EditNotification';
//Navigation
 import { useParams } from 'react-router-dom';
//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';
import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const Notification = (action) => {

const {id} = useParams();

const action_status= action?.action;

const { data,loading }= useFetchAnother(`/admin/getNotificationById/${id}`);

const Formdata = [
  { helperText: "Please Add Title Here", name: "title",type:"text" },
    { helperText: "Please Add Message Here", name: "message",type:"text" },
    { helperText: "Please Add Image Here", name: "imageUrl",type:"file" },
 
]

  return (
    <PageContainer title="Notification ADD" description="this is Sample page">

    <DashboardCard title="Notification ADD" >

      <FormGroup>
        <FormControl>
          <EditNotification  Formdata={Formdata} loading={loading} data={data} action={action}/>
        </FormControl>
      </FormGroup>

    </DashboardCard>
  </PageContainer>
  )
}

export default Notification