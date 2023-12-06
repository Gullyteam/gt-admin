import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const SubAdmin = () => {


    const { data,loading }= useFetch(`/admin`);
    console.log(data)
    const tableTitle =[{title:"FirstName"},{title:"LastName"},{title:"Email"},{title:"Phone"},{title:"action"},{title:"Options"}]

    const tableBody =[{field:"firstname"},{field:"lastname"},{field:"email"},{title:"Phone"},{field:"rights"}]


  return (
    <PageContainer title="SubAdmin Page" description="this is Sample page" >

      <DashboardCard title="SubAdmin List" addButton="Add SubAdmin" addurl="add">
     
        <Typography>SubAdmin Page</Typography>

        <CustomTable data={data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true}/>
        
      </DashboardCard>
    </PageContainer>
  )
}

export default SubAdmin