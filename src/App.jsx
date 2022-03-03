import './App.css'
import PlatformsTable from './components/PlatformsTable';
import InputsBox from './components/InputsBox';
import Collapsible from 'react-collapsible';
import { Button, Grid } from '@mui/material';

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

          <h3>Logs Panel</h3>
          <Collapsible trigger="Show logs" triggerWhenOpen="Close" transitionTime="100">
            <p>
              This is the collapsible content.
              It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component.
            </p>
          </Collapsible>

        </Grid>
      </Grid>
    </div>
  )
}

export default App
