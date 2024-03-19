import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const Users = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(2); // Initial page

    // fetch all users data from  
    const { data,loading }= useFetch(`/admin/getAllUser/${currentPage}/${rowsPerPage}`);

  
    const tableTitle =[{title:"Sr.No."},{title:"User Id"},{title:"Image"},{title:"Name"},{title:"Email"},{title:"Phone"},{title:"Location"},{title:"Registration_Date"},{title:"Status"}]

    const tableBody =[{field:"_id"},{field:"profilePhoto"},{field:"fullName"},{field:"email"},{field:"phoneNumber"},{field:"locations"},{field:"registrationDate"},{field:"banStatus"},]

    useEffect(() => {
      // Call your API here using the currentPage value
      // Update the state with the fetched data
      // const { data, loading } = useFetch(`/admin`);
      //console.log("hello world",currentPage);
    }, [currentPage, data, loading]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    const handleDataFromModel=(Data)=>{
      console.log(Data);
    }



  return (
    <PageContainer title="Sample Page" description="this is Sample page" >

      <DashboardCard title="Users List" >
     
        <Typography>Users Page</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={false} onPageChange={handlePageChange} onData={handleDataFromModel}  />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default Users