import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditFessOffer from 'src/components/forms/theme-elements/feesoffer/EditFessOffer';
//Navigation
 import { useParams } from 'react-router-dom';
//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';
import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const FessOffer = (action) => {

const {id} = useParams();

const action_status= action?.action;

const { data,loading }= useFetchAnother(`/admin/fessoffer/${id}`);

const Formdata = [
  { helperText: "Please Add Fees Here", name: "fess", type:"number" },
  { helperText: "Please Add Offer Here", name: "offer",type:"number" },
 
]

  return (
    <PageContainer title="Organizer ADD" description="this is Sample page">

    <DashboardCard title="Organizer ADD" >

      <FormGroup>
        <FormControl>
          <EditFessOffer  Formdata={Formdata} loading={loading} data={data} action={action}/>
        </FormControl>
      </FormGroup>

    </DashboardCard>
  </PageContainer>
  )
}

export default FessOffer