import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect } from 'react';
import useFetchAnother from 'src/hooks/useFetchAnother';
import CustomTable from 'src/components/table/CustomTable';

const TransactionList = () => {

  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

    // fetch all users data from  
    const { data,loading }= useFetchAnother(`/admin/transaction/${currentPage}/${rowsPerPage}`);

    const tableTitle =[{title:"Sr.No"},{title:"Transaction Id"},{title:"Email"},{title:"Tournament Name"},{title:"WithoutCoupon"},{title:"Coupon Use"},{title:"Amount"},{title:"UpdatedAt"},{title:"Status"}]

    const tableBody =[{field:"orderId"},{field:"email"},{field:"tournamentName"},{field:"amountWithoutCoupon"},{field:"coupon"},{field:"amount"},{field:"updatedAt"},{field:"status"},]

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
    <PageContainer title="Transaction Page" description="this is Transaction page" >

      <DashboardCard title="Transaction List" >
     
        <Typography>Transaction Page</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={false} onPageChange={handlePageChange} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default TransactionList