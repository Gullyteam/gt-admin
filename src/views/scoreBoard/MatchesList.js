import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
 import MatchesCard from 'src/components/forms/theme-elements/scoreboard/MatchesCard';

// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';
import { useParams } from 'react-router';



const MatchesList = () => {
    const { id } = useParams();
    const { data,loading }= useFetchAnother(`/admin/getMatchesByTournamentId/${id}`);

// console.log("organizer",data);

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [ data, loading]);
  

    const tableTitle =[{title:"Sr.No"},{title:"Organizer_Name"},{title:"Contact"},{title:"Email"},{title:"Tournament_Name"},{title:"Fees"},{title:"Tournament_Address"},{title:"StartDate_Time"},{title:"EndDate_Time"},{title:"Action"}]

    const tableBody =[{field:"fullName"},{field:"phoneNumber"},{field:"email"},{field:"tournamentName"},{field:"fees"},{field:"stadiumAddress"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},]
  return (
    
    <PageContainer title="Match List" description="this is Sample page">

    <DashboardCard title="Match List" >

      <MatchesCard data={data?.data} totalcount={data?.count} loading={loading}  editoption={true} />
      
    </DashboardCard>
  </PageContainer>
  )
}

export default MatchesList
