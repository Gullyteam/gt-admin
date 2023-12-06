import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState } from 'react';
import OrganizerTable from 'src/components/forms/theme-elements/organizer/OrganizerTable';

// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';



const OrganizerList = () => {


    const { data,loading }= useFetchAnother(`/admin/organizer`);

    console.log(data);


    const tableTitle =[{title:"Name"},{title:"Contact"},{title:"Email"},{title:"Location"},{title:"Game Type"},{title:"Tournament Name"},{title:"Start Date & Time"},{title:"End Date & Time"},{title:"Tournament Location"},{title:"Tournament Fees"}]

    const tableBody =[{field:"nickName"},{field:"phoneNumber"},{field:"email"},{field:"location"},{field:"gameTypeName"},{field:"tournamentName"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},{field:"selectLocation"},{field:"amount"}]
  return (
    
    <PageContainer title="Organizer List" description="this is Sample page">

    <DashboardCard title="Organizer List" >
   
      <Typography>Organizer Page</Typography>

      <OrganizerTable data={data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true}/>
      
    </DashboardCard>
  </PageContainer>
  )
}

export default OrganizerList
