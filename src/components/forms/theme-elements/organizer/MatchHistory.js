import React, { useRef, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import cardImage from 'src/assets/images/backgrounds/card.jpg';

const MatchHistory = (data, loading) => {
  const { onPageChange } = data;
  const { url } = useSelector((state) => state.home);
 
  const navigate = useNavigate();

  console.log(data);

  return (
   
     <Grid container spacing={2}>
      {loading
        ? data?.data?.map((item, index) => {

            console.log("item",item.team1.teamName);
            
            return <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia component="img" alt="Thumbnail" height="225" image={cardImage} />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                  {item.team1.teamName+" Vs  "+ item.team2.teamName }
                </Typography>
                <NavLink  to={"/AllMatchesData/"+item._id} style={{Color:"#12c9ff", margin: "20px 0", textDecoration:"none"}}>View Score</NavLink>
              </CardContent>
            </Card>
          </Grid>
          })
        : '<p>loaded</p>'}
</Grid>
      
    
  );
};

export default MatchHistory;
