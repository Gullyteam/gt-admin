import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import AddOrganizer from 'src/components/forms/theme-elements/organizer/AddOrganizer';

//Navigation
import { useParams } from 'react-router-dom';
//useFetchAnother
// import useFetchAnother from 'src/hooks/useFetchAnother';
import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';


const Organizer = (action) => {

  const { id } = useParams();
  // const { data, loading } = useFetchAnother(`/organizer`);


  const Formdata = [
    { helperText: "Please Add Name Here", name: "name", type:"text" },
    { helperText: "Please Add Contact Number Here", name: "contact",type:"number" },
    { helperText: "Please Add Email Here", name: "email",type:"email" },
    { helperText: "Please Add Location Here", name: "location",type:"text" },
    { helperText: "Please Add Game Here", name: "game_name",type:"text" },
    { helperText: "Please Add Tournament Name Here", name: "tournament_name",type:"text" },
    { helperText: "Please Add Tournament Location Here", name: "tournament_location",type:"text" },
    { helperText: "Please Add Tournament Fees", name: "tournament_fees",type:"number" }
  ]

  return (
    <PageContainer title="Organizer ADD" description="this is Sample page">

      <DashboardCard title="Organizer ADD" >

        <FormGroup>
          <FormControl>
            <AddOrganizer data={Formdata} action={action} />
          </FormControl>
        </FormGroup>

      </DashboardCard>
    </PageContainer>
  )
}

export default Organizer