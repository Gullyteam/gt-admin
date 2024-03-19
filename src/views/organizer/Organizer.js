import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import EditOrganizer from 'src/components/forms/theme-elements/organizer/EditOrganizer';

//Navigation
import { useParams } from 'react-router-dom';

//useFetchAnother
import useFetchAnother from 'src/hooks/useFetchAnother';

import { styled, Paper, FormGroup, FormControl, Grid } from '@mui/material';

const Organizer = (action) => {
  const { id } = useParams();

  const action_status = action?.action;

  const { data, loading } = useFetchAnother(`/admin/getTournamentById/${id}`);

  console.log(data);

  const Formdata = [
    { helperText: 'Tournament Name', name: 'tournamentName', type: 'text' },
    { helperText: 'Ball Charges', name: 'ballCharges', type: 'number' },
    { helperText: 'Ball Type', name: 'ballType', type: 'text' },
    { helperText: 'Breakfast Charges', name: 'breakfastCharges', type: 'number' },
    { helperText: 'Fees', name: 'fees', type: 'text' },
    { helperText: 'gameType', name: 'gameType', type: 'text' },
    { helperText: 'Latest Location', name: 'latestLocation', type: 'text' },
    { helperText: 'Match Type', name: 'matchType', type: 'text' },
    { helperText: 'Pitch Type', name: 'pitchType', type: 'text' },

    { helperText: 'Stadium Address', name: 'stadiumAddress', type: 'text' },
    { helperText: 'Tournament Category', name: 'tournamentCategory', type: 'text' },
    { helperText: 'Tournament StartDateTime', name: 'tournamentStartDateTime', type: 'text' },
    { helperText: 'Tournament EndDateTime', name: 'tournamentEndDateTime', type: 'text' },
    { helperText: 'Tournament Limit', name: 'tournamentLimit', type: 'number' },
    { helperText: 'Tournament Prize', name: 'tournamentPrize', type: 'text' },
  ];

  return (
    <PageContainer title="Organizer ADD" description="this is Sample page">
      <DashboardCard title="Organizer ADD">
        <FormGroup>
          <FormControl>
            <EditOrganizer Formdata={Formdata} loading={loading} data={data} action={action} />
          </FormControl>
        </FormGroup>
      </DashboardCard>
    </PageContainer>
  );
};

export default Organizer;
