import './App.css'
import PlatformsTable from './components/PlatformsTable';
import InputsBox from './components/InputsBox';
import Collapsible from 'react-collapsible';
import { Button, Grid } from '@mui/material';
import { LogBox } from './components/LogBox';

function App() {

  return (
    <div className="App">
      <h1>FedTool</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>

          <InputsBox />
          <PlatformsTable />
          <Button variant="contained" style={{ marginRight: "10px" }}>Add Destination</Button>
          <Button variant="contained">Publish Selected</Button>

        </Grid>
        <Grid item xs={12} md={4}>
          <LogBox />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
