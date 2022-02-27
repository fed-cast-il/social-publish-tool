import { Button, Grid, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function TextArea() {
  return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Write your post content here"
            style={{ width: 300, height: 100 }}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField id="outlined-basic" label="Url address" variant="outlined"  style={{ width: 306 }} />
        </Grid>

        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            component="label"
            style={{ width: 306, height: 50, marginBottom: 10, textTransform: "none" }}>

            Upload Image
            <input
              type="file"
            />

          </Button>
        </Grid>

      </Grid>
  );
}