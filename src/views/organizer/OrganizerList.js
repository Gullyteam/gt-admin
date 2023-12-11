import React from 'react'
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
import OrganizerTable from 'src/components/forms/theme-elements/organizer/OrganizerTable';

// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';



const OrganizerList = () => {

  const rowsPerPage=2;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page
  
    const { data,loading }= useFetchAnother(`/admin/organizer?page=${currentPage + 1}&pageSize=${rowsPerPage}`);

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };


    const tableTitle =[{title:"Name"},{title:"Contact"},{title:"Email"},{title:"Location"},{title:"Game Type"},{title:"Tournament Name"},{title:"Start Date & Time"},{title:"End Date & Time"},{title:"Tournament Location"},{title:"Tournament Fees"}]

    const tableBody =[{field:"nickName"},{field:"phoneNumber"},{field:"email"},{field:"location"},{field:"gameTypeName"},{field:"tournamentName"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},{field:"selectLocation"},{field:"amount"}]
  return (
    
    <PageContainer title="Organizer List" description="this is Sample page">

    <DashboardCard title="Organizer List" >
   
      <Typography>Organizer Page</Typography>

      <OrganizerTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange}/>
      
    </DashboardCard>
  </PageContainer>
  )
}

export default OrganizerList
