import React, { useState, useEffect } from 'react';
import {
  styled,
  Paper,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
  Box,
} from '@mui/material';
import { addDataUsingApi, deleteDataUsingApi } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EditFessOffer = (data) => {
  let navigate = useNavigate();
  const { id } = useParams();

  const initialValue = {
    couponName: '',
    minAmount: '',
    discount: '',
    title:'',
    description:'',
    type: 'Percentage',
    startDate: '',
    endDate: '',
  };

  const [fessoffer, setFessoffer] = useState(initialValue);

  useEffect(() => {
    if (data?.data?.data) {
      setFessoffer(data.data.data);
    }
  }, [data]);

  const onValueChange = (e) => {
    setFessoffer({ ...fessoffer, [e.target.name]: e.target.value });
  };

  const editFessofferData = async () => {
    addDataUsingApi(`/admin/updateCoupon/${id}`, fessoffer).then((res) => {
      navigate('/fessoffer');
    });
  };

  const deleteFessofferData = async () => {
    deleteDataUsingApi(`/admin/fessoffer/${id}`, fessoffer).then((res) => {
      navigate('/fessoffer');
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>
          <TextField
            key="Coupon Name"
            required
            fullWidth
            id="outlined-required"
            type="string"
            value={fessoffer.couponName}
            label="Coupon Name"
            helperText="Coupon Name"
            name="couponName"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="Minimum Amount"
            required
            fullWidth
            id="outlined-required"
            type="string"
            value={fessoffer.minAmount}
            label="Minimum Amount"
            helperText="Minimum Amount At Coupon Applicable"
            name="minAmount"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="discount"
            required
            fullWidth
            id="outlined-required"
            type="string"
            value={fessoffer.discount}
            label="Discount"
            helperText="Discount"
            name="discount"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="title"
            required
            fullWidth
            id="outlined-required"
            type="string"
            value={fessoffer.title}
            label="Title"
            helperText="Title"
            name="title"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TextField
            key="description"
            required
            fullWidth
            id="outlined-required"
            type="string"
            value={fessoffer.description}
            label="Description"
            helperText="Description"
            name="description"
            onChange={(e) => onValueChange(e)}
            // error={!organizer[formitem?.name]}
          />
        </Item>
      </Grid>

      <Grid item xs={6}>
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fessoffer.type}
            name="type"
            label="Type"
            onChange={onValueChange}
          >
            <MenuItem value={'Flat'}>Flat</MenuItem>
            <MenuItem value={'Percentage'}>Percentage</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <Box sx={{ m: 1 }}>
          <TextField
            label="Start Date"
            type="date"
            name="startDate"
            value={
              fessoffer.startDate ? new Date(fessoffer.startDate).toISOString().split('T')[0] : ''
            }
            onChange={onValueChange}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box sx={{ m: 1, width: 510 }}>
          <TextField
            label="End Date"
            type="date"
            name="endDate"
            value={fessoffer.endDate ? new Date(fessoffer.endDate).toISOString().split('T')[0] : ''}
            onChange={onValueChange}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Item>
          {data?.action.action === 'edit' ? (
            <Button variant="contained" onClick={editFessofferData}>
              Edit Data
            </Button>
          ) : data?.action.action === 'delete' ? (
            <Button variant="contained" onClick={deleteFessofferData}>
              Delete Fessoffer
            </Button>
          ) : (
            ''
          )}
        </Item>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default EditFessOffer;
