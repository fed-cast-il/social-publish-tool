import { Button, Grid, TextField, Box, Alert } from '@mui/material';
import { useState } from 'react';

export default function InputsBox() {
  const [imageUrl, setImageUrl] = useState(null)
  const [alert, setAlert] = useState(false)

  function onImageChange(file) {
    setAlert(false)
    setImageUrl('')

    if (file.type.split('/')[0] === 'image') {
      setImageUrl(URL.createObjectURL(file))
    } else {
      setAlert(true)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          id="outlined-basic"
          label="Your Text"
          multiline
          fullWidth 
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          id="outlined-basic"
          label="Url address"
          fullWidth 
         />
      </Grid>

      <Grid item xs={12} md={4}>

        <Button
          variant="contained"
          component="label"
          style={{ height: 50, marginBottom: 10, width: '100%' }}>

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