import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    margin: 'auto',
    padding: theme.spacing(4),
  },
}));

const Tournament = (data, loading) => {
  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Tournament : {data?.data?.data?.tournamentName}
      </Typography>
      {/* <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
      {data?.data?.data?.tournamentName}
      </Typography> */}
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="left" gutterBottom>
              Transaction Status : {data?.data?.data?.status}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
              Transaction Id : {data?.data?.data?.orderId}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
              Transaction Create Date : {moment(data?.data?.data?.createdAt).format('YYYY-MM-DD  HH:mm')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
          Transaction Update Date :  {moment(data?.data?.data?.updatedAt).format('YYYY-MM-DD  HH:mm')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
              Transaction Status : {data?.data?.data?.status}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
              Transaction Fees : {data?.data?.data?.amountWithoutCoupon}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
             Coupon Use : {data?.data?.data?.coupon}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
             Discount Amount : {data?.data?.data?.amount}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="left" gutterBottom>
             User Email : {data?.data?.data?.email}
            </Typography>
          </Grid>
          
        </Grid>
      </form>
    </div>
  );
};

export default Tournament;
