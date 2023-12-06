import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState } from 'react';
import useFetchAnother from 'src/hooks/useFetchAnother';
import CustomTable from 'src/components/table/CustomTable';
import FessOfferComponent from 'src/components/forms/theme-elements/feesoffer/FessOfferComponent'

const FessOffer = () => {
    // fetch all users data from  
    const { data,loading }= useFetchAnother(`/admin/fessoffer`);


    const tableTitle =[{title:"Fees"},{title:"Offer"},{title:"FinalPrice"},{title:"Action"}]

    const tableBody =[{field:"fess"},{field:"offer"},{field:"finalPrice"}]

  return (
    <PageContainer title="Sample Page" description="this is Sample page" >

      <DashboardCard title="Fees And Offer" addButton="Add Fees and Offer" addurl="add" >
     
        <Typography>Fess And Offer</Typography>

        <CustomTable data={data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default FessOffer