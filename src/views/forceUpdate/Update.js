import React, { useState ,useEffect  } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { addDataUsingApi } from 'src/utils/api';

//Navigation
import { useParams } from 'react-router-dom';

//useFetchAnother
import useFetchAnother from 'src/hooks/useFetchAnother';

import { Button, FormGroup, FormControl, TextField,Checkbox,FormControlLabel } from '@mui/material';

const Update = (action) => {
  const { id } = useParams();
  const intialvalue = {
    version: 0,
    forceUpdate: false
  }
  const [formData, setFormData] = useState(intialvalue);

  

// fetch all users data from  
const { data,loading }= useFetchAnother(`/admin/getupdate`);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

   // Use useEffect to set organizer data when data becomes available
   useEffect(() => {
    console.log(data?.data)
    if (data && data.data) {
        setFormData(data.data);
      }
}, [data]);

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    addDataUsingApi(`/admin/update/${data.data._id}`, formData)
    .then((res) => {
      console.log("responce",res.data)
    //   navigate('/organizer');
    });
  };


  return (
    <PageContainer title="Settings " description="this is Sample page">
      <DashboardCard title="Force Update Setting">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl>
              <TextField
                required
                id="outlined-required"
                label="Required"
                name="version"
                type="number"
                value={formData.version}
                onChange={handleInputChange}
              />
            </FormControl>
            <br />
            <FormControlLabel
              control={<Checkbox name="forceUpdate" checked={formData.forceUpdate} onChange={handleInputChange} />}
              label="Force Update"
            />
          </FormGroup>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default Update;
