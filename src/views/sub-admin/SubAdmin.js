import React from 'react'
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditSubAdmin from 'src/components/forms/theme-elements/sub_admin/EditSubAdmin';

//Navigation
import { useParams } from 'react-router-dom';

//useFetchAnother
 import useFetch from 'src/hooks/useFetch';

import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const SubAdmin = (action) => {

    const {id} = useParams();

    const action_status= action?.action;

    const { data,loading }= useFetch(`/admin/subadmin/${id}`);

    const Formdata = [
        { helperText: "Please Add Email Here", name:"email"  },
        { helperText: "Please Add Firstname Here", name:"firstname"  },
        { helperText: "Please Add LastName Here", name:"lastname" },
        { helperText: "Please Add Contact Number Here", name:"phone" },

        
      ]

      return (
        <PageContainer title="SubAdmin ADD" description="this is Sample page">
          <DashboardCard title="SubAdmin ADD" >
            <FormGroup>
              <FormControl>
                <EditSubAdmin  Formdata={Formdata} loading={loading} data={data} action={action}/>
              </FormControl>
            </FormGroup>
    
          </DashboardCard>
        </PageContainer>
      )
}

export default SubAdmin