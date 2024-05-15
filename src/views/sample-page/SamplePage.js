import React from 'react';
import { Typography,TableContainer,Table, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">
     
        <Typography>This is a sample page</Typography>
        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Nikhil</TableCell>
                <TableCell>Nikhilghagre</TableCell>
                <TableCell>123456789</TableCell>
                <TableCell>12345</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nikhil</TableCell>
                <TableCell>Nikhilghagre</TableCell>
                <TableCell>123456789</TableCell>
                <TableCell>12345</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
