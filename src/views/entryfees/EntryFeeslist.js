import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect} from 'react';
import useFetchAnother from 'src/hooks/useFetchAnother';
import CustomTable from 'src/components/table/CustomTable';
//import FessOfferComponent from 'src/components/forms/theme-elements/feesoffer/FessOfferComponent'

const EntryFees = () => {
  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;

  console.log("rowsperpage",rowsPerPage)
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

  console.log(currentPage, rowsPerPage)

    // fetch all users data from  
    const { data,loading }= useFetchAnother(`/admin/getallEntryFees/`);


    const tableTitle =[{title:"Sr.No"},{title:"Initial Team Limit"},{title:"End Team Limit"},{title:"Fees"},{title:"Created At"},{title:"End Date"},{title:"Action"}]

    const tableBody =[{field:"initialteamLimit"},{field:"endteamLimit"},{field:"fees"},{field:"startDate"},{field:"endDate"}]

    // useEffect(() => {
    //   // Call your API here using the currentPage value
    //   // Update the state with the fetched data
    //   // const { data, loading } = useFetch(`/admin`);
    //   //console.log("hello world",currentPage);
    // }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

  return (
    <PageContainer title="Sample Page" description="this is Sample page" >

      <DashboardCard title="EntryFees" addButton="Add EntryFees" addurl="add" >
     
        <Typography>EntryFees</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default EntryFees