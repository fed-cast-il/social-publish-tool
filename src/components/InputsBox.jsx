import { Button, Grid, TextField, Box } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useEffect, useState } from 'react';

export default function InputsBox() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Write your post content here"
          style={{ width: "90%", height: 100 }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField id="outlined-basic" label="Url address" multiline variant="outlined" style={{ width: "90%" }} />
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
            onChange={e => setSelectedImage(e.target.files[0])}
          />
        </Button>

        {imageUrl && (
          <Box mt={0} textAlign="center">
            <div>Image Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} className="imgPreview" />
          </Box>)}

      </Grid>

    </Grid>
  );
}