import { Button, Grid, TextField, Box, Alert } from '@mui/material';
import { useState } from 'react';

export default function InputsBox() {
    const [imageUrl, setImageUrl] = useState(null)
    const [alert, setAlert] = useState(false)

  function onImageChange(file) {
    if(file && file.type.split('/')[0] === 'image'){
      setImageUrl(URL.createObjectURL(file))
    } else {
      setAlert(true)
    }
}

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <TextField
          id="outlined-basic"
          label="Your Text"
          multiline
          style={{ width: "90%" }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          id="outlined-basic"
          label="Url address"
          multiline
          style={{ width: "90%" }} />
      </Grid>

      <Grid item xs={12} md={4}>

        <Button
          variant="contained"
          component="label"
          style={{ width: "90%", height: 50, marginBottom: 10, textTransform: "none" }}>

          Upload Image
          <input
            type="file"
            hidden
            onChange={e => onImageChange(e.target.files[0])}
          />
        </Button>

       {alert ? <Alert style={{ marginBottom: 7 }} severity="error">This is not an image file</Alert> : null} 

        {imageUrl && (
          <Box mt={0} textAlign="center">
            <div>Image Preview:</div>
            <img src={imageUrl} alt={imageUrl.name} className="imgPreview" />
          </Box>)}

      </Grid>
      
    </Grid>
  );
}