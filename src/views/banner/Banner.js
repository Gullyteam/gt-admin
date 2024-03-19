import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditBanner from 'src/components/forms/theme-elements/banner/EditBanner';
//Navigation
 import { useParams } from 'react-router-dom';
//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';
import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const Banner = (action) => {

const {id} = useParams();

const action_status= action?.action;

const { data,loading }= useFetchAnother(`/admin/getBannerById/${id}`);

const Formdata = [
  { helperText: "Please Add Title Here", name: "title",type:"text" },
    { helperText: "Please Add Redirect link Here", name: "link",type:"text" },
    { helperText: "Please Add Image Here", name: "imageUrl",type:"file" },
 
]

  return (
    <PageContainer title="Banner ADD" description="this is Sample page">

    <DashboardCard title="Banner ADD" >

      <FormGroup>
        <FormControl>
          <EditBanner  Formdata={Formdata} loading={loading} data={data} action={action}/>
        </FormControl>
      </FormGroup>

    </DashboardCard>
  </PageContainer>
  )
}

export default Banner