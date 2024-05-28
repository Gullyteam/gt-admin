import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
 import MatchHistory from 'src/components/forms/theme-elements/organizer/MatchHistory';
// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';
import { useParams } from 'react-router';



const Tournament = () => {
    const { id } = useParams();
    const { data,loading }= useFetchAnother(`/admin/getMatchesHistoryByTournamentId/${id}`);

// console.log("organizer",data);

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [ data, loading]);
  

    const tableTitle =[{title:"Sr.No"},{title:"Name"},{title:"Contact"},{title:"Email"},{title:"Game Type"},{title:"Tournament Name"},{title:"StartDate_Time"},{title:"EndDate_Time"},{title:"Tournament Location"},{title:"Tournament Fees"},{title:"payment"},{title:"Tournament History"},{title:"Action"}]

    const tableBody =[{field:"fullName"},{field:"phoneNumber"},{field:"email"},{field:"gameType"},{field:"tournamentName"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},{field:"stadiumAddress"},{field:"fees"}, {field:"paymentView"}, {field:"tournamentView"}]
  return (
    
    <PageContainer title="Match List" description="this is Sample page">

    <DashboardCard title="Match List" >

      <MatchHistory data={data?.data} totalcount={data?.count} loading={loading}  editoption={true} />
      
    </DashboardCard>
  </PageContainer>
  )
}

export default Tournament
