import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
 import ScoreBoardtable from 'src/components/forms/theme-elements/scoreboard/ScoreBoardTable';

// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';



const OrganizerList = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page
  
    const { data,loading }= useFetchAnother(`/admin/getAllTournamentLive/${currentPage}/${rowsPerPage}`);

// console.log("organizer",data);

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };


    const tableTitle =[{title:"Sr.No"},{title:"Organizer_Name"},{title:"Contact"},{title:"Email"},{title:"Tournament_Name"},{title:"Fees"},{title:"Tournament_Address"},{title:"StartDate_Time"},{title:"EndDate_Time"},{title:"Action"}]

    const tableBody =[{field:"fullName"},{field:"phoneNumber"},{field:"email"},{field:"tournamentName"},{field:"fees"},{field:"stadiumAddress"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},]
  return (
    
    <PageContainer title="Live Tournament List" description="this is Sample page">

    <DashboardCard title="Live Tournament List" >
   
      <Typography>Live Tournament Page</Typography>

      <ScoreBoardtable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange}/>
      
    </DashboardCard>
  </PageContainer>
  )
}

export default OrganizerList
