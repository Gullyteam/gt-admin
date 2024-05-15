import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const Helpdesklist = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

    // fetch all users data from  
    const { data,loading }= useFetch(`/admin/getHelpdesk/${currentPage}/${rowsPerPage}`);

    const tableTitle =[{title:"Sr.No"},{title:"UserName"},{title:"Email"},{title:"issue"},{title:"Date"},{title:"updatedAt"},{title:"Status"},{title:"Action"}]

    const tableBody =[{field:"fullName"},{field:"email"},{field:"issue"},{field:"date"},{field:"updatedAt"},{field:"status"},]

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

console.log(data)
  return (
    <PageContainer title="HelpDesk Page" description="this is HelpDesk page" >

      <DashboardCard title="HelpDesk List" >
     
        <Typography>HelpDesk Page</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default Helpdesklist