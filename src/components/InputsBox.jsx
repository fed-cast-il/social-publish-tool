import { Button, Grid, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function InputsBox() {
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
          />

        </Button>
      </Grid>

    </Grid>
  );
}