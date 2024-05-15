import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Add_Banner from 'src/components/forms/theme-elements/banner/Add_banner';

//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import {  FormGroup, FormControl, Grid } from '@mui/material';

const AddBanner = (action) => {

    const { id } = useParams();
//   const { data, loading } = useFetchAnother(`/organizer`);


  const Formdata = [
    { helperText: "Please Add Title Here", name: "title",type:"text" },
    { helperText: "Please Add redirect Link Here", name: "link",type:"text" },
    { helperText: "Please Add Image Here", name: "imageUrl",type:"file" },
    
  ]

  return (
    <PageContainer title="Banner ADD" description="this is Sample page">

      <DashboardCard title="Banner ADD"  >

        <FormGroup>
          <FormControl>
            <Add_Banner data={Formdata} action={action} />
          </FormControl>
        </FormGroup>

      </DashboardCard>
    </PageContainer>
  )
}

export default AddBanner