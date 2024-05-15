import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import TournamentForm from 'src/components/forms/theme-elements/organizer/Tournament';

//Navigation
 import { useParams } from 'react-router-dom';

//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';

import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const Tournament = (action) => {
    const {id} = useParams();

    const action_status= action?.action;
    
    
    const { data,loading }= useFetchAnother(`/admin/get-tournament/6576d8cf066ef891b19c97aa`);
    
    console.log(data);
    
    
      return (
        <PageContainer title="Organizer ADD" description="this is Sample page">
    
          <DashboardCard title="Organizer ADD" >
    
            <FormGroup>
              <FormControl>
                <TournamentForm   loading={loading} data={data} action={action}/>
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}

export default Tournament