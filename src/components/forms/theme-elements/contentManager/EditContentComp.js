import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import { addDataUsingApi, editDataUsingApiputmethod } from 'src/utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { styled, Paper, Button, Grid, TextField } from '@mui/material';


//Styling Of Item Component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EditContent = (data) => {

  //it gives the the parameter in the url 
  const { id } = useParams();
//this is use to navigate to the url
  let navigate = useNavigate();

  
//usestate hook for content intially it set to null
  const [editorHtml, setEditorHtml] = useState('');

// functional is use to store the content to variable editorHtml
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

console.log(data)
//useeffects is used to store the content to the variable editorHtml when data is changed
  useEffect(() => {
    // Check if data is available and set the editorHtml accordingly
    if (data && data.data && data.data.status === true) {
      // Use the message from the API as the initial content
      setEditorHtml(data.data.data.contenttext);
    }
  }, [data]);

  const addContentData = () => {
  
    if ( editorHtml !== "") {
      const contentdata = {
        content: editorHtml,
        status:"active"
      }
      console.log(contentdata);
      editDataUsingApiputmethod(`/admin/${id}`, contentdata)
        .then((res) => {
          // console.log(res.data)
          navigate('/content');

        });
    }
  };

// console.log(data?.data?.status===true);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>

          <TextField
           disabled
            fullWidth
            id="outlined-required"
            type="text"
            value={id}
            inputProps={{ style: { textTransform: "uppercase" } }}
          />
        </Item>
        <Item>
          <ReactQuill
            theme="snow"
            value={editorHtml}
            onChange={handleEditorChange}
            style={{  height: "300px", width: "100%", paddingBottom:"50px" }}
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Button variant="contained" onClick={() => addContentData()}>Submit</Button>
        </Item>
      </Grid>

    </Grid>
  )
}

export default EditContent