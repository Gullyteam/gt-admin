import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import AddEntryFees from 'src/components/forms/theme-elements/feesentry/AddEntryFees';
//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import { FormGroup, FormControl, Grid } from '@mui/material';

const AddEntryfees = (action) => {
    //const { id } = useParams();
    // const { data, loading } = useFetchAnother(`/organizer`);
  
  
    const Formdata = [
      { helperText: "Initial Team Limit", name: "initialteamLimit", type:"number" },
      { helperText: "End Team Limit", name: "endteamLimit", type:"number" },
      { helperText: "Fees", name: "fees",type:"number" },
     
    ]
  
    return (
        <PageContainer title="Fees Entry ADD" description="this is Sample page">
    
          <DashboardCard title="Fees Entry ADD" >
    
            <FormGroup>
              <FormControl>
                <AddEntryFees data={Formdata} action={action} />
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}

export default AddEntryfees