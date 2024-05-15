import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditEntryFees from 'src/components/forms/theme-elements/feesentry/EditEntryFees';
//Navigation
 import { useParams } from 'react-router-dom';
//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';
 import { addDataUsingApi } from 'src/utils/api';
import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const EntryFees = (action) => {

const {id} = useParams();

const action_status= action?.action;

const { data,loading }= useFetchAnother(`/admin/getEntryFeesById/${id}`);

const Formdata = [
  { helperText: "InitialTeamLimit", name: "initialteamlimit", type:"number" },
  { helperText: "EndTeamLimit", name: "endteamlimit",type:"number" },
  { helperText: "Fees", name: "fees",type:"number" },
]

  return (
    <PageContainer title="Organizer ADDED" description="this is Sample page">

    <DashboardCard title="Organizer Edit" >

      <FormGroup>
        <FormControl>
          <EditEntryFees  Formdata={Formdata} loading={loading} data={data} action={action}/>
        </FormControl>
      </FormGroup>

    </DashboardCard>
  </PageContainer>
  )
}

export default EntryFees