import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const BannerList = () => {
  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

    // fetch all users data from  
    const { data,loading }= useFetch(`/admin/getBanner/${currentPage}/${rowsPerPage}`);

    const tableTitle =[{title:"Sr.No"},{title:"Image"},,{title:"Title"},{title:"link"},{title:"Date"},{title:"Action"}]

    const tableBody =[{field:"imageUrl"},,{field:"title"},{field:"link"},{field:"createdAt"}]

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
    <PageContainer title="Banner Page" description="this is Banner page" >

      <DashboardCard title="Banner List"  addButton="Banner Add" addurl="add">
     
        <Typography>Banner Page</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default BannerList