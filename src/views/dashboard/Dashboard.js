import React, { useEffect  } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import useFetch from 'src/hooks/useFetch';

// components
// import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
// import RecentTransactions from './components/RecentTransactions';
// import ProductPerformance from './components/ProductPerformance';
// import Blog from './components/Blog';
// import MonthlyEarnings from './components/MonthlyEarnings';


const Dashboard = () => {


 // fetch all Dashboard data from  
 const { data,loading }= useFetch(`/admin/dashboard`);

//  console.log("dashboard",data);

//Use useEffect to set organizer data when data becomes available
// useEffect(() => {
//   console.log("dashboard12",data?.data)
// }, [data]);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid> */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup title={"Total Users"} count={data?.data?.totalUserCount} />
              </Grid>
              {/* <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid> */}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup  title={"Total Team"} count={data?.data?.totalOrganizerCount}/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid
               item xs={12}>
                <YearlyBreakup  title={"Organizer Count"} count={data?.data?.totalTeamCount}/>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup title={"hello"}/>
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
