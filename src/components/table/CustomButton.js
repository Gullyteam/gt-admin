import React from 'react'
import { Button, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ToggleOff from '@mui/icons-material/ToggleOff';
import { NavLink } from 'react-router-dom';


const CustomButton = (id) => {
  
    
    return (
        <Stack direction="row" spacing={4} style={{ margin: '10px 0px' }}>
            <NavLink style={{color:"#4570ea"}} to={'view/'+id.id}><VisibilityIcon/></NavLink>
            <NavLink style={{color:"#39d4de"}} to={'edit/'+id.id}><EditIcon/></NavLink>
            {/* <NavLink style={{color:"#fb6090"}} to={'delete/'+id.id}><ToggleOff/></NavLink> */}
        </Stack>
    )
}

export default CustomButton
