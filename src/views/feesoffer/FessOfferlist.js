import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState,useEffect} from 'react';
import useFetchAnother from 'src/hooks/useFetchAnother';
import CustomTable from 'src/components/table/CustomTable';
import FessOfferComponent from 'src/components/forms/theme-elements/feesoffer/FessOfferComponent'

const FessOffer = () => {
  const rowsPerPage=process.env.REACT_APP_ROWS_PER_PAGE;

  console.log("rowsperpage",rowsPerPage)
  //usestate for the pagination table
  const [currentPage, setCurrentPage] = useState(1); // Initial page

  console.log(currentPage, rowsPerPage)

    // fetch all users data from  
    const { data,loading }= useFetchAnother(`/admin/getCoupon/${currentPage}/${rowsPerPage}`);


    const tableTitle =[{title:"Sr.No"},{title:"Minimum Amount"},{title:"Discount"},{title:"Type"},{title:"Created At"},{title:"Start Date "},{title:"End Date"},{title:"Action"}]

    const tableBody =[{field:"minAmount"},{field:"discount"},{field:"type"},{field:"createdAt"},{field:"startDate"},{field:"endDate"}]

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

      <DashboardCard title="Fees And Offer" addButton="Add Fees and Offer" addurl="add" >
     
        <Typography>Fess And Offer</Typography>

        <CustomTable data={data?.data} totalcount={data?.count} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} onPageChange={handlePageChange} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default FessOffer