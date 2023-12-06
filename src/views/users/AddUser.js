import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const AddUser = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page" >

    <DashboardCard title="Users List" addButton="Add User" addurl="add">
   
      <Typography>Users Page</Typography>
      
    </DashboardCard>
  </PageContainer>
  )
}

export default AddUser