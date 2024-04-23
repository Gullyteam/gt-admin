import React from 'react';
import { Typography, TextField } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useState } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const Users = () => {
  const rowsPerPage = process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(2); // Initial page

  //usestate for the search filter
  const [search, setSearch] = useState(''); // Initial it is empty

  // fetch all users data from
  const { data, loading } = useFetch(`/admin/getAllUser/${currentPage}/${rowsPerPage}?search=${search}`,search);

  const tableTitle = [
    { title: 'Sr.No.' },
    { title: 'User Id' },
    { title: 'Image' },
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Phone' },
    { title: 'Location' },
    { title: 'Registration_Date' },
    { title: 'Status' },
  ];

  const tableBody = [
    { field: '_id' },
    { field: 'profilePhoto' },
    { field: 'fullName' },
    { field: 'email' },
    { field: 'phoneNumber' },
    { field: 'locations' },
    { field: 'createdAt' },
    { field: 'banStatus' },
  ];

  // useEffect(() => {

  //   console.log("reloading...");
  // }, [currentPage, data, loading,search]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDataFromModel = (Data) => {
    console.log(Data);
  };


  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Users List">
        <Typography>Users Page</Typography>

        <div style={{ textAlign: 'right' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name or Contact or Email"
          />
          {/* Render your table and pagination component here */}
        </div>

        <CustomTable
          data={data?.data}
          totalcount={data?.count}
          loading={loading}
          tableTitle={tableTitle}
          tableBody={tableBody}
          editoption={false}
          onPageChange={handlePageChange}
          onData={handleDataFromModel}
        />
      </DashboardCard>
    </PageContainer>
  );
};

export default Users;
