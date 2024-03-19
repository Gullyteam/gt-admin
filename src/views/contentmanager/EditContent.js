import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditContentComp from 'src/components/forms/theme-elements/contentManager/EditContentComp';

//Navigation
 import { useParams } from 'react-router-dom';

//useFetchAnother
 import useFetchAnother from 'src/hooks/useFetchAnother';

import {  FormGroup, FormControl } from '@mui/material';

const EditContent = (action) => {
    const {id} = useParams();

    const action_status= action?.action;
    
    
    const { data,loading }= useFetchAnother(`/admin/getContent/${id}`);
    
   
      const Formdata = [
        { helperText: "Please Add Name Here", name:"name"},
        { helperText: "Please Add Contact Number Here", name:"contact"  },
        { helperText: "Please Add Email Here", name:"email"  },
        { helperText: "Please Add Location Here", name:"location"  },
        { helperText: "Please Add Game Here", name:"game_name" },
        { helperText: "Please Add Tournament Name Here", name:"tournament_name"  },
        { helperText: "Please Add Tournament Location Here", name:"tournament_location" },
        { helperText: "Please Add Tournament Fees", name:"tournament_fees" }
      ]
    
      return (
        <PageContainer title="Organizer ADD" description="this is Sample page">
    
          <DashboardCard title="Organizer ADD" >
    
            <FormGroup>
              <FormControl>
               <EditContentComp loading={loading} data={data} />
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}

export default EditContent