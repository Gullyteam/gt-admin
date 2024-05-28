import React from 'react'
import { Typography,TextField} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState } from 'react';
import OrganizerTable from 'src/components/forms/theme-elements/organizer/OrganizerTable';

// //Api
// import {addDataUsingApi} from "../../utils/api";

//hooks
import useFetchAnother from 'src/hooks/useFetchAnother';



const OrganizerList = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

  //usestate for the search filter
  const [search, setSearch] = useState(''); // Initial it is empty
  
    const { data,loading }= useFetchAnother(`/admin/getAllTournament/${currentPage}/${rowsPerPage}?search=${search}`,search);

// console.log("organizer",data);

    // useEffect(() => {
    //   // Call your API here using the currentPage value
    //   // Update the state with the fetched data
    //   // const { data, loading } = useFetch(`/admin`);
    //   //console.log("hello world",currentPage);
    // }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };


    const tableTitle =[{title:"Sr.No"},{title:"Name"},{title:"Contact"},{title:"Email"},{title:"Game Type"},{title:"Tournament Name"},{title:"StartDate_Time"},{title:"EndDate_Time"},{title:"Tournament Location"},{title:"Tournament Fees"},{title:"payment"},{title:"Tournament History"},{title:"Action"}]

    const tableBody =[{field:"fullName"},{field:"phoneNumber"},{field:"email"},{field:"gameType"},{field:"tournamentName"},{field:"tournamentStartDateTime"},{field:"tournamentEndDateTime"},{field:"stadiumAddress"},{field:"fees"}, {field:"paymentView"}, {field:"tournamentView"}]
  return (
    
    <PageContainer title="Organizer List" description="this is Sample page">

    <DashboardCard title="Organizer List" >
   
      <Typography>Organizer Page</Typography>

      <div style={{ textAlign: 'right' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tournament Name"
          />
          {/* Render your table and pagination component here */}
        </div>

      <OrganizerTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange}/>
      
    </DashboardCard>
  </PageContainer>
  )
}

export default OrganizerList
