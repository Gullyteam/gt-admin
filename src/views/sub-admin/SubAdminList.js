import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useState, useEffect } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const SubAdmin = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

    //object for passing the Table header
    const tableTitle = [
      { title: "FirstName" },
      { title: "LastName" },
      { title: "Email" },
      { title: "Phone" },
      { title: "action" },
      { title: "Options" }
    ]

    //object for passing the Table body 
    const tableBody = [
      { field: "firstname" },
      { field: "lastname" },
      { field: "email" },
      { field: "phoneNumber" },
      { field: "rights" }
    ]

  const { data, loading } = useFetch(`/admin/getAllSubAdmin/${currentPage}/${rowsPerPage}`);
  useEffect(() => {
    // Call your API here using the currentPage value
    // Update the state with the fetched data
    // const { data, loading } = useFetch(`/admin`);
    //console.log("hello world",currentPage);
  }, [currentPage, data, loading]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  return (
    <PageContainer title="SubAdmin Page" description="this is Sample page" >

      <DashboardCard title="SubAdmin List" addButton="Add SubAdmin" addurl="add">

        <Typography>SubAdmin Page</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange} />

      </DashboardCard>
    </PageContainer>
  )
}

export default SubAdmin