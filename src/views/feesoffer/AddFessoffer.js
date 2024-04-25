import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import AddFessOffer from 'src/components/forms/theme-elements/feesoffer/AddFessOffer';

//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import { FormGroup, FormControl, Grid } from '@mui/material';

const AddFessoffer = (action) => {
    const { id } = useParams();
    // const { data, loading } = useFetchAnother(`/organizer`);
  
  
    const Formdata = [
      { helperText: "Coupon Name", name: "couponName", type:"string" },
      { helperText: "Minimum Amount At Coupon Applicable", name: "fees", type:"number" },
      { helperText: "Please Add Discount Here", name: "offer",type:"number" },
     
    ]
  
    return (
        <PageContainer title="Fess And Offer ADD" description="this is Sample page">
    
          <DashboardCard title="Fess And Offer ADD" >
    
            <FormGroup>
              <FormControl>
                <AddFessOffer data={Formdata} action={action} />
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}

export default AddFessoffer