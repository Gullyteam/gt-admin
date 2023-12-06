import React from 'react';
import { Card, CardContent, Typography, Stack, Box, Button } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  addButton,
  addurl
}) => {

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={undefined}
    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6} >
                {title ?<Typography variant="h5">{title}</Typography>: ''}
                { addButton ? <NavLink to={addurl}><Button variant="contained"><IconCirclePlus style={{marginRight:"8px"}} /> { addButton}</Button></NavLink>:''}
              </Stack>
                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
