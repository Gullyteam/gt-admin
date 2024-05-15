import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditHelpDesk from 'src/components/forms/theme-elements/helpdesk/EditHelpDesk';

//Navigation
 import { useParams } from 'react-router-dom';

//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';

import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const HelpDesk = (action) => {
    const {id} = useParams();

    const action_status= action?.action;
    
    
    const { data,loading }= useFetchAnother(`/admin/getHelpdeskById/${id}`);
    
    console.log("data",data);

      const Formdata = [
        { helperText: "FullName", name:"fullName"},
        { helperText: " Email ", name:"email"  },
        { helperText: "Issue", name:"issue"  },
        { helperText: "Issue Raise at ", name:"date" },
        { helperText: "Response Updated at ", name:"updatedAt" },
        { helperText: "Response", name:"response"  },
      ]
    
      return (
        <PageContainer title="HelpDesk Edit" description="this is Sample page">
    
          <DashboardCard title="HelpDesk Edit" >
    
            <FormGroup>
              <FormControl>
                <EditHelpDesk  Formdata={Formdata} loading={loading} data={data} action={action}/>
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}


export default HelpDesk